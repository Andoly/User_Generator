import styled from "styled-components";

export const Card = styled.div`
  width: auto;
  height: auto;
  border-radius: 5px;
  border: 1px solid #141526;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardColumnFront = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: initial;
  align-items: center;
  backface-visibility: hidden;
  background-color: #25282c;
`;

export const CardColumnBack = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  backface-visibility: visible;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  border: 2px solid #141526;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  color: #fff;
`