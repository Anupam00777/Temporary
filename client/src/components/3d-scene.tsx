import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

function Model() {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    mtlLoader.load("/models/Controller.mtl", (materials) => {
      materials.preload();
      objLoader.setMaterials(materials);
      objLoader.load("/models/Controller.obj", (object: THREE.Group) => {
        setModel(object);
      });
    });
  }, []);

  if (!model) return null;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive
        object={model}
        scale={isMobile ? 0.17 : 0.25}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Float>
  );
}

function GamingScene() {
  const isMobile = useIsMobile();

  return (
    <div className="h-[50vh] w-full">
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 4 : 5],
          fov: isMobile ? 35 : 45,
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <directionalLight position={[-5, 5, -5]} intensity={0.4} />
          <spotLight
            position={[3, 4, 2]}
            angle={0.2}
            penumbra={0.5}
            intensity={1.5}
            castShadow
          />
          <pointLight position={[4, 3, 1]} intensity={1} />
          <pointLight position={[-4, 3, -1]} intensity={0.8} />
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default GamingScene;
