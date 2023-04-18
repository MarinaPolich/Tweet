import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  min-height: 100vh;
  padding-block: 40px;
  margin: 0 auto;
`;

export const Button = styled(NavLink)`
  display: inline-block;
  margin-bottom: 106px;
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
  margin-bottom: 30px;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  & .select__control {
    width: 250px;
    height: 52px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: var(--title-color);
    background-color: transparent;
    color: var(--success-color);
    border-radius: 0;
    transition: color var(--transition), background-color var(--transition);
    cursor: pointer;

    &:active,
    &:hover,
    &:focus {
      background-color: var(--text-color);
      color: var(--success-color);
    }
    & .select__single-value,
    & .select__placeholder {
      color: inherit;
      &:active,
      &:hover,
      &:focus {
        color: inherit;
      }
    }
  }
  & .select__option {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    background-color: #fff;
    color: var(--text-color);
    transition: color var(--transition), background-color var(--transition);
    &:active,
    &:hover,
    &:focus {
      background-color: var(--text-color);
      color: var(--success-color);
    }
  }
`;

export const LoadMore = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  background: var(--title-color);
  color: var(--text-color);
  font-weight: 600;
  font-size: 20px;
`;
