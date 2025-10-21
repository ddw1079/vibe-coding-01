'use client';

import React, { useState } from 'react';
import SelectBox from '@/commons/components/selectbox';
import SearchBar from '@/commons/components/searchbar';
import Button from '@/commons/components/button';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Diaries() {
  const [filterValue, setFilterValue] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  // 필터 옵션
  const filterOptions = [
    { value: 'all', label: '전체' },
    { value: 'happy', label: '기쁨' },
    { value: 'sad', label: '슬픔' },
    { value: 'angry', label: '화남' },
    { value: 'surprise', label: '놀람' },
    { value: 'etc', label: '기타' },
  ];

  // 일기쓰기 버튼 클릭
  const handleWriteDiary = () => {
    console.log('일기쓰기 클릭');
  };

  return (
    <div className={styles.container}>
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
        <span className={styles.placeholder}>main</span>
      </div>
      <div className={styles.gap40} />
      <div className={styles.pagination}>
        <span className={styles.placeholder}>pagination</span>
      </div>
      <div className={styles.gap40} />
    </div>
  );
}

