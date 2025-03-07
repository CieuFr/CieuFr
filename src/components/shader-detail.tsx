"use client";

import { useRef, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Dummy shaders data
const shadersData = [
  {
    id: 1,
    title: "Fluid Simulation",
    description:
      "Une simulation de fluide basée sur les équations de Navier-Stokes.",
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;
      
      #define PI 3.14159265359
      
      vec3 colorA = vec3(0.1, 0.3, 0.9);
      vec3 colorB = vec3(0.7, 0.05, 0.5);
      
      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.x *= uResolution.x / uResolution.y;
        
        vec2 pos = vec2(0.5) - st;
        float r = length(pos) * 2.0;
        float a = atan(pos.y, pos.x);
        
        float f = abs(cos(a * 3.0 + uTime) * sin(a * 2.0 - uTime * 0.5) * 0.8 + cos(a * 5.0 + uTime));
        
        vec3 color = mix(colorA, colorB, smoothstep(0.3, 0.6, f));
        color = mix(color, vec3(0.9, 0.9, 0.9), smoothstep(0.8, 0.9, f * r));
        
        float animTime = uTime * 0.5;
        float pulse = sin(animTime) * 0.5 + 0.5;
        color = mix(color, vec3(1.0, 1.0, 1.0), pulse * smoothstep(0.95, 1.0, f));
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  },
  {
    id: 2,
    title: "Raymarching",
    description: "Un shader de raymarching pour créer des scènes 3D complexes.",
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;
      
      #define MAX_STEPS 100
      #define MAX_DIST 100.0
      #define SURF_DIST 0.001
      
      float sdSphere(vec3 p, float r) {
        return length(p) - r;
      }
      
      float sdBox(vec3 p, vec3 b) {
        vec3 d = abs(p) - b;
        return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
      }
      
      float getDist(vec3 p) {
        float sphere = sdSphere(p - vec3(0, 1.0 * sin(uTime), 0), 1.0);
        float box = sdBox(p - vec3(2.0 * sin(uTime), 0, 0), vec3(0.75));
        return min(sphere, box);
      }
      
      float rayMarch(vec3 ro, vec3 rd) {
        float dO = 0.0;
        for(int i = 0; i < MAX_STEPS; i++) {
          vec3 p = ro + rd * dO;
          float dS = getDist(p);
          dO += dS;
          if(dO > MAX_DIST || dS < SURF_DIST) break;
        }
        return dO;
      }
      
      vec3 getNormal(vec3 p) {
        float d = getDist(p);
        vec2 e = vec2(0.001, 0);
        vec3 n = d - vec3(
            getDist(p - e.xyy),
            getDist(p - e.yxy),
            getDist(p - e.yyx)
        );
        return normalize(n);
      }
      
      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
        
        vec3 col = vec3(0);
        
        vec3 ro = vec3(0, 0, -3);
        vec3 rd = normalize(vec3(uv, 1));
        
        float d = rayMarch(ro, rd);
        
        if(d < MAX_DIST) {
          vec3 p = ro + rd * d;
          vec3 n = getNormal(p);
          vec3 lightDir = normalize(vec3(1, 1, -1));
          float diff = max(0.0, dot(n, lightDir));
          vec3 diffuse = vec3(1.0, 0.8, 0.6) * diff;
          vec3 ambient = vec3(0.1, 0.2, 0.4);
          col = diffuse + ambient;
        }
        
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  },
  {
    id: 3,
    title: "Fractal Noise",
    description:
      "Génération de textures fractales avec différentes couches de bruit.",
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;
      
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }
      
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        vec2 u = f * f * (3.0 - 2.0 * f);
        
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 0.0;
        
        for(int i = 0; i < 6; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        
        return value;
      }
      
      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        st.x *= uResolution.x / uResolution.y;
        
        vec2 q = vec2(0.);
        q.x = fbm(st + vec2(0.0, 0.0) + 0.1 * uTime);
        q.y = fbm(st + vec2(5.2, 1.3) + 0.2 * uTime);
        
        vec2 r = vec2(0.);
        r.x = fbm(st + 4.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
        r.y = fbm(st + 4.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);
        
        float f = fbm(st + r);
        
        vec3 color = mix(
          vec3(0.101961, 0.619608, 0.666667),
          vec3(0.666667, 0.666667, 0.498039),
          clamp((f * f) * 4.0, 0.0, 1.0)
        );
        
        color = mix(
          color,
          vec3(0.0, 0.0, 0.164706),
          clamp(length(q), 0.0, 1.0)
        );
        
        color = mix(
          color,
          vec3(0.666667, 1.0, 1.0),
          clamp(length(r.x), 0.0, 1.0)
        );
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  },
  {
    id: 4,
    title: "Audio Visualizer",
    description: "Visualisation audio réactive en temps réel.",
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;
      
      #define PI 3.14159265359
      
      void main() {
        vec2 st = vUv;
        
        float frequency = 1.0;
        float amplitude = 0.5;
        float time = uTime * 0.5;
        
        float r = abs(sin(st.x * frequency * 3.14159 + time) * amplitude);
        float g = abs(sin(st.x * frequency * 6.28318 + time * 1.5) * amplitude);
        float b = abs(sin(st.x * frequency * 9.42477 + time * 2.0) * amplitude);
        
        float d = 0.1 / abs(st.y - 0.5 * (r + g + b) / 3.0);
        
        vec3 color = mix(
          vec3(r, g, b),
          vec3(r * 0.5, g * 0.5, b),
          st.y
        );
        
        color *= d;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  },
];

// Define interface for ShaderPlane props
interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
}

function ShaderPlane({ vertexShader, fragmentShader }: ShaderPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  const uniforms = useRef({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2() },
  });

  useEffect(() => {
    uniforms.current.uResolution.value.set(size.width, size.height);
  }, [size]);

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.current.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[2, 2, 1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}

// Custom hook to apply global styles
function useGlobalStyles() {
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");

    // Add the CSS content
    styleElement.textContent = `
      /* Remove all margins, paddings, and scrollbars */
      body, html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
      
      /* Make header transparent and floating */
      header {
        position: fixed !important;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        background-color: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(8px);
        border-bottom: none !important;
        box-shadow: none !important;
      }
      
      /* Dark mode header */
      .dark header {
        background-color: rgba(31, 41, 55, 0.1) !important;
      }
      
      /* Remove container constraints */
      main {
        padding: 0 !important;
        margin: 0 !important;
        max-width: none !important;
        width: 100% !important;
        height: 100vh !important;
      }
      
      /* Remove container constraints */
      .container {
        max-width: none !important;
        width: 100% !important;
        padding: 0 16px !important;
      }
    `;

    // Append the style element to the document head
    document.head.appendChild(styleElement);

    // Clean up function to remove the style element when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
}

export default function ShaderDetail() {
  const { shaderId } = useParams({ from: "/shaders/$shaderId" });
  const shader = shadersData.find((s) => s.id === Number.parseInt(shaderId));

  // Apply global styles
  useGlobalStyles();

  if (!shader) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Shader non trouvé
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Le shader que vous recherchez n'existe pas.
        </p>
        <Link
          to="/shaders"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Retour aux shaders
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas className="w-full h-full">
        <ShaderPlane
          vertexShader={shader.vertexShader}
          fragmentShader={shader.fragmentShader}
        />
        <OrbitControls enablePan={false} />
      </Canvas>

      {/* Floating UI elements */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
        <Link
          to="/shaders"
          className="px-4 py-2 bg-black bg-opacity-30 text-white rounded-md hover:bg-opacity-50 transition-colors backdrop-blur-sm flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour aux shaders
        </Link>

        <div className="px-4 py-2 bg-black bg-opacity-30 text-white rounded-md backdrop-blur-sm">
          <h2 className="text-lg font-semibold">{shader.title}</h2>
        </div>
      </div>
    </div>
  );
}
