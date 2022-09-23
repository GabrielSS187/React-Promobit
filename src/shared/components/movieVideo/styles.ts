import styled from "styled-components";

export const Container_Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;

  > h1 {
    font-size: 35px;
  }

  > div {
    height: min(95vw, 450px);
    width: min(95vw, 700px);
  }
`;