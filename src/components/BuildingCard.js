import React from "react";
import styled from "styled-components";
import Edit from "../assets/Edit.svg";
import Info from "../assets/Info.svg";
import { Img } from "../components/Navigation";
import PieColorful from "./PieChart";
import ThresholdChart from "./ThresholdChart";
import ThresholdBar from "./ThresholdBar";
import Tooltip from "@mui/material/Tooltip";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Container = styled.div`
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 35px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Address = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const EditButton = styled.div`
  display: flex;
  gap: 8px;
  background-color: #3958ff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const EditButtonText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px 0;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const DataHeader = styled.div`
  font-size: 20px;
  font-weoght: 400;
  color: rgba(0, 0, 0, 0.5);
`;

const DataValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: black;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Charts = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const RowHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const RecommendButton = styled.div`
  padding: 18px 20px;
  background-color: #3958ff;
  border-radius: 5px;
  max-width: max-content;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
`;

const EmissionsCapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
`;

const EmissionsCapYears = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const EmissionsDataContainer = styled.div`
  display: flex;
  height: 170px;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const EmissionsValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96%;
`;

const EmissionsDatumContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const EmissionsDatumHeader = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

const EmissionsDatumValue = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

const SmallText = styled.div`
  font-size: 10px;
  font-weight: 600;
  top: 2px;
  position: relative;
`;

const StyledTooltip = styled(Tooltip)`
  cursor: pointer;
`;

const BuildingCard = ({ building, buildingEdit, index }) => {
  const { openModal, closeModal } = buildingEdit;

  const onEdit = () => {
    openModal();
  };

  return (
    <Container>
      <Header>
        <Address>{building.address}</Address>
        <EditButton onClick={onEdit}>
          <Img src={Edit} />
          <EditButtonText>Edit</EditButtonText>
        </EditButton>
      </Header>
      <DataRow>
        <Data>
          <DataHeader>Annual Energy Cost</DataHeader>
          <DataValue>
            ${Number(building.annualEnergyCost).toLocaleString()}{" "}
            <SmallText>/yr</SmallText>
          </DataValue>
        </Data>
        <Data>
          <DataHeader>Total Carbon Emissions</DataHeader>
          <DataValue>
            {Number(building.totalCarbonEmissions).toLocaleString()} tCO2{" "}
            <SmallText>/yr</SmallText>
          </DataValue>
        </Data>
        <Data>
          <DataHeader>Energy Use Intensity</DataHeader>
          <DataValue>
            0.01234 <SmallText>energy/sqft</SmallText>
          </DataValue>
        </Data>
      </DataRow>
      <Charts>
        <PieColorful data={building.energyTypes} />
        <PieColorful data={building.energyUseBreakdown} />
      </Charts>
      <RowHeader>
        Local Law 97 Fines{" "}
        <StyledTooltip title="Hello" placement="right">
          <Img src={Info} />
        </StyledTooltip>
      </RowHeader>
      <Flex>
        <EmissionsCapContainer>
          <EmissionsCapYears>2024 - 2030</EmissionsCapYears>
          <EmissionsDataContainer>
            <ThresholdBar
              bar1={building.LL97Fines.barCharts["2024bar1"]}
              bar2={building.LL97Fines.barCharts["2024bar2"]}
              bar3={building.LL97Fines.barCharts["2024bar3"]}
            />
            <EmissionsValuesContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Emissions Cap</EmissionsDatumHeader>
                <EmissionsDatumValue>
                  {building.LL97Fines.emissionsCap24.toLocaleString("en-us")}{" "}
                  tCO2/yr
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Excess Emissions</EmissionsDatumHeader>
                <EmissionsDatumValue>
                  {building.LL97Fines.excessEmissions24.toLocaleString("en-us")}{" "}
                  tCO2/yr
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Annual Fines</EmissionsDatumHeader>
                <EmissionsDatumValue
                  color={building.LL97Fines.fines24 > 0 ? "#FB2828" : "#30B900"}
                >
                  {building.LL97Fines.fines24.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
            </EmissionsValuesContainer>
          </EmissionsDataContainer>
        </EmissionsCapContainer>

        <EmissionsCapContainer>
          <EmissionsCapYears>2030 - 2035</EmissionsCapYears>
          <EmissionsDataContainer>
            <ThresholdBar
              bar1={building.LL97Fines.barCharts["2030bar1"]}
              bar2={building.LL97Fines.barCharts["2030bar2"]}
              bar3={building.LL97Fines.barCharts["2030bar3"]}
            />
            <EmissionsValuesContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Emissions Cap</EmissionsDatumHeader>
                <EmissionsDatumValue>
                  {building.LL97Fines.emissionsCap30.toLocaleString("en-us")}{" "}
                  tCO2/yr
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Excess Emissions</EmissionsDatumHeader>
                <EmissionsDatumValue>
                  {building.LL97Fines.excessEmissions30.toLocaleString("en-us")}{" "}
                  tCO2/yr
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Annual Fines</EmissionsDatumHeader>
                <EmissionsDatumValue
                  color={building.LL97Fines.fines30 > 0 ? "#FB2828" : "#30B900"}
                >
                  {building.LL97Fines.fines30.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
            </EmissionsValuesContainer>
          </EmissionsDataContainer>
        </EmissionsCapContainer>

        <EmissionsCapContainer>
          <EmissionsCapYears>2035 +</EmissionsCapYears>
          <EmissionsDataContainer>
            <ThresholdBar
              bar1={building.LL97Fines.barCharts["2035bar1"]}
              bar2={building.LL97Fines.barCharts["2035bar2"]}
              bar3={building.LL97Fines.barCharts["2035bar3"]}
            />
            <EmissionsValuesContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Emissions Cap</EmissionsDatumHeader>
                <EmissionsDatumValue>
                  {building.LL97Fines.emissionsCap35.toLocaleString("en-us")}{" "}
                  tCO2/yr
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Excess Emissions</EmissionsDatumHeader>
                <EmissionsDatumValue>
                  {building.LL97Fines.excessEmissions35.toLocaleString("en-us")}{" "}
                  tCO2/yr
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
              <EmissionsDatumContainer>
                <EmissionsDatumHeader>Annual Fines</EmissionsDatumHeader>
                <EmissionsDatumValue
                  color={building.LL97Fines.fines35 > 0 ? "#FB2828" : "#30B900"}
                >
                  {building.LL97Fines.fines35.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </EmissionsDatumValue>
              </EmissionsDatumContainer>
            </EmissionsValuesContainer>
          </EmissionsDataContainer>
        </EmissionsCapContainer>
      </Flex>

      {/* <ThresholdBar
        bar1={building.LL97Fines.barCharts["2030bar1"]}
        bar2={building.LL97Fines.barCharts["2030bar2"]}
        bar3={building.LL97Fines.barCharts["2030bar3"]}
      />
      <ThresholdBar
        bar1={building.LL97Fines.barCharts["2035bar1"]}
        bar2={building.LL97Fines.barCharts["2035bar2"]}
        bar3={building.LL97Fines.barCharts["2035bar3"]}
      /> */}
      <RecommendButton>Recommend Solutions</RecommendButton>
    </Container>
  );
};

export default BuildingCard;
