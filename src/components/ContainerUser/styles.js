import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
  margin: 0 20px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`;
