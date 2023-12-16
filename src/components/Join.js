import React from "react";
import styled from "styled-components";

const Join = () => {
  const onClickHandler = () => {
    window.open("https://open.kakao.com/o/sbJmXtXf", "_newtab");
  };
  return (
    <StContainer>
      <StBtn onClick={onClickHandler}>지금 당장 가입 신청하러 가기</StBtn>
    </StContainer>
  );
};

export default Join;

const StContainer = styled.div`
  width: 100%;
  margin: 100px auto;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const StBtn = styled.button`
  width: 300px;
  height: 75px;
  border-radius: 25px;
  cursor: pointer;
  background-color: beige;
  border: 0;

  font-size: 1.5em;
  box-shadow: 2px 2px 2px 3px whitesmoke;
`;
