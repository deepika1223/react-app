import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { Link } from 'react-router-dom';

const DemoLink = styled(Link)`
  display: block;
  padding: 10px;
  font-size: 18px;
`;

const DemoHeader = styled(Text)`
  font-size: 22px;
  padding: 20px 10px;
`;

const Home = () => (
  <Fragment>
    <DemoHeader>Demo examples</DemoHeader>
    <DemoLink to="/buttons">Buttons</DemoLink>
    <DemoLink to="/forms">Forms</DemoLink>
    <DemoLink to="/tables">Tables</DemoLink>
    <DemoLink to="/heading">Heading</DemoLink>
    <DemoLink to="/alphabet">Alphabet</DemoLink>
    <DemoLink to="/scrollbar">Scrollbar</DemoLink>
    <DemoLink to="/tooltip">ToolTip</DemoLink>
    <DemoLink to="/tools-panel">Tools Panel</DemoLink>
    <DemoLink to="/dropdowns">Dropdowns</DemoLink>
    <DemoLink to="/preloaders">Preloaders</DemoLink>
    <DemoLink to="/pagination">Pagination</DemoLink>
    <DemoLink to="/modals">Modals</DemoLink>
  </Fragment>
);

export default Home;
