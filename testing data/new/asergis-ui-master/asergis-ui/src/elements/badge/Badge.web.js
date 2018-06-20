import styled from 'styled-components';
import { Text } from 'react-native';

export const Badge = styled.span`
position: relative;
margin:0px 10px 0px 10px;
display:inline-block;
color: #C3C1C1;
font-size:20px;
&:after{
  width:20px;
  height:20px;
  position:absolute;
  content: "${props => props.value}";
  border-radius:50%;
  background-color:#F20D49;
  color:#ffffff;
  font-size:10px;
  top:-6px;
  left:6px;
  align-items: center;
  display: flex;
  justify-content: center;
  border:2px solid #fff;
}
`;