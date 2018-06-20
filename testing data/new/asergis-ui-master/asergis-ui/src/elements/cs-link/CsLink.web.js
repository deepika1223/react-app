import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const CsLink = styled(Link)`
  background: #0086bb;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  padding: 17px 18px;
  &:hover {
    background: #0378ab;
  }
`;
