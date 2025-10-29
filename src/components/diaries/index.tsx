'use client';

import React, { useState } from 'react';
import SelectBox from '@/commons/components/selectbox';
import SearchBar from '@/commons/components/searchbar';
import Button from '@/commons/components/button';
import Pagination from '@/commons/components/pagination';
import Image from 'next/image';
import { EmotionType, getEmotionInfo } from '@/commons/constants/enum';
import styles from './styles.module.css';
import { useDiaryModalLink } from './hooks/index.link.modal.hook';

// 일기 카드 데이터 타입
interface DiaryCard {
  id: number;
  emotion: EmotionType;
  date: string;
  title: string;
}

export default function Diaries() {
  const [filterValue, setFilterValue] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  
  // 모달 링크 hook
  const { openWriteDiaryModal } = useDiaryModalLink();

  // 필터 옵션
  const filterOptions = [
    { value: 'all', label: '전체' },
    { value: 'happy', label: '기쁨' },
    { value: 'sad', label: '슬픔' },
    { value: 'angry', label: '화남' },
    { value: 'surprise', label: '놀람' },
    { value: 'etc', label: '기타' },
  ];

  // Mock 데이터: 일기 카드 목록
  const diaryCards: DiaryCard[] = [
    { id: 1, emotion: EmotionType.SAD, date: '2024. 03. 12', title: '타이틀 영역 입니다. 한줄까지만 노출 됩니다.' },
    { id: 2, emotion: EmotionType.SURPRISE, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 3, emotion: EmotionType.ANGRY, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 4, emotion: EmotionType.HAPPY, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 5, emotion: EmotionType.ETC, date: '2024. 03. 12', title: '타이틀 영역 입니다. 한줄까지만 노출 됩니다.' },
    { id: 6, emotion: EmotionType.SURPRISE, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 7, emotion: EmotionType.ANGRY, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 8, emotion: EmotionType.HAPPY, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 9, emotion: EmotionType.SAD, date: '2024. 03. 12', title: '타이틀 영역 입니다. 한줄까지만 노출 됩니다.' },
    { id: 10, emotion: EmotionType.SURPRISE, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 11, emotion: EmotionType.ANGRY, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
    { id: 12, emotion: EmotionType.HAPPY, date: '2024. 03. 12', title: '타이틀 영역 입니다.' },
  ];

  // 일기쓰기 버튼 클릭
  const handleWriteDiary = () => {
    openWriteDiaryModal();
  };

  // 카드 삭제 버튼 클릭
  const handleDeleteCard = (id: number) => {
    console.log('카드 삭제:', id);
  };

  return (
    <div className={styles.container} data-testid="diaries-container">
      <div className={styles.gap32} />
      <div className={styles.search}>
        <div className={styles.searchLeft}>
          <SelectBox
            variant="primary"
            size="medium"
            theme="light"
            options={filterOptions}
            value={filterValue}
            onChange={setFilterValue}
            placeholder="전체"
            className={styles.selectBox}
          />
          <SearchBar
            variant="primary"
            size="medium"
            theme="light"
            placeholder="검색어를 입력해 주세요."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={(value) => console.log('검색:', value)}
            className={styles.searchBar}
          />
        </div>
        <Button
          variant="primary"
          size="medium"
          theme="dark"
          onClick={handleWriteDiary}
          className={styles.writeButton}
          data-testid="write-diary-button"
        >
          <Image
            src="/icons/plus_outline_light_m.svg"
            alt="plus"
            width={24}
            height={24}
          />
          <span>일기쓰기</span>
        </Button>
      </div>
      <div className={styles.gap42} />
      <div className={styles.main}>
        {diaryCards.map((card) => {
          const emotionInfo = getEmotionInfo(card.emotion);
          return (
            <div key={card.id} className={styles.diaryCard}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={emotionInfo.imageM}
                  alt={emotionInfo.displayText}
                  width={274}
                  height={208}
                  className={styles.cardImage}
                />
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteCard(card.id)}
                  aria-label="삭제"
                >
                  <Image
                    src="/icons/close_outline_light_m.svg"
                    alt="close"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span
                    className={styles.emotionText}
                    style={{ color: emotionInfo.color }}
                  >
                    {emotionInfo.displayText}
                  </span>
                  <span className={styles.dateText}>{card.date}</span>
                </div>
                <div className={styles.cardTitle}>{card.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.gap40} />
      <div className={styles.pagination}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          variant="primary"
          size="medium"
          theme="light"
          maxVisiblePages={5}
        />
      </div>
      <div className={styles.gap40} />
    </div>
  );
}

