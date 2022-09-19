import styled from "styled-components";

export const Container_Styles = styled.div`
 @media (min-width: 850px) {}

  @media (min-width: 1000px) {
    width: 550px;
  }
`;

export const Img_Styles = styled.img`
  width: 50vw;
  padding-top: 86px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;

  @media (min-width: 850px) {}

  @media (min-width: 1000px) {
    width: 500px;
    height: min(100%, 900px);
    padding: 0;
    padding-bottom: 65px;
    margin-left: 20px;
  }
`;