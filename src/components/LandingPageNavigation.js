import React from "react";
import styled from "styled-components";
import { Img } from "../components/Navigation";
import Logo from "../assets/Logo.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 82px 104px 0px 104px;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const ButtonText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`;

const ButtonPrimary = styled.div`
  background-color: #913dd9;
  padding: 9px 22px;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    background-color: #8028cc;
  }
`;

const LandingPageNavigation = () => {
  return (
    <Container>
      <Img src={Logo} />
      <ButtonsContainer>
        <ButtonPrimary>
          <ButtonText>Sign Up</ButtonText>
        </ButtonPrimary>
        <ButtonText>Log In</ButtonText>
      </ButtonsContainer>
    </Container>
  );
};

export default LandingPageNavigation;
