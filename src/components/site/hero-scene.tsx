"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = mount.clientWidth || 1;
    let height = mount.clientHeight || 1;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070707, 0.048);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 8.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    mount.appendChild(renderer.domElement);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    scene.environmentIntensity = 0.85;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));

    const key = new THREE.DirectionalLight(0xffffff, 4.2);
    key.position.set(5, 7, 6);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x9bb8ff, 2.2);
    rim.position.set(-6, -2, -5);
    scene.add(rim);

    const voltLight = new THREE.PointLight(0xd7ff3d, 90, 26, 1.8);
    voltLight.position.set(-3.5, 1.5, 3.5);
    scene.add(voltLight);

    // Materials
    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x6e6e6a,
      metalness: 0.8,
      roughness: 0.3,
    });
    const brushed = new THREE.MeshStandardMaterial({
      color: 0x9a9a94,
      metalness: 0.9,
      roughness: 0.22,
    });
    const voltMat = new THREE.MeshStandardMaterial({
      color: 0xd7ff3d,
      emissive: 0xd7ff3d,
      emissiveIntensity: 1.6,
      metalness: 0.3,
      roughness: 0.35,
    });

    // Dumbbell
    const dumbbell = new THREE.Group();

    const bar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 4.2, 28),
      brushed,
    );
    bar.rotation.z = Math.PI / 2;
    dumbbell.add(bar);

    const grip = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 1.5, 28),
      new THREE.MeshStandardMaterial({
        color: 0x101010,
        metalness: 0.55,
        roughness: 0.65,
      }),
    );
    grip.rotation.z = Math.PI / 2;
    dumbbell.add(grip);

    for (const side of [-1, 1]) {
      const outerPlate = new THREE.Mesh(
        new THREE.CylinderGeometry(1.08, 1.08, 0.34, 56),
        darkMetal,
      );
      outerPlate.rotation.z = Math.PI / 2;
      outerPlate.position.x = side * 1.5;
      dumbbell.add(outerPlate);

      const innerPlate = new THREE.Mesh(
        new THREE.CylinderGeometry(0.82, 0.82, 0.3, 56),
        brushed,
      );
      innerPlate.rotation.z = Math.PI / 2;
      innerPlate.position.x = side * 1.92;
      dumbbell.add(innerPlate);

      const collar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28, 0.28, 0.34, 32),
        darkMetal,
      );
      collar.rotation.z = Math.PI / 2;
      collar.position.x = side * 2.14;
      dumbbell.add(collar);

      const glowRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.52, 0.035, 16, 64),
        voltMat,
      );
      glowRing.rotation.y = Math.PI / 2;
      glowRing.position.x = side * 2.33;
      dumbbell.add(glowRing);
    }

    dumbbell.position.set(6.1, 1.65, 0);
    dumbbell.rotation.set(0.16, -0.35, 0.42);
    dumbbell.scale.setScalar(1.06);
    scene.add(dumbbell);

    // Orbiting rings
    const rings = new THREE.Group();
    rings.position.copy(dumbbell.position);

    for (let i = 0; i < 3; i += 1) {
      const geometry = new THREE.TorusGeometry(2.05 + i * 0.46, 0.007, 8, 180);
      const material = new THREE.MeshBasicMaterial({
        color: 0xd7ff3d,
        transparent: true,
        opacity: 0.42 - i * 0.1,
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(Math.PI / 2 + i * 0.22, i * 0.55, i * 0.3);
      rings.add(ring);
    }
    scene.add(rings);

    // Dust particles
    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf5f5f2,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Floor grid
    const grid = new THREE.GridHelper(46, 46, 0x3d3d33, 0x1b1b18);
    grid.position.set(0, -3.1, 0);
    scene.add(grid);

    // Accent glow sphere far behind
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(3.4, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xd7ff3d,
        transparent: true,
        opacity: 0.035,
        depthWrite: false,
      }),
    );
    halo.position.set(2.4, 0.4, -4);
    scene.add(halo);

    // Responsive framing
    const applyFraming = () => {
      const mobile = width < 900;
      dumbbell.position.x = mobile ? 0.25 : 6.1;
      rings.position.x = dumbbell.position.x;
      dumbbell.scale.setScalar(mobile ? 0.7 : 0.7);
      camera.position.z = mobile ? 10.8 : 9.1;
      camera.lookAt(mobile ? 0 : 3.35, 0.5, 0);
    };
    applyFraming();

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointerMove = (event: PointerEvent) => {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const onScroll = () => {
      const progress = Math.min(
        window.scrollY / Math.max(window.innerHeight, 1),
        1.4,
      );
      camera.position.y = 0.5 + progress * 1.4;
      camera.position.z = (width < 900 ? 10.8 : 9.1) + progress * 2.4;
      camera.lookAt(width < 900 ? 0 : 3.35, 0.5 + progress * 0.4, 0);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      width = mount.clientWidth || 1;
      height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      applyFraming();
    });
    resizeObserver.observe(mount);

    const clock = new THREE.Clock();
    let frame = 0;

    const render = () => {
      const elapsed = clock.getElapsedTime();

      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;

      dumbbell.rotation.y = -0.35 + elapsed * 0.32 + pointer.x * 0.55;
      dumbbell.rotation.x = 0.16 + Math.sin(elapsed * 0.55) * 0.1 + pointer.y * 0.25;
      dumbbell.position.y = 1.65 + Math.sin(elapsed * 0.85) * 0.15;

      rings.rotation.y = -elapsed * 0.16 + pointer.x * 0.18;
      rings.rotation.x = Math.sin(elapsed * 0.28) * 0.16;
      rings.position.y = dumbbell.position.y;

      particles.rotation.y = elapsed * 0.02;
      particles.rotation.x = pointer.y * 0.03;

      voltLight.position.x = -3.5 + Math.sin(elapsed * 0.7) * 1.6;
      voltLight.position.y = 1.5 + Math.cos(elapsed * 0.5) * 1.1;

      camera.position.x += (pointer.x * 0.55 - camera.position.x) * 0.04;
      camera.lookAt(width < 900 ? 0 : 3.35, 0.5, 0);

      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    if (prefersReduced) {
      renderer.render(scene, camera);
    } else {
      frame = window.requestAnimationFrame(render);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry?.dispose();
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material?.dispose());
        }
        if (object instanceof THREE.GridHelper) {
          object.geometry?.dispose();
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material?.dispose());
        }
      });
      envTexture.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
