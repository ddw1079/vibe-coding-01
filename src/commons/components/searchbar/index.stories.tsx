import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './index';

// Meta 설정
const meta = {
  title: 'Commons/Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '검색바의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '검색바의 크기',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '검색바의 테마',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 적용 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: '검색어를 입력해 주세요.',
  },
};

// Variant 스토리 - Dark Theme
export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Primary Dark 검색',
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Secondary Dark 검색',
  },
};

export const TertiaryDark: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Tertiary Dark 검색',
  },
};

// Variant 스토리 - Light Theme
export const PrimaryLight: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Primary Light 검색',
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Secondary Light 검색',
  },
};

export const TertiaryLight: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Tertiary Light 검색',
  },
};

// Size 스토리
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'dark',
    placeholder: 'Small 검색바',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Medium 검색바',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'dark',
    placeholder: 'Large 검색바',
  },
};

// 상태 스토리
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: '비활성화된 검색바',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: '에러 상태 검색바',
    error: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: '전체 너비 검색바',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// 조합 스토리 - 모든 Variants (Dark Theme)
export const AllVariantsDark: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <SearchBar variant="primary" theme="dark" placeholder="Primary Dark 검색" />
      <SearchBar variant="secondary" theme="dark" placeholder="Secondary Dark 검색" />
      <SearchBar variant="tertiary" theme="dark" placeholder="Tertiary Dark 검색" />
    </div>
  ),
};

// 조합 스토리 - 모든 Variants (Light Theme)
export const AllVariantsLight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <SearchBar variant="primary" theme="light" placeholder="Primary Light 검색" />
      <SearchBar variant="secondary" theme="light" placeholder="Secondary Light 검색" />
      <SearchBar variant="tertiary" theme="light" placeholder="Tertiary Light 검색" />
    </div>
  ),
};

// 조합 스토리 - 모든 Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <SearchBar variant="primary" size="small" theme="dark" placeholder="Small 검색바" />
      <SearchBar variant="primary" size="medium" theme="dark" placeholder="Medium 검색바" />
      <SearchBar variant="primary" size="large" theme="dark" placeholder="Large 검색바" />
    </div>
  ),
};

// 조합 스토리 - 상태별
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <SearchBar variant="primary" theme="dark" placeholder="기본 상태" />
      <SearchBar variant="primary" theme="dark" placeholder="비활성화 상태" disabled />
      <SearchBar variant="primary" theme="dark" placeholder="에러 상태" error />
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: '검색어를 입력하고 Enter를 눌러보세요',
    onSearch: (value: string) => {
      alert(`검색어: ${value}`);
    },
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: '검색어를 입력해 주세요.',
    defaultValue: '초기 검색어',
  },
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '8px', color: '#fff' }}>일반 검색</h3>
        <SearchBar
          variant="primary"
          size="medium"
          theme="dark"
          placeholder="상품명을 검색해 주세요."
          onSearch={(value) => console.log('검색:', value)}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', color: '#fff' }}>필터 검색</h3>
        <SearchBar
          variant="secondary"
          size="small"
          theme="dark"
          placeholder="필터 검색"
          onSearch={(value) => console.log('필터:', value)}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '8px', color: '#fff' }}>전체 너비 검색</h3>
        <SearchBar
          variant="primary"
          size="large"
          theme="dark"
          placeholder="전체 검색"
          fullWidth
          onSearch={(value) => console.log('전체검색:', value)}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

