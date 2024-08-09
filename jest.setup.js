import '@testing-library/jest-dom';

import { initialize } from './src/lib/init';
import { TEST_ANSWER } from './src/lib/testConstant';
import { useSystemStore } from './src/stores';

global.window.HTMLCanvasElement.prototype.getContext = () => ({
  fillRect: () => {},
  clearRect: () => {},
  getImageData: (x, y, w, h) => ({ data: new Array(w * h * 4) }),
  putImageData: () => {},
  createImageData: () => [],
  setTransform: () => {},
  drawImage: () => {},
  save: () => {},
  fillText: () => {},
  restore: () => {},
  beginPath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  closePath: () => {},
  stroke: () => {},
  translate: () => {},
  scale: () => {},
  rotate: () => {},
  arc: () => {},
  fill: () => {},
  measureText: () => ({ width: 0 }),
  transform: () => {},
  rect: () => {},
  clip: () => {},
});

global.window.HTMLCanvasElement.prototype.toDataURL = () => '';

beforeAll(() => {
  useSystemStore.setState({ answer: TEST_ANSWER, isDarkTheme: true });
});

afterAll(() => {
  jest.clearAllMocks();
});

initialize();
