import styled from "styled-components";

export const Container_Styles = styled.div`
  margin-top: 50px;
  padding: 20px;
  text-align: center;

  > h1 {
    font-size: 35px;
    padding-bottom: 10px;
  }
`;

export const Card_Styles = styled.div`
  overflow: hidden;
  width: min(100vw, 200px);
  cursor: grab;

  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 5px;

  text-overflow: ellipsis;

  background: #FFFFFF;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 4px;

  > img {
    width: 100%;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
    flex-shrink: 1;
  }

  > h4, h5 {
    text-align: center;
  }

  > h4 {
    font-weight: 700;
    font-size: clamp(.600rem, 4vw, .950rem);
  }

  > h5 {
    font-weight: 400;
    font-size: clamp(.500rem, 3.5vw, .900rem);
  }
`;