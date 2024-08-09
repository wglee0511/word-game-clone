import { includes } from 'lodash';

export const getTargetCellColor = (
  index: number,
  green: string,
  yellow: string,
  gray200: string,
  correctList: number[],
  positionList: number[],
) => {
  let cellBackgroundColor = gray200;

  const hasCorrect = includes(correctList, index);
  const hasPosition = includes(positionList, index);

  if (hasCorrect) {
    cellBackgroundColor = green;
  } else if (hasPosition) {
    cellBackgroundColor = yellow;
  }

  return { cellBackgroundColor };
};
