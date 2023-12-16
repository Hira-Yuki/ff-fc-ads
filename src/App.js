import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Warning from "./components/Warning";
import Join from "./components/Join";

function App() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const maxSnowflakes = 50; // 최대 눈송이 개수 제한

    const createSnowflake = () => {
      if (snowflakes.length >= maxSnowflakes) {
        return; // 눈송이 개수 제한 초과 시 종료
      }

      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      // container의 영역 내에서 랜덤한 위치 지정
      snowflake.style.left = `${Math.random() * 100}%`;

      // 추가: 생성 시간을 기록
      snowflake.creationTime = new Date().getTime();

      document.body.appendChild(snowflake);

      // 이벤트 리스너를 외부 함수로 따로 빼기
      const handleAnimationEnd = () => {
        snowflake.remove();
        snowflake.removeEventListener("animationend", handleAnimationEnd);

        // 상태 업데이트 수정
        setSnowflakes((prevSnowflakes) =>
          prevSnowflakes.filter((fl) => fl !== snowflake)
        );
      };

      snowflake.addEventListener("animationend", handleAnimationEnd);
      // 상태 업데이트 수정: 눈송이 추가
      setSnowflakes((prevSnowflakes) => [...prevSnowflakes, snowflake]);
    };

    const snowfallInterval = setInterval(createSnowflake, 500);
    const cleanupInterval = setInterval(() => {
      setSnowflakes((prevSnowflakes) => {
        const currentTime = new Date().getTime();
        return prevSnowflakes.filter(
          (fl) => currentTime - fl.creationTime < 10000
        );
      });
    }, 1000);

    return () => {
      clearInterval(snowfallInterval);
      clearInterval(cleanupInterval);
    };
  }, [snowflakes]);

  return (
    <div className="container">
      <Hero />
      <Introduce />
      <Warning />
      <Join />
    </div>
  );
}

export default App;
