import styled from "styled-components";
import { shade } from 'polished'

export const Wrapper = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  bottom: -120px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #00308f;
  font-weight: 600;
`;
export const Wave = styled.div`
  width: 1000px;
  height: 1025px;
  position: absolute;
  top: -30%;
  left: 50%;
  margin-left: -500px;
  margin-top: -800px;
  border-radius: 40%;
  background: rgba(255, 255, 255, 0.75);
  animation: wave 15s infinite linear;

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
export const WaveTwo = styled.div`
  width: 1000px;
  height: 1025px;
  position: absolute;
  top: -30%;
  left: 50%;
  margin-left: -500px;
  margin-top: -800px;
  border-radius: 40%;
  background: rgba(255, 255, 255, 0.75);
  animation: wave 20s infinite linear;

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
export const WaveThree = styled.div`
  width: 1000px;
  height: 800px;
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -500px;
  margin-top: -800px;
  border-radius: 60%;
  background: #1E90FF;
  animation: wave 17s infinite linear;
  &:hover {
    background: ${shade(0.1, '#1E90FF')}
  }

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
