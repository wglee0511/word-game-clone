import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { forEach } from 'lodash';

import App from '../../App';

describe('2 워들 키보드 입력 테스트', () => {
  const renderComponent = () => render(<App />);

  test('2-1. 키보드 a를 입력시 대문자 A가 표시됩니다.', async () => {
    renderComponent();

    userEvent.keyboard('a');
    const [content] = await screen.findAllByText('A');
    expect(content).not.toBeUndefined();
  });

  test('2-2. 버튼 Z를 클릭시 대문자 Z가 표시됩니다.', async () => {
    renderComponent();
    const button = await screen.findByRole('button', { name: 'Z' });

    userEvent.click(button);
    const [content] = await screen.findAllByText('Z');
    expect(content).not.toBeUndefined();
  });

  test('2-3. 키보드 a를 여섯번이상 입력시 버튼을 포함해 6개의 A가 화면에 표시되어야 합니다.', async () => {
    renderComponent();

    forEach(Array(5), () => {
      userEvent.keyboard('a');
    });
    const contents = await screen.findAllByText('A');
    expect(contents).toHaveLength(6);
  });
});
