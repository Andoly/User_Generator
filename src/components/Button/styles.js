import styled from 'styled-components'
import { shade } from 'polished'

export const Button = styled.button`
  background: #04d361;
  color: #fff;
  width: 180px;
  height: 50px;
  padding: 5px 15px;    
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background: ${shade(0.2, '#04d361')}
  }
`