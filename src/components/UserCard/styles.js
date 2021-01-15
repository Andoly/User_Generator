import styled from "styled-components";

export const Card = styled.div`
  width: auto;
  height: auto;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #141526;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 1px solid #141526;
`;
