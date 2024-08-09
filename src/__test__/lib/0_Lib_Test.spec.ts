import { TEST_ANSWER, TEST_INPUT } from 'src/lib/testConstant';
import { getCorrectPositionWrongArrays, getResultTileText } from 'src/lib/text';

describe('0. 프로젝트에서 사용하는 함수를 테스트합니다.', () => {
  test('0-1 apple이 정답일때 angel을 입력하고 정답과 일치하는 인덱스 리스트로 [0] 이 반환되어야 합니다.', async () => {
    const { correctList } = getCorrectPositionWrongArrays(TEST_ANSWER, [...TEST_INPUT]);
    expect(correctList).toEqual(expect.arrayContaining([0]));
  });

  test('0-2 apple이 정답일때 angel을 입력하고 정답이 존재하는 텍스트의 인덱스 리스트로 [3, 4] 이 반환되어야 합니다.', async () => {
    const { positionList } = getCorrectPositionWrongArrays(TEST_ANSWER, [...TEST_INPUT]);
    expect(positionList).toEqual(expect.arrayContaining([3, 4]));
  });

  test(`
    0-3 apple이 정답일고 
    결과가 react / angel / apple 일때의 결과 타일이 
    ⬛️🟨🟨⬛️⬛️
    🟩⬛️⬛️🟨🟨
    🟩🟩🟩🟩🟩
    가 반환 되어야 합니다.`, async () => {
    const tile = getResultTileText(TEST_ANSWER, [[...'react'], [...TEST_INPUT], [...'apple']]);
    expect(tile).toBe(`
⬛️🟨🟨⬛️⬛️
🟩⬛️⬛️🟨🟨
🟩🟩🟩🟩🟩
`);
  });
});
