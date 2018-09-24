import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';
// const { toMatchImageSnapshot } = require('jest-image-snapshot');

// initStoryshots();
// expect.extend({ toMatchImageSnapshot });

initStoryshots({
  suite: 'Storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:9001',
  }),
});
