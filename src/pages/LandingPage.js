import React from "react";
import styled from "styled-components";
import LandingPageNavigation from "../components/LandingPageNavigation";
import { Img } from "../components/Navigation";
import HeroBuilding from "../assets/HeroBuilding.svg";
import LandingBuildingIcon from "../assets/LandingBuildingIcon.svg";
import FindSolutionsIcon from "../assets/FindSolutionsIcon.svg";
import Rocket from "../assets/Rocket.svg";
import MoneyIcon from "../assets/MoneyIcon.svg";
import GoGreenIcon from "../assets/GoGreenIcon.svg";
import FinesIcon from "../assets/FinesIcon.svg";

const Container = styled.div`
  background: linear-gradient(180deg, #191970 0%, #3636d3 116.01%);

  height: 3307px;
  width: 100%;
`;

const Hero = styled.div`
  height: 325px;
  //   width: 100%;
  //   padding: 176px 212px 123px 212px;
  margin: 0 auto;
  padding: 176px 104px 100px 104px;
  display: flex;
  justify-content: space-between;
  max-width: 1030px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HeroPrimaryText = styled.div`
  font-size: 44px;
  font-weight: 600;
  color: white;
  width: 577px;
`;

const HeroSecondaryText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  width: 592px;
`;

const HeroCTA = styled.div`
  font-size: 22px;
  font-weight: 600;
  background-color: #913dd9;
  border-radius: 30px;
  padding: 12px 36px;
  color: white;
  width: max-content;
  cursor: pointer;
  :hover {
    background-color: #8028cc;
  }
`;

const SubHeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 90px;
  padding: 0px 104px 0px 104px;
  align-items: center;
  max-width: 990px;
  gap: 48px;
`;

const SubHeroText = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const ContentCard = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 0 111px;
  height: max-content;
  //   height: 2354px;
  padding: 102px 135px 60px 135px;
`;

const ContentCardTitle = styled.div`
  margin-bottom: 70px;
  font-size: 30px;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const ContentCardText = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: black;
  text-align: center;
`;

const ContentCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 900px;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 47px;
`;

const ContentCardCTA = styled.div`
  font-size: 22px;
  font-weight: 600;
  background-color: #913dd9;
  border-radius: 30px;
  padding: 12px 36px;
  color: white;
  width: max-content;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 80px;
  :hover {
    background-color: #8028cc;
  }
`;

const ContentCardDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 265px;
  height: 282.75px;
`;

const DetailCardsContainer = styled.div`
  display: flex;
  gap: 94px;
  margin: 0 auto;
  max-width: 965px;
  margin-bottom: 70px;
`;

const DetailCardPrimaryText = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const DetailCardSecondaryText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <Container>
      <LandingPageNavigation />
      <Hero>
        <HeroContent>
          <HeroPrimaryText>
            Building energy efficiency made easy.
          </HeroPrimaryText>
          <HeroSecondaryText>
            Upward helps building owners find the right energy efficiency
            measures fast to save money, comply with regulations, and go green.
            For free.
          </HeroSecondaryText>
          <HeroCTA>Get started for free</HeroCTA>
        </HeroContent>
        <Img src={HeroBuilding} />
      </Hero>
      <SubHeroTextContainer>
        <SubHeroText>
          50% of eligible NYC buildings will have to pay over $250,000 a year in
          fines after 2030 because of Local Law 97.
        </SubHeroText>
        <SubHeroText>Don’t be one of them.</SubHeroText>
      </SubHeroTextContainer>
      <ContentCard>
        <ContentCardTitle>About Upward</ContentCardTitle>
        <ContentCardTextContainer>
          <ContentCardText>
            Upward was founded to help building owners navigate energy
            efficiency.
          </ContentCardText>
          <ContentCardText>
            Information on energy efficiency is complex, siloed, and trapped
            behind expensive consultants and energy audits. We simplify
            everything to help you set goals, understand your buildings, find
            the right solutions, and deploy projects quickly.
          </ContentCardText>
          <ContentCardText>All for free.</ContentCardText>
        </ContentCardTextContainer>
        <ContentCardCTA>Get started now</ContentCardCTA>
        <ContentCardTitle>How it works</ContentCardTitle>
        <DetailCardsContainer>
          <ContentCardDetailCard>
            <Img src={LandingBuildingIcon} />
            <DetailCardPrimaryText>
              Understand your Buildings.
            </DetailCardPrimaryText>
            <DetailCardSecondaryText>
              Easily upload building energy data and understand your energy
              usage, LL97 fines, and efficiency opportunities.
            </DetailCardSecondaryText>
          </ContentCardDetailCard>
          <ContentCardDetailCard>
            <Img src={FindSolutionsIcon} />
            <DetailCardPrimaryText>Find Solutions.</DetailCardPrimaryText>
            <DetailCardSecondaryText>
              Upward recommends solutions based on your buildings and goals.
              Browse technologies and providers all in one place.
            </DetailCardSecondaryText>
          </ContentCardDetailCard>
          <ContentCardDetailCard>
            <Img src={Rocket} />
            <DetailCardPrimaryText>
              Deploy projects faster.
            </DetailCardPrimaryText>
            <DetailCardSecondaryText>
              See how different efficiency measures will perform in your
              buildings. Estimate energy and cost savings to move forward with
              the right solutions faster.
            </DetailCardSecondaryText>
          </ContentCardDetailCard>
        </DetailCardsContainer>
        <ContentCardCTA>Get started now</ContentCardCTA>
        <ContentCardTitle>Why Energy Efficiency?</ContentCardTitle>
        <DetailCardsContainer>
          <ContentCardDetailCard>
            <Img src={MoneyIcon} />
            <DetailCardPrimaryText>Save Money.</DetailCardPrimaryText>
            <DetailCardSecondaryText>
              Energy efficiency can mean a substantial reduction in operating
              costs. Many products are even financed, and can be installed for
              no money down.
            </DetailCardSecondaryText>
          </ContentCardDetailCard>
          <ContentCardDetailCard>
            <Img src={GoGreenIcon} />
            <DetailCardPrimaryText>Go Green.</DetailCardPrimaryText>
            <DetailCardSecondaryText>
              Tenants, investors, and buisinesses all want to live, own, and
              work in green buildings. Increase the value of your asset and go
              green.
            </DetailCardSecondaryText>
          </ContentCardDetailCard>
          <ContentCardDetailCard>
            <Img src={FinesIcon} />
            <DetailCardPrimaryText>Avoid Fines.</DetailCardPrimaryText>
            <DetailCardSecondaryText>
              Local Law 97 and other regulation can mean massive fines for
              inefficienct buildings. Learn about your LL97 liability and find
              solutions to comply.
            </DetailCardSecondaryText>
          </ContentCardDetailCard>
        </DetailCardsContainer>
        <ContentCardCTA>Get started now</ContentCardCTA>
        <ContentCardTitle>Contact Us</ContentCardTitle>
        <ContentCardTextContainer>
          <ContentCardText>
            Need help navigating the site? Have an idea for functionality you
            would love to see? Want to sell your energy efficiency product
            through our platform?
          </ContentCardText>
          <ContentCardText>We want to hear it.</ContentCardText>
        </ContentCardTextContainer>
        <ContentCardCTA>contact@buildupward.com</ContentCardCTA>
      </ContentCard>
    </Container>
  );
};

export default LandingPage;
