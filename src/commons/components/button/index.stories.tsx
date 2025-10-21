import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

// Meta 설정
const meta = {
  title: 'Commons/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '버튼의 테마',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 적용 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Button',
  },
};

// Variant 스토리
export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Primary Dark',
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'dark',
    children: 'Secondary Dark',
  },
};

export const TertiaryDark: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'dark',
    children: 'Tertiary Dark',
  },
};

export const PrimaryLight: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    children: 'Primary Light',
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    children: 'Secondary Light',
  },
};

export const TertiaryLight: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    children: 'Tertiary Light',
  },
};

// Size 스토리
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'dark',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'dark',
    children: 'Large Button',
  },
};

// 상태 스토리
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Full Width Button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// 조합 스토리 - 모든 Variants (Dark Theme)
export const AllVariantsDark: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" theme="dark">
        Primary
      </Button>
      <Button variant="secondary" theme="dark">
        Secondary
      </Button>
      <Button variant="tertiary" theme="dark">
        Tertiary
      </Button>
    </div>
  ),
};

// 조합 스토리 - 모든 Variants (Light Theme)
export const AllVariantsLight: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" theme="light">
        Primary
      </Button>
      <Button variant="secondary" theme="light">
        Secondary
      </Button>
      <Button variant="tertiary" theme="light">
        Tertiary
      </Button>
    </div>
  ),
};

// 조합 스토리 - 모든 Sizes
export const AllSizes: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="small" theme="dark">
        Small
      </Button>
      <Button variant="primary" size="medium" theme="dark">
        Medium
      </Button>
      <Button variant="primary" size="large" theme="dark">
        Large
      </Button>
    </div>
  ),
};

// 조합 스토리 - Disabled 상태
export const DisabledStates: Story = {
  args: {
    children: '',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" theme="dark" disabled>
        Primary Disabled
      </Button>
      <Button variant="secondary" theme="dark" disabled>
        Secondary Disabled
      </Button>
      <Button variant="tertiary" theme="dark" disabled>
        Tertiary Disabled
      </Button>
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

