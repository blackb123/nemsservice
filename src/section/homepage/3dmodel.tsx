import React, { useState, Suspense, useEffect, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Decal, 
  Center, 
  ContactShadows, 
  Environment,
  Float
} from '@react-three/drei';
import { Upload } from 'lucide-react';
import * as THREE from 'three';
const ShirtModel = ({ logoUrl, position }: { logoUrl: string; position: string }) => {
  const { nodes } = useGLTF('/model/tshirt/scene.gltf') as any;
  const logoTexture = useLoader(THREE.TextureLoader, logoUrl);

  // COORDINATE CONFIG
  // Given your JSON bounds (-1400 to -2700), your Z-axis is likely the depth.
  // We need to find the "Outer shell" of the mesh.
const posConfig: any = {
    front: { 
      position: [-1000, 100, -2200], // Centered based on your JSON min/max
      rotation: [0, 0, 0], 
      scale: 500 
    },
    heart: { 
      position: [-1450, 1450, -2200], 
      rotation: [200, 0, 0], 
      scale: 200 
    },
    back: { 
      position: [-1550, 190, -2800], // Flipped to the other side of the Z-axis
      rotation: [0, Math.PI, 0], 
      scale: 600 
    },
  };
  const current = posConfig[position] || posConfig.front;

  return (
    <group position={[0, 0, 0]} dispose={null}>
      {Object.values(nodes).map((node: any, i: number) => {
        if (node.geometry) {
          return (
            <mesh key={i} geometry={node.geometry} material={node.material}>
              {node.name === "Material1718" && (
                <>
                  {/* DEBUG HELPER: A red box to show us WHERE the decal is projecting */}
                  <mesh position={current.position}>
                    <boxGeometry args={[50, 50, 50]} />
                    <meshBasicMaterial color="red" />
                  </mesh>

                  <Decal 
                  position={current.position} 
                  rotation={current.rotation} 
                  scale={current.scale} 
                  map={logoTexture}
                >
                  <meshStandardMaterial
                    map={logoTexture}
                    transparent
                    polygonOffset
                    polygonOffsetFactor={-1000} // Keeps it on top of the fabric
                    depthTest={false}           // Makes it visible even if it's slightly "inside"
                  />
                </Decal>
                </>
              )}
            </mesh>
          );
        }
      })}
    </group>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function PoloCustomizer() {
  const [logo, setLogo] = useState<string>("https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg");
  const [pos, setPos] = useState<'front' | 'heart' | 'back'>('front');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogo(url);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#f3f4f6] font-sans overflow-hidden">
      {/* SIDEBAR */}
      <div className="w-full md:w-96 p-8 bg-white shadow-2xl z-20 flex flex-col justify-between border-r border-gray-100">
        <div>
          <div className="mb-10">
            <h2 className="text-4xl font-black text-[#1b0f53] italic uppercase tracking-tighter">
              Studio <span className="text-[#d87d15]">3D</span>
            </h2>
          </div>

          <div className="space-y-8">
            <section>
              <div className="relative group border-2 border-dashed border-gray-200 rounded-2xl p-8 hover:border-[#d87d15] bg-gray-50 flex flex-col items-center cursor-pointer transition-all">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                <Upload className="text-gray-400 group-hover:text-[#d87d15] mb-2" />
                <span className="text-xs font-semibold text-gray-500">Update Logo</span>
              </div>
            </section>

            <section className="grid grid-cols-3 gap-3">
              {(['front', 'heart', 'back'] as const).map((id) => (
                <button
                  key={id}
                  onClick={() => setPos(id)}
                  className={`py-4 rounded-xl border-2 transition-all uppercase text-[10px] font-bold ${
                    pos === id ? "bg-[#1b0f53] text-white border-[#1b0f53]" : "bg-white text-gray-400 border-gray-100 hover:border-gray-300"
                  }`}
                >
                  {id}
                </button>
              ))}
            </section>
          </div>
        </div>

        <button className="w-full py-5 bg-[#d87d15] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
          Confirm Order
        </button>
      </div>

      {/* VIEWPORT */}
      <div className="flex-1 relative bg-[#eef0f2]">
        <Canvas 
          shadows 
          camera={{ position: [0, 0.8, 6.0], fov: 25 }} 
          gl={{ preserveDrawingBuffer: true, antialias: true, toneMapping: THREE.NoToneMapping }}
        >
          <ambientLight intensity={0.7} />
          <Environment preset="city" />
          <spotLight position={[5, 10, 5]} intensity={2} castShadow />
          
          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <Center top precise scale={0.0031}>
                <ShirtModel logoUrl={logo} position={pos} />
              </Center>
            </Float>
            <ContactShadows position={[0, -0.01, 0]} opacity={0.3} scale={10} blur={2.5} />
          </Suspense>

          <OrbitControls 
            enablePan={false}
            target={[0, 0.8, 0]} 
            minDistance={3}
            maxDistance={8} 
            makeDefault 
          />
        </Canvas>
      </div>
    </div>
  );
}