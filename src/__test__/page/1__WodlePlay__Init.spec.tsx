import { render, screen } from '@testing-library/react';
import { TEST_ANSWER } from 'src/lib/testConstant';
import { useSystemStore } from 'src/stores';

import App from '../../App';

describe('1. 워들 시작 페이지', () => {
  const renderComponent = () => render(<App />);

  test('1-1. 답변 설정과 테마 설정이 되었는지 확인합니다.', async () => {
    renderComponent();
    const { answer, isDarkTheme } = useSystemStore.getState();
    const component = await screen.findByText(/Wordle/);
    expect(component).toBeVisible();

    expect(answer).toBe(TEST_ANSWER);
    expect(isDarkTheme).toBe(true);
  });
});
