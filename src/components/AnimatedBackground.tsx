import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({ color: 0x8080ff, transparent: true, opacity: 0.5 }), []);

  useFrame(({ clock }) => {
    if (pointsRef.current && lineRef.current) {
      const time = clock.getElapsedTime();
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const linePositions = lineRef.current.geometry.attributes.position.array as Float32Array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += Math.sin(time + i * 0.1) * 0.01;
        positions[i3 + 1] += Math.cos(time + i * 0.1) * 0.01;
        positions[i3 + 2] += Math.sin(time + i * 0.1) * 0.01;

        // Connect nearby particles with lines
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 2) {
            linePositions[lineIndex++] = positions[i3];
            linePositions[lineIndex++] = positions[i3 + 1];
            linePositions[lineIndex++] = positions[i3 + 2];
            linePositions[lineIndex++] = positions[j3];
            linePositions[lineIndex++] = positions[j3 + 1];
            linePositions[lineIndex++] = positions[j3 + 2];
          }
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      lineRef.current.geometry.setDrawRange(0, lineIndex / 3);
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <Points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color={0x8080ff} sizeAttenuation transparent opacity={0.8} />
      </Points>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount * particleCount}
            array={new Float32Array(particleCount * particleCount * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <primitive object={lineMaterial} attach="material" />
      </lineSegments>
    </group>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <group>
      <ParticleNetwork />
    </group>
  );
};

export default AnimatedBackground;