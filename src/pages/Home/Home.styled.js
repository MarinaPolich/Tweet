import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const WraperLeft = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  padding: 176px 0 41px 123px;
  text-align: start;
`;

export const WraperRight = styled.div`
  width: 60%;
  height: 100%;
  padding: 15px 39px 15px 0;
  overflow-y: scroll;
`;

export const StarOne = styled(ReactSVG)`
  position: absolute;
  top: 75px;
  left: 33px;
  width: 108px;
  height: 108px;
`;

export const StarTwo = styled(ReactSVG)`
  position: absolute;
  top: 99px;
  left: 181px;
  width: 58px;
  height: 58px;
`;

export const StarThree = styled(ReactSVG)`
  position: absolute;
  top: 38px;
  left: 140px;
  width: 68px;
  height: 68px;
`;

export const StarFour = styled(ReactSVG)`
  position: absolute;
  top: 46px;
  left: 257px;
  width: 50px;
  height: 50px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 106px;
`;

export const Title = styled.h1`
  background: var(--title-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 68px;
  line-height: 1.2;
  text-align: center;
`;

export const BoxIcon = styled.div`
  position: relative;
  text-align: start;
  margin-bottom: 106px;
`;

export const TwitterIcon = styled(ReactSVG)`
  position: absolute;
  top: 62px;
  left: 85px;
`;

export const Button = styled(NavLink)`
  padding: 14px 28px;
  border-radius: 10px;
  background: var(--title-color);
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
`;

export const WraperCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-content: start;
  align-items: start;
  grid-gap: 20px;
  width: 100%;
`;
