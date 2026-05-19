import { useEffect, useRef } from 'react';

type RoadObject = {
    x: number;
    y: number;
    emoji: string;
};

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const carImage = '/blue.png';

  const keys = useRef({
    left: false,
    right: false
  });

  const hornAudio = new Audio('/horn.wav');

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const car = new Image();
    car.src = carImage;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let carX = canvas.width / 2;
    let roadLineOffset = 0;

    const keyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') keys.current.left = true;
      if (e.key === 'ArrowRight') keys.current.right = true;
    };

    const keyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') keys.current.left = false;
      if (e.key === 'ArrowRight') keys.current.right = false;
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    const objects: RoadObject[] = [];
    const ROAD_SPEED = 1.5;
    const CAR_SPEED = 2.5;
    const OBJECT_SPEED = 1.5;

    function update() {
      if (keys.current.left) carX -= CAR_SPEED;

      if (keys.current.right) carX += CAR_SPEED;

      const minX = canvas.width / 2 - 120 + 20;
      const maxX = canvas.width / 2 + 120 - 20;

      if (carX < minX) {
        carX = minX;
      }

      if (carX > maxX) {
        carX = maxX;
      }

      roadLineOffset += ROAD_SPEED;

      if (roadLineOffset > 80) {
        roadLineOffset = 0;
      }

      const lastObject = objects[objects.length - 1];

      const canSpawn = !lastObject || lastObject.y > 180;

      if (canSpawn && objects.length < 6 && Math.random() < 0.003) {
        objects.push({
          x: canvas.width / 2 - 80 + Math.random() * 160,
          y: -50,
          emoji: ['⭐', '🦆', '🌳', '🎈'][Math.floor(Math.random() * 4)]
        });
      }
      objects.forEach((obj) => {
          obj.y += OBJECT_SPEED;
      });

      for (let i = objects.length - 1; i >= 0; i--) {
        if (objects[i].y > canvas.height + 50) {
          objects.splice(i, 1);
        }
      }
    }

    function draw() {
      // sky
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // grass
      ctx.fillStyle = '#5DBB63';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // road
      ctx.fillStyle = '#555';
      ctx.fillRect(
        canvas.width / 2 - 120,
        0,
        240,
        canvas.height
      );

      // road lines
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 5;

      for (let y = -80; y < canvas.height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, y + roadLineOffset);
        ctx.lineTo(canvas.width / 2, y + 40 + roadLineOffset);
        ctx.stroke();
      }

      // car
      ctx.drawImage(
        car,
        carX - 50,
        canvas.height - 250,
        100,
        140
      );

      ctx.font = '40px serif';

      objects.forEach((obj) => {
        ctx.fillText(obj.emoji, obj.x, obj.y);
      });
    }

    function gameLoop() {
      update();
      draw();
      requestAnimationFrame(gameLoop);
    }

    gameLoop();

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, []);

  return (
    <>
        <canvas
          ref={canvasRef}
          style={{
              padding: 0,
              margin: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
          touchAction: 'none'
          }}
        />

        <div
          style={{
          position: 'fixed',
          bottom: 20,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 260
          }}
        >
          <button
            onTouchStart={() => (keys.current.left = true)}
            onTouchEnd={() => (keys.current.left = false)}
            onMouseDown={() => (keys.current.left = true)}
            onMouseUp={() => (keys.current.left = false)}
            style={{
            fontSize: 40,
            padding: 10,
            borderRadius: 20
            }}
          >
            ⬅️
          </button>

          <button
            onTouchStart={() => (keys.current.right = true)}
            onTouchEnd={() => (keys.current.right = false)}
            onMouseDown={() => (keys.current.right = true)}
            onMouseUp={() => (keys.current.right = false)}
            style={{
            fontSize: 40,
            padding: 10,
            borderRadius: 20
            }}
          >
            ➡️
          </button>
        </div>
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: 320,
          right: 0,
          textAlign: 'center'
        }}>
          <button
              onClick={() => hornAudio.play()}
              style={{
                  fontSize: 40,
                  padding: 10,
                  borderRadius: 20
              }}
          >
              🔊
          </button>
        </div>
    </>
  );
}