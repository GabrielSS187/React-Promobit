import styled from "styled-components";

interface IProps {
  numberProducers: number;
};

export const Container_Styles = styled.div`
    width: 90%;
    color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 20px;

    @media (min-width: 1000px) {
      width: 100%;
    }
`;

export const Card_Styles = styled.div<IProps>`
  width:  
  ${({numberProducers}: IProps) => numberProducers > 3 ? "150px" : "90px" };
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${({numberProducers}: IProps) => numberProducers > 3 ? "center" : "start" };
  padding-bottom: 10px;
  
  img {
    width: ${({numberProducers}: IProps) => numberProducers > 3 ? "100%" : "80%" };
  }

  h4 {
    font-weight: 700;
    font-size: clamp(1rem, 3.5vw, 1.5rem);
    padding-top: 8px;
  }

  h5 {
    font-weight: 400;
    font-size: clamp(.8rem, 3.2vw, 1.2rem);
    line-height: 20px;
  }

  @media (min-width: 1000px) {
    width: ${({numberProducers}: IProps) => numberProducers > 3 ? "35%" : "15%" };
    align-items: ${({numberProducers}: IProps) => numberProducers > 3 ? "center" : "flex-start" };

    img {
      width: ${({numberProducers}: IProps) => numberProducers > 3 ? "100%" : "65%" };
    }

      h4 {
        font-size: clamp(.900rem, 1.5vw, 1.2rem);
      }

      h5 {
        font-size: clamp(.500rem, 1.5vw, .700rem);
      }
  }
`;