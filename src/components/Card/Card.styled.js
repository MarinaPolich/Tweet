import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const CardBox = styled.li`
  position: relative;
  justify-self: center;
  width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;
  background: var(--card-bg);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
`;

export const Logo = styled(ReactSVG)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ThumbImage = styled.div`
  width: 100%;
  height: 168px;
  aspect-ratio: 308 / 168;
  margin-bottom: 18px;
  background-color: transparent;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const Border = styled.div`
  width: calc(100% + 72px);
  height: 8px;
  margin-left: -36px;
  background: var(--success-color);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const PhotoBox = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: -44px;
  margin-bottom: 26px;
  padding: 9px;
  overflow: hidden;

  border-radius: 50%;
  background: var(--success-color);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  &::after {
    content: "";
    position: absolute;
    top: 9px;
    left: 9px;
    display: block;
    width: 62px;
    height: 62px;
    background-color: var(--primary);
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
  }
`;

export const TextCard = styled.p`
  margin-bottom: 16px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--success-color);
`;

export const Button = styled.button`
  border: none;
  margin-top: 10px;
  padding: 14px 28px;
  text-align: center;
  border-radius: 10px;
  color: var(--text-color);
  background-color: var(--success-color);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--transition);

  &.active {
    background-color: var(--acsent-color);
  }
`;
