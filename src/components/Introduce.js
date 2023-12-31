import React from "react";
import styled from "styled-components";

const Introduce = () => {
  return (
    <>
      <StBenefitBox>
        <StBenefit>새싹 복귀자 라이트 성인 유저 환영</StBenefit>
        <StBenefit>지금 가입하면 부대 최고참</StBenefit>
        <StBenefit>무한으로 즐기는 부대 혜택</StBenefit>
      </StBenefitBox>
    </>
  );
};

export default Introduce;

const StBenefitBox = styled.div`
  margin-top: 10px;

  padding: 40px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  font-size: 1.8em;

  position: relative;
`;

const StBenefit = styled.div`
  margin-top: 10px;
  font-size: 1.1em;
  text-align: center;
  height: 200px;
  flex-basis: 22.332%;
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 4px 2px whitesmoke;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 3px black;
`;
