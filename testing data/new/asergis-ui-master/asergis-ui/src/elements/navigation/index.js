import styled from 'styled-components';

export const Alphabet = styled.ul`
  padding-left: 0;
  li {
    list-style: none;
    line-height: 2;
    a {
      padding-top: 5px;
      display: block;
      text-decoration: none;
      color: #444;
      text-align: center;
      font-size: 14px;

      &:hover,
      &:active,
      &:visited {
      }
    }
  }
`;

export const Breadcrumb = styled.ul`
  padding: 10px 16px;
  list-style: none;
  li {
    color: #1587da;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    a {
      color: #888 !important;
    }
  }
  li:after {
    border: 1px solid #888;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    content: '';
    margin: 0px 10px;
  }
  li:last-child:after {
    content: '';
    border: 0px;
  }
`;
