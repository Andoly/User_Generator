import styled from "styled-components";
import { shade } from "polished";

export const NavBar = styled.div`
  background: ${shade(0.1, "#1E90FF")};
  height: 120px;
  display: flex;
  justify-content: flex-end;
`;

