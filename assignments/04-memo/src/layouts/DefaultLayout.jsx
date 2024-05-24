import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import "../styles/color.css";
const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: var(--color-white);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--color-lightgrey);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
function DefaultLayout() {
  useEffect(() => {
    console.log("마운트됨");
    return () => {
      console.log("언마운트됨");
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
export default DefaultLayout;
