import { render, screen } from '@testing-library/react';
import { isNil } from 'lodash';
import { WordlePlayContents } from 'src/containers/WordlePlay';
import { TEST_INPUT } from 'src/lib/testConstant';
import { KeyBoardElement } from 'src/types/element';

describe('3 워들 콘텐츠 색상 테스트', () => {
  test('3-1. angel 입력시 차례대로 초록색 / 검은색 / 검은색 / 노란색 / 노란색이 출력되어야 합니다.', async () => {
    render(
      <WordlePlayContents
        isAnswered={false}
        targetTextList={[[...TEST_INPUT], []] as KeyBoardElement[][]}
        currentRowIndex={1}
        setCurrentRowIndex={jest.fn()}
        setTargeTextList={jest.fn()}
      />,
    );

    const testAElement = (await screen.findByText(/A/)).parentElement;
    expect(testAElement).not.toBeNull();
    const testNElement = (await screen.findByText(/N/)).parentElement;
    expect(testNElement).not.toBeNull();
    const testGElement = (await screen.findByText(/G/)).parentElement;
    expect(testGElement).not.toBeNull();
    const testEElement = (await screen.findByText(/E/)).parentElement;
    expect(testEElement).not.toBeNull();
    const testLElement = (await screen.findByText(/L/)).parentElement;
    expect(testLElement).not.toBeNull();

    if (
      !isNil(testAElement) &&
      !isNil(testNElement) &&
      !isNil(testGElement) &&
      !isNil(testEElement) &&
      !isNil(testLElement)
    ) {
      const aElementColor = window.getComputedStyle(testAElement).backgroundColor;
      expect(aElementColor).toBe('rgb(83, 141, 78)');

      const nElementColor = window.getComputedStyle(testNElement).backgroundColor;
      expect(nElementColor).toBe('rgb(58, 58, 60)');

      const gElementColor = window.getComputedStyle(testGElement).backgroundColor;
      expect(gElementColor).toBe('rgb(58, 58, 60)');

      const eElementColor = window.getComputedStyle(testEElement).backgroundColor;
      expect(eElementColor).toBe('rgb(181, 159, 59)');

      const lElementColor = window.getComputedStyle(testLElement).backgroundColor;
      expect(lElementColor).toBe('rgb(181, 159, 59)');
    }
  });
});
