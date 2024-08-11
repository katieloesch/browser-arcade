import React, { useRef, useEffect } from 'react';
import './MatrixEffectCanvas.scss';

const MatrixEffectCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    const fontSize = 16;
    const columns = Math.floor(windowWidth / fontSize);
    const drops = new Array(columns).fill(0);

    const latin =
      'This is your last chance After this there is no turning back You take the blue pill the story ends you wake up in your bed and believe whatever you want to believe You take the red pill you stay in Wonderland and I show you how deep the rabbit hole goes';
    const chinese =
      '你服下蓝色药丸故事就结束了你在床上醒来相信你想相信的切服下红色药丸你留在仙境我告诉你兔子洞有多深 あなたは赤い薬を飲';
    const japanese =
      'むとワンダランドに留まるそして私はウサギの穴がどれほど深いかを教えてあげる';
    const nums = '01234567890123456789';

    const str = latin + chinese + japanese + nums;

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, windowWidth, windowHeight);
      context.font = '700 ' + fontSize + 'px sans-serif';
      context.fillStyle = '#02ab48';

      for (let i = 0; i < columns; i++) {
        let index = Math.floor(Math.random() * str.length);
        let x = i * fontSize;
        let y = drops[i] * fontSize;

        context.fillText(str[index], x, y);

        if (y >= canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    draw();
    const intervalId = setInterval(draw, 20);

    return () => clearInterval(intervalId);
  }, []);

  return <canvas ref={canvasRef} id='canvas' />;
};

export default MatrixEffectCanvas;
