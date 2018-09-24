import React from 'react';
import { Button as RebassButton } from 'rebass';

import styled from 'styled-components';

const Button = styled(({ transparent, ...props }) => <RebassButton color="gray2" bg="transparent" {...props} />)`
  border: 2px solid #000;
  display: block;
  font-weight: bold;
  background-color: #000;
  cursor: pointer;
  font-size: 1.5rem
  color: #fff;
  transition: all .3s;

  &:hover, &:focus {
    border-color: #333;
    background-color: #666;
    color: white;
  }
`;

Button.propTypes = {
};

Button.defaultProps = {
};

export { Button };
