'use client'

import React, { useState } from "react";

export default function Home() {

  const [clickCoordinate, setClickCoordinate] = useState<{x: number, y: number, bulletNo: number}[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {

    const x = event.clientX;
    const y = event.clientY;
    const bulletNo = bulletNumberRandomize();

    console.log(x, y);

    setClickCoordinate(prevCoordinates => [...prevCoordinates, { x, y, bulletNo }]);
  };

  const bulletNumberRandomize = () => {
    return Math.floor(Math.random() * 7) + 1;
  };

  return (
    <main>
      <div className="app-container" onClick={handleClick}>
        {/* No renderizar imágenes antes del primer clic */}
      </div>
      {/* Renderizar los elementos de imagen solo cuando se hace clic */}
      {clickCoordinate.map(({ x, y, bulletNo }, index) => (
        <img
          key={index}
          src={`/bullets/bullet-hole${bulletNo}.png`}
          alt="Imagen"
          style={{ 
            position: 'absolute',
            top: y,
            left: x,
            transform: 'translate(-50%,-50%)',
            userSelect: 'none', 
          }}
        />
      ))}
    </main>
  );
}
