import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tag from './tag';
import cssEmbed from './css';

const propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const BoxWrap = styled(Tag())`
  && {
    ${props => cssEmbed(props)};
  }
`;

const Box = ({ is = 'div', ...props }) => <BoxWrap is={is} {...props} />;

export const Flex = ({ is = 'div', flex, ...props }) => (
  <BoxWrap is={is} flex {...props} />
);

export const Text = ({
  is = 'p',
  fz = '14',
  fw = '400',
  c = '#666',
  ...props
  }) => <BoxWrap is={is} c={c} fz={fz} fw={fw} {...props} />;

export const Heading = ({ is = 'h1', ...props }) => (
  <BoxWrap is={is} {...props} />
);

export const Img = ({ is = 'img', ...props }) => <BoxWrap is={is} {...props} />;

Box.propTypes = propTypes;

export default Box;