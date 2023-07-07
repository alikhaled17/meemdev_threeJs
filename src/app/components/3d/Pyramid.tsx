import React, { useEffect } from "react";
import * as THREE from "three";
import MeemLogo from "@/app/assets/images/global/MeemdevLogo.png";
import XMeemLogo from "@/app/assets/images/global/x.png";
import Image from "next/image";

const Pyramid = () => {
  const scene = new THREE.Scene();

  const createCone = ({ radius, height, positionX }: any) => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZ3CcfswtVNKiy8KGGsFWtGTKHvNmmAnL3H6XABcpk3WwtKMwU58JcNRucgUxu17pg5Y"
    );

    const geometry = new THREE.ConeGeometry(
      radius,
      height,
      4,
      1,
      false,
      1,
      6.283185307179586
    );

    const material = new THREE.MeshMatcapMaterial({ matcap: texture });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.x = positionX;
    return cone;
  };

  useEffect(() => {
    const preventZooming = (e: any) => {
      if (e.ctrlKey) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("wheel", preventZooming, {
      passive: false,
    });

    const camera = new THREE.PerspectiveCamera(
      window.innerWidth < 700 ? 150 : 85,
      window.innerWidth / window.innerHeight
    );
    camera.position.z = 3;
    camera.position.y = -0.51;
    camera.rotation.z = -0.025;
    scene.add(camera);

    const cone = createCone({ radius: 1, height: 1, positionX: -2.5 });
    const cone2 = createCone({ radius: 1, height: 1.15, positionX: 0.02 });
    const cone3 = createCone({ radius: 1, height: 1.3, positionX: 2.9 });

    scene.add(cone);
    scene.add(cone2);
    scene.add(cone3);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      (window.innerWidth / 100) * 98,
      (window.innerHeight / 100) * 98
    );

    document.body.appendChild(renderer.domElement);

    window.setTimeout(() => {
      renderer.render(scene, camera);
    }, 3000);

    const tick = (c: any, n: number) => {
      window.requestAnimationFrame(() => tick(c, n));
      c.rotation.y += n;
      renderer.render(scene, camera);
    };
    tick(cone, 0.004);
    tick(cone2, 0.005);
    tick(cone3, 0.006);
  });

  return (
    <div className="canvas_header">
      <Image src={MeemLogo} alt="MeemLogo" />
    </div>
  );
};

export default Pyramid;
