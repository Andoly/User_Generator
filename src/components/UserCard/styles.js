import styled from "styled-components";
import { shade } from "polished";

export const Card = styled.div`
  width: auto;
  height: auto;
  min-height: 220px;
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
  padding: 15px 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const CardColumnBack = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  padding: 15px 0 15px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  backface-visibility: visible;
  width: 100%;
  height: 100%;
  background-color: ${shade(-1, "#25282c")};
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  margin-bottom: 10px;
  border: 3px solid #060c73;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: #fff;
`;
export const CardSubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 1px;
  color: #f5f0f0;

  .span {
    color: #060c73;
    font-size: 14px;
    font-weight: 600;
  }
`;
