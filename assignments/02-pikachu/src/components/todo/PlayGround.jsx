import { useEffect, useState } from "react";
const MAX_SIZE = { x: 9, y: 9 }; //최대 위치 값
const PikachuPlayground = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("right");
  const handleKeyDown = (event) => {
    let location = { x: 0, y: 0 };
    switch (event.key) {
      case " ": // 피카츄 점프 구현
        location.y -= 1;
        setTimeout(() => {
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + 1,
          }));
        }, 300);
        break;
      case "ArrowUp": // 피카츄 아래로 이동 구현
        location.y -= 1;
        break;
      case "ArrowDown": // 피카츄 아래로 이동 구현
        location.y += 1;
        break;
      case "ArrowLeft": // 피카츄 왼쪽으로 이동 구현
        location.x -= 1;
        setDirection("left");
        break;
      case "ArrowRight": // 피카츄 오른쪽으로 이동 구현
        location.x += 1;
        setDirection("right");
        break;
    }
    setPosition((prev) => ({
      ...prev,
      x:
        MAX_SIZE.x >= prev.x + location.x
          ? Math.max(prev.x + location.x, 0)
          : prev.x,
      y:
        MAX_SIZE.y >= prev.y + location.y
          ? Math.max(prev.y + location.y, 0)
          : prev.y,
    }));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="pikachu-playground">
      <div
        className={`pikachu ${direction}`}
        style={{
          left: `${position.x * 100}px`,
          top: `${position.y * 100}px`,
        }}
      ></div>
    </div>
  );
};

export default PikachuPlayground;
