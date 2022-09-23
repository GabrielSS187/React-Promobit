import styled from "styled-components";

interface IProps {
  numberProducers: number;
};

export const Container_Styles_Responsive = styled.div<IProps>`
 margin-top: 25px;

 > ul div {
  display: flex;
  justify-content: ${({numberProducers}: IProps) => numberProducers < 3 ? "flex-start" : "none"};
 }
`;

export const Card_Styles_Responsive = styled.li<IProps>`
  width: 100px;
  height: 175px;
  background: #FFFFFF;
  border-radius: 5px;
  margin-top: 20px;
  padding-bottom: 20px;
  cursor: 
  ${({numberProducers}: IProps) => numberProducers > 3 ? "grab" : "auto"};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  text-align: center;

  > img {
    width: 100%;
    height: 120px;
    flex-shrink: 1;
  }

  > h4 {
    font-size: clamp(.800rem, 2vw, .850rem);
    font-weight: 700;
    padding: 2px 1px 0 1px;
  }

  > h5 {
    font-size: clamp(.650rem, 1vw, .750rem);
    font-weight: 400;
  }

  border: 2px solid;
`;

export const Container_Styles_Fixe = styled.div`
  margin-top: 5px;

  > ul div {
    display: flex;
    justify-content: flex-start;
    padding-top: 6px;
  }
`;

export const Card_Styles_Fixe = styled.li<IProps>`
  height: 175px;
  width: 90px;
  background-color: #FFFF;
  border-radius: 5px;
  padding-bottom: 4px;
  cursor: 
  ${({numberProducers}: IProps) => numberProducers > 3 ? "grab" : "auto"};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 4px; */
  text-align: center;

  > img {
    height: 110px;
    width: 100%;
    flex-shrink: 1;
  }

  > h4 {
    font-size: clamp(.800rem, 2vw, .850rem);
    font-weight: 700;
    padding: 3px 1px 0 1px;
  }

  > h5 {
    font-size: clamp(.650rem, 1vw, .750rem);
    font-weight: 400;
  }
`;