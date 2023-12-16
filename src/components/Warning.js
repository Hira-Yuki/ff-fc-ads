import React from "react";
import styled from "styled-components";
const Warning = () => {
  return (
    <StMainBox>
      <h3 style={{ fontSize: "2em", margin: "25px", fontWeight:"bold"}}>WARNING!</h3>
      <p>남들과 다른 독특한 사상을 가지신 분이나</p>
      <p>사사게 유명인은 받지 않습니다.</p>
    </StMainBox>
  );
};

export default Warning;

const StMainBox = styled.div`
  margin: 30px auto;
  padding: 20px;
  border: 3px solid white;
  border-radius: 20px;
  color: white;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2em;
`;
