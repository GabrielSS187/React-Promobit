import styled from "styled-components";

export const Container_Styles = styled.div`
  overflow: hidden;
  margin-top: 90px;
  padding-bottom: 50px;
  text-align: center;
  list-style: none;


  > .ul-fixa, .ul-responsive {
    margin-top: 30px;
  }

  > .ul-responsive {
    padding: 10px;
    > div {
      width: 100%;
      height: 350px;
    }
    
    > ul li {
      height: 100%;
    }
  }

  > .ul-fixe {
    display: none;
  }

  @media (min-width: 1000px) {
    > .ul-responsive {
      display: none;
    }

    > .ul-fixe {
      display: block;
    }
  }
`;

export const Li_Styles = styled.li`
  padding-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  height: 100%;
  cursor: grab;

  > img {
    width: 100%;
    flex-shrink: 1;
  }

  > h4 {
    font-size: clamp(.900rem, 2.5vw, 1rem);
    padding: 10px 10px 0 10px;
  }

  > time {
    font-size: clamp(.900rem, 2.5vw, 1rem);
    padding: 10px 10px 0 10px;
  }

  @media (max-width: 1000px) {
    > img {
      height: 200px;
      flex-shrink: 1;
    }
  }
`;