import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from './';

storiesOf('Hero', module)
  .add('default', () => {
    const children = 'Hero Content';

    return (
      <Hero>
        {children}
      </Hero>
    );
  });
