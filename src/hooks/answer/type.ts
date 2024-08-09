import { CommonWordPlayProps } from 'src/containers/WordlePlay/type';

export interface AnswerElementProps extends Omit<CommonWordPlayProps, 'isAnswered'> {}
