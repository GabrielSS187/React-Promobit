import styled from "styled-components";

export const Container_Styles = styled.main`
  height: auto;
  width: 100%;
  background-color: #2D0C5E;
  padding-top: 56px;
  padding-bottom: 40px;
`;

export const Ul_Styles = styled.ul`
  padding: 15px;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  .isActive {
    background-color: #D18000;
    color: #FFFFFF;
    border: none;
    outline: none;

    > a {
      color: #FFFFFF;
    }
 }
`;

export const Button_Styles = styled.button`
  padding: 15px;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const Header_Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  color: #FFFFFF;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.5rem);
  padding-top: 20px; 
  text-align: center;

  > h1 {
    padding: 20px;
    letter-spacing: -0.5%;
  }
`;