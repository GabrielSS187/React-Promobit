import styled from "styled-components";


export const ContainerListMovies_Styles = styled.div`
  height: auto;
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content:  space-around;
  align-items: center;
  flex-wrap: wrap;
`;


export const Ul_Styles = styled.ul`  
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  list-style: none;
  padding: 10px;
  
  > li {
    cursor: pointer;
  }
`;