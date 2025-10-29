'use client';

import { useCallback } from 'react';
import { useModal } from '@/commons/providers/modal/modal.provider';
import DiariesNew from '@/components/diaries-new';

// 일기쓰기 모달 링크 훅
export const useDiaryModalLink = () => {
  const { openModal, closeModal } = useModal();

  // 일기 쓰기 모달 열기
  const openWriteDiaryModal = useCallback(() => {
    openModal(
      <div data-testid="diary-modal">
        <DiariesNew />
      </div>
    );
  }, [openModal]);

  return {
    openWriteDiaryModal,
    closeModal,
  };
};

