import React, { useContext } from "react";
import styled from "styled-components";
import { Bar } from "recharts";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  align-items: center;
  height: 150px;
`;

const Line = styled.div`
  height: 2px;
  width: 28px;
  background-color: black;
`;

const Bar1 = styled.div`
  height: ${(props) => props.bar1}%;
  width: 16px;
  background-color: ${(props) => (props.bar3 === 0 ? "#30B900" : "#CBCBCB")};
`;
const Bar2 = styled.div`
  height: ${(props) => props.bar2}%;
  background-color: transparent;
  width: 16px;
`;

const Bar3 = styled.div`
  height: ${(props) => props.bar3}%;
  background-color: #fb2828;
  width: 16px;
`;

const ThresholdBar = ({ bar1, bar2, bar3 }) => {
  return (
    <Container>
      <Bar1 bar1={bar1} bar3={bar3} />
      <Bar2 bar2={bar2} />
      <Line />
      <Bar3 bar3={bar3} />
    </Container>
  );
};

export default ThresholdBar;
