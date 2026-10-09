"use client";

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import * as THREE from 'three';

const TruncatedPyramid = ({ position, isCenter, id }: { position: [number, number, number], isCenter: boolean, id: string }) => {
  const [hovered, setHovered] = useState(false);
  
  // Highlight some specific blocks to match the pink pattern in the screenshot
  // The screenshot shows a cross/ring of pink blocks around the center
  const isPink = 
    ['0-1', '0--1', '1-0', '-1-0', '1-1', '-1--1', '1--1', '-1-1'].includes(id);

  const color = hovered ? "#fff" : isPink ? "#d946ef" : "#6366f1"; // White on hover, else pink or indigo
  const emissiveIntensity = hovered || isPink ? 1 : 0;

  return (
    <group position={position}>
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
        rotation={[0, Math.PI / 4, 0]} // Rotate 45deg so edges align with grid
      >
        <cylinderGeometry args={[0.4, 0.8, 0.4, 4]} />
        <meshStandardMaterial 
          color="#050510" 
          emissive={color} 
          emissiveIntensity={0.2} 
          transparent 
          opacity={0.7} 
        />
        <Edges
          linewidth={hovered ? 3 : 2}
          threshold={15}
          color={color}
        />
      </mesh>
      
      {/* Dashed animated lines could be added here, but wireframes give the exact look */}
    </group>
  );
};

const GridGroup = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const gridSize = 3; // 7x7 grid
  const spacing = 1.4;
  
  const boxes = useMemo(() => {
    const arr = [];
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        arr.push({ 
          position: [x * spacing, 0, z * spacing] as [number, number, number], 
          id: `${x}-${z}`,
          isCenter: x === 0 && z === 0
        });
      }
    }
    return arr;
  }, [gridSize, spacing]);

  useFrame((state) => {
    if (groupRef.current) {
      // Tilt based on mouse
      const targetRotationX = (state.pointer.y * Math.PI) / 12;
      const targetRotationZ = -(state.pointer.x * Math.PI) / 12;
      
      // Interpolate for smooth rotation
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z += (targetRotationZ - groupRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Grid */}
      {boxes.map((box) => (
        <TruncatedPyramid key={box.id} position={box.position} isCenter={box.isCenter} id={box.id} />
      ))}

      {/* Center Golden Sphere */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.1} emissive="#fbbf24" emissiveIntensity={0.5} />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <pointLight position={[0, 2, 0]} intensity={2} color="#fbbf24" distance={5} />
    </group>
  );
};

export default function InteractiveGrid3D() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none md:pointer-events-auto mix-blend-screen" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}>
      <Canvas camera={{ position: [12, 10, 12], fov: 25 }}>
        <GridGroup />
      </Canvas>
    </div>
  );
}
