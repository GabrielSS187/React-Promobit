import styled from "styled-components";

interface IProps {
  pathDetailsIsValid: boolean;
};

export const Header_Styles = styled.header<IProps>`
  width: 100%;
  height: 56px;
  position: fixed;
  top: 8;
  left: 8;
  background-color: #5C16C5;
  z-index: 2;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  > button {
    border: none;
    background: none;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    justify-content: 
    ${({  pathDetailsIsValid }: IProps) => pathDetailsIsValid ? "space-between" : "center"};
  }
`;

export const Img_Styles = styled.img`
  height: 24.03px;
  width: 184.74px;
  padding-left: 10px;
`;