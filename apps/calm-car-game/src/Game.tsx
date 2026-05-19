import { useEffect, useRef } from 'react';

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

    function update() {
      if (keys.current.left) carX -= 5;
      if (keys.current.right) carX += 5;

      roadLineOffset += 5;

      if (roadLineOffset > 80) {
        roadLineOffset = 0;
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
            gap: 20
            }}
        >
            <div
                style={{
                    position: 'fixed',
                    bottom: 20,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 20
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

            
        </div>
    </>
  );
}