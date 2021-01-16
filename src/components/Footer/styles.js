import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  overflow: hidden;
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
  animation: wave 10s infinite linear;

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
