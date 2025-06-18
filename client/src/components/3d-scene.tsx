import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/ImageToStl.com_Controller.glb");

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive
        object={scene}
        scale={0.3}
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Float>
  );
}

function GamingScene() {
  return (
    <div className="h-[50vh] w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-5, 5, -5]} intensity={1} />
          <spotLight
            position={[3, 4, 2]}
            angle={0.2}
            penumbra={0.5}
            intensity={4}
            castShadow
          />
          <pointLight position={[4, 3, 1]} intensity={3} />
          <pointLight position={[-4, 3, -1]} intensity={2} />
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
