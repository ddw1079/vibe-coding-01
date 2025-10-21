import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './index';

// Meta 설정
const meta = {
  title: 'Commons/Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: '현재 페이지 번호',
    },
    totalPages: {
      control: 'number',
      description: '전체 페이지 수',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '페이지네이션의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '페이지네이션의 크기',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '페이지네이션의 테마',
    },
    maxVisiblePages: {
      control: 'number',
      description: '표시할 최대 페이지 번호 개수',
    },
    onPageChange: {
      action: 'pageChanged',
      description: '페이지 변경 핸들러',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// Variant 스토리
export const PrimaryDark: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const SecondaryDark: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'secondary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const TertiaryDark: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'tertiary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const PrimaryLight: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const SecondaryLight: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const TertiaryLight: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// Size 스토리
export const Small: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'small',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const Medium: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const Large: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: 'primary',
    size: 'large',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// 상태 스토리 - 첫 페이지
export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// 상태 스토리 - 마지막 페이지
export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// 상태 스토리 - 단일 페이지
export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// 상태 스토리 - 많은 페이지
export const ManyPages: Story = {
  args: {
    currentPage: 25,
    totalPages: 50,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

// 조합 스토리 - 모든 Variants (Dark Theme)
export const AllVariantsDark: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="primary"
        theme="dark"
        onPageChange={(page) => console.log('Primary:', page)}
      />
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="secondary"
        theme="dark"
        onPageChange={(page) => console.log('Secondary:', page)}
      />
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="tertiary"
        theme="dark"
        onPageChange={(page) => console.log('Tertiary:', page)}
      />
    </div>
  ),
};

// 조합 스토리 - 모든 Variants (Light Theme)
export const AllVariantsLight: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="primary"
        theme="light"
        onPageChange={(page) => console.log('Primary:', page)}
      />
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="secondary"
        theme="light"
        onPageChange={(page) => console.log('Secondary:', page)}
      />
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="tertiary"
        theme="light"
        onPageChange={(page) => console.log('Tertiary:', page)}
      />
    </div>
  ),
};

// 조합 스토리 - 모든 Sizes
export const AllSizes: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="primary"
        size="small"
        theme="dark"
        onPageChange={(page) => console.log('Small:', page)}
      />
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="primary"
        size="medium"
        theme="dark"
        onPageChange={(page) => console.log('Medium:', page)}
      />
      <Pagination
        currentPage={3}
        totalPages={10}
        variant="primary"
        size="large"
        theme="dark"
        onPageChange={(page) => console.log('Large:', page)}
      />
    </div>
  ),
};

// 조합 스토리 - 다양한 페이지 상태
export const DifferentStates: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {},
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', color: '#666' }}>First Page</p>
        <Pagination
          currentPage={1}
          totalPages={10}
          variant="primary"
          theme="dark"
          onPageChange={(page) => console.log('First:', page)}
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', color: '#666' }}>Middle Page</p>
        <Pagination
          currentPage={5}
          totalPages={10}
          variant="primary"
          theme="dark"
          onPageChange={(page) => console.log('Middle:', page)}
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', color: '#666' }}>Last Page</p>
        <Pagination
          currentPage={10}
          totalPages={10}
          variant="primary"
          theme="dark"
          onPageChange={(page) => console.log('Last:', page)}
        />
      </div>
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    currentPage: 1,
    totalPages: 20,
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    maxVisiblePages: 5,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

