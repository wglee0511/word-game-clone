/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import ReactDOM from 'react-dom';
import Divider from 'src/components/Divider';
import Icon from 'src/components/Icons';
import Text from 'src/components/Text';
import { useThemeStore } from 'src/stores';
import styled from 'styled-components';

import { useInitFocus } from '../hook';
import { ModalSizeStyleProps } from '../type';

import { ConfirmModalProps } from './type';

const S = {
  Dimmed: styled.div<ModalSizeStyleProps>`
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  `,
  BackDrop: styled.div<ModalSizeStyleProps>`
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    opacity: 1;
  `,
  Contents: styled.div<{ width: number; backgroundColor: string }>`
    max-width: ${(props) => `${props.width}px`};
    padding-top: 9px;
    border-radius: 15px;
    background-color: ${(props) => props.backgroundColor};
    outline: none;
  `,
  Description: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
  `,
};

/**
 * @component
 * confirm / alert 등에 사용되는 모달

 * @example
 * <ConfirmModal
 *   headline="제목"           // required
 *   description="설명"        // required
 *   width={588}              // optional
 *   visible={false}          // optional
 *   isVisibleAppBar          // optional
 *   onCloseModal={() => {}}  // optional
 *   tooltip={<Tooltip />}    // optional
 * >
 *   <BottomButtonArea />
 * </ConfirmModal>
 */
const ConfirmModal = ({
  description,
  width = 588,
  visible = false,
  isVisibleAppBar = false,
  children,
  onKeyDown,
  onCloseModal,
}: React.PropsWithChildren<ConfirmModalProps>) => {
  const { contentsRef } = useInitFocus();
  const { backgroundColor, textColor } = useThemeStore();

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (!onCloseModal) {
      return;
    }

    onCloseModal();
  };

  return visible ? (
    ReactDOM.createPortal(
      <>
        <S.Dimmed isVisibleAppBar={isVisibleAppBar} />
        <S.BackDrop isVisibleAppBar={isVisibleAppBar} onClick={onClickOutside}>
          <S.Contents
            ref={contentsRef}
            width={width}
            tabIndex={onKeyDown ? 0 : undefined}
            onKeyDown={onKeyDown}
            backgroundColor={backgroundColor}
          >
            <Divider vertical={24} />
            <S.Description>
              <Text fontSize={1.5} fontWeight={700} color={textColor}>
                {description}
              </Text>
              {isVisibleAppBar && (
                <button
                  onClick={() => {
                    if (onCloseModal) {
                      onCloseModal();
                    }
                  }}
                >
                  <Icon icon="Close" size={24} color={textColor} />
                </button>
              )}
            </S.Description>
            <Divider vertical={32} />
            {children}
          </S.Contents>
        </S.BackDrop>
      </>,
      (document.querySelector('#modal') as Element) ?? document.body,
    )
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
};

export default ConfirmModal;
