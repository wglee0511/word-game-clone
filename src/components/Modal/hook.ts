import { useCallback, useEffect, useRef, useState } from 'react';

export const useModal = (defaultVisible = false) => {
  const [isVisibleModal, setIsVisibleModal] = useState(defaultVisible);

  const onOpenModal = useCallback(() => {
    setIsVisibleModal(true);
  }, [setIsVisibleModal]);

  const onCloseModal = useCallback(() => {
    setIsVisibleModal(false);
  }, [setIsVisibleModal]);

  const onToggleModal = useCallback(() => {
    setIsVisibleModal((prev) => !prev);
  }, [setIsVisibleModal]);

  useEffect(() => {
    if (isVisibleModal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'visible';
  }, [isVisibleModal]);

  return { isVisibleModal, onOpenModal, onCloseModal, onToggleModal };
};

export const useInitFocus = () => {
  const contentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentsRef.current) {
      contentsRef.current.focus();
    }
  }, [contentsRef]);

  return { contentsRef };
};
