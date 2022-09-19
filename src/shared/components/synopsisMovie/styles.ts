import styled from "styled-components";

export const Container_Styles = styled.div`
  width: 90%;
  padding-top: 20px;

  h3 {
    color: #FFFFFF;
    font-weight: 700;
    font-size: clamp(1.5rem, 5vw, 2rem);
    line-height: 24px;
  }
  
  p {
    color: #FFFFFF;
    font-weight: 400;
    font-size: clamp(1rem, 3.5vw, 1.5rem);
    line-height: 24px;
    letter-spacing: -0.005em;
    padding-top: 15px;
  }

  @media (min-width: 550px) {
      p {
        line-height: 30px;
      }
    }

    @media (min-width: 1000px) {
      p {
        font-size: clamp(.900rem, 1.5vw, 1.2rem);
      }
    }
`;