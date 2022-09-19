import styled from "styled-components";

export const Header_Styles = styled.header`
  width: 100%;
  height: 56px;
  position: absolute;
  top: 8;
  left: 8;
  background-color: #5C16C5;

  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

export const Img_Styles = styled.img`
  height: 24.03px;
  width: 184.74px;
  padding-left: 10px;
`;