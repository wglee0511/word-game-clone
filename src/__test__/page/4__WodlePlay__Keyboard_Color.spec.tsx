import { render, screen } from '@testing-library/react';
import { WordlePlayKeyboard } from 'src/containers/WordlePlay';
import { TEST_INPUT } from 'src/lib/testConstant';
import { KeyBoardElement } from 'src/types/element';

describe('4 워들 키보드 색상 테스트', () => {
  test(`
    4-1. angel 입력시 키보드 버튼이
    A 초록색
    N 검은색
    G 검은색
    E 노란색
    L 노란색
    P 회색이 출력되어야 합니다.`, async () => {
    render(
      <WordlePlayKeyboard
        isAnswered={false}
        targetTextList={[[...TEST_INPUT], []] as KeyBoardElement[][]}
        currentRowIndex={1}
        setCurrentRowIndex={jest.fn()}
        setTargeTextList={jest.fn()}
        fullCorrectList={['a']}
        fullPositionList={['e', 'l']}
        fullWrongList={['n', 'g']}
      />,
    );

    const testAElement = await screen.findByRole('button', { name: 'A' });
    const testNElement = await screen.findByRole('button', { name: 'N' });
    const testGElement = await screen.findByRole('button', { name: 'G' });
    const testEElement = await screen.findByRole('button', { name: 'E' });
    const testLElement = await screen.findByRole('button', { name: 'L' });
    const testPElement = await screen.findByRole('button', { name: 'P' });

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

    const pElementColor = window.getComputedStyle(testPElement).backgroundColor;
    expect(pElementColor).toBe('rgb(129, 131, 132)');
  });
});
