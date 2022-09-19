import styled from "styled-components";

export const Container_Styles = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;

  > p {
    font-weight: 400;
    font-size: clamp(1rem, 3.5vw, 1.5rem);
    line-height: 20px;
    color: #FFFFFF;
  }

  > div {
    height: 65px;
    width: 65px;
  }

  @media (min-width: 550px) {
   > div {
      height: 95px;
      width: 95px; 
    }
  }

  @media (min-width: 1000px) {
    > p {
      font-size: clamp(.900rem, 1.9vw, 1.4rem);
    }
  }
`;