import styled from "styled-components";

export const Container_Styles = styled.div`
overflow: hidden;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;

  > .info-1 {
    > h1 {
      text-align: center;
      color: #FFFFFF;
      font-weight: 700;
      font-size: clamp(1.5rem, 5vw, 2rem);
      line-height: 38px;
      letter-spacing: -0.005em;
    }
  }
  
  > .info-1 .info-i {
    padding-top: 20px;
  }

  > .info-1 .info-i div {
    display: flex;
    flex-wrap: wrap;
    text-transform: capitalize;
  }

  > .info-1 .info-i p, time {
    font-weight: 400;
    font-size: clamp(1rem, 3.5vw, 1.5rem);
    line-height: 24px;
    color: #FFFFFF;
    padding-top: 15px;
  }

  @media (min-width: 550px) {
        p {
        padding-top: 10px;
      }
  }

  @media (min-width: 850px) {
    > .info-1 h1 {
      font-size: 40px;
    }
  }

  @media (min-width: 1000px) {
    height: 100%;
    width: 55%;
    margin-left: 15px;

    > .info-1 .info-i {
      display: flex;
      flex-wrap: wrap;
      p {
        padding-left: 10px;
      }
    }

    > .info-1 h1 {
      text-align: start;
      padding-top: 7px;
    }

    > .info-1 .info-i p, time {
      font-size: clamp(.900rem, 1.5vw, 1.2rem);
    }
  }
`;