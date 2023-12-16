import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Warning from "./components/Warning";
import Join from "./components/Join";

function App() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // 눈송이를 생성하는 함수
    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(snowflake);

      // 눈송이를 상태에 추가
      setSnowflakes((prevSnowflakes) => [...prevSnowflakes, snowflake]);

      // 눈송이가 뷰포트를 벗어나면 제거
      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
        // 눈송이를 상태에서 제거
        setSnowflakes((prevSnowflakes) =>
          prevSnowflakes.filter((fl) => fl !== snowflake)
        );
      });
    };

    // 일정 간격으로 눈송이 생성
    const snowfallInterval = setInterval(createSnowflake, 500);

    // 일정 시간이 지난 눈송이 제거
    const cleanupInterval = setInterval(() => {
      setSnowflakes((prevSnowflakes) => {
        const currentTime = new Date().getTime();
        return prevSnowflakes.filter(
          (fl) =>
            currentTime - fl.creationTime < 10000 // 10초 이상 경과한 눈송이 제거
        );
      });
    }, 1000);

    // 컴포넌트가 언마운트되면 간격 제거
    return () => {
      clearInterval(snowfallInterval);
      clearInterval(cleanupInterval);
    };
  }, []); // 빈 의존성 배열로 효과를 한 번만 실행

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
