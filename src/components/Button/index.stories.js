import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './';

storiesOf('Button', module)
  .add('default', () => {
    const children = 'My Button Content';

    return (
      <Button>
        {children}
      </Button>
    );
  });
