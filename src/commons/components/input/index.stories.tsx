import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

// Meta 설정
const meta = {
  title: 'Commons/Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '인풋의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '인풋의 크기',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '인풋의 테마',
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Enter text...',
  },
};

// Variant 스토리
export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Primary Dark',
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Secondary Dark',
  },
};

export const TertiaryDark: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Tertiary Dark',
  },
};

export const PrimaryLight: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Primary Light',
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Secondary Light',
  },
};

export const TertiaryLight: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    placeholder: 'Tertiary Light',
  },
};

// Size 스토리
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'dark',
    placeholder: 'Small Input',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Medium Input',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'dark',
    placeholder: 'Large Input',
  },
};

// 상태 스토리
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Disabled Input',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Error Input',
    error: true,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Full Width Input',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// 조합 스토리 - 모든 Variants (Dark Theme)
export const AllVariantsDark: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Input variant="primary" theme="dark" placeholder="Primary" />
      <Input variant="secondary" theme="dark" placeholder="Secondary" />
      <Input variant="tertiary" theme="dark" placeholder="Tertiary" />
    </div>
  ),
};

// 조합 스토리 - 모든 Variants (Light Theme)
export const AllVariantsLight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Input variant="primary" theme="light" placeholder="Primary" />
      <Input variant="secondary" theme="light" placeholder="Secondary" />
      <Input variant="tertiary" theme="light" placeholder="Tertiary" />
    </div>
  ),
};

// 조합 스토리 - 모든 Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Input variant="primary" size="small" theme="dark" placeholder="Small" />
      <Input variant="primary" size="medium" theme="dark" placeholder="Medium" />
      <Input variant="primary" size="large" theme="dark" placeholder="Large" />
    </div>
  ),
};

// 조합 스토리 - Disabled 상태
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Input variant="primary" theme="dark" placeholder="Primary Disabled" disabled />
      <Input variant="secondary" theme="dark" placeholder="Secondary Disabled" disabled />
      <Input variant="tertiary" theme="dark" placeholder="Tertiary Disabled" disabled />
    </div>
  ),
};

// 조합 스토리 - Error 상태
export const ErrorStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <Input variant="primary" theme="dark" placeholder="Primary Error" error />
      <Input variant="secondary" theme="dark" placeholder="Secondary Error" error />
      <Input variant="tertiary" theme="dark" placeholder="Tertiary Error" error />
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    placeholder: 'Type something...',
    onChange: (e) => console.log('Input value:', e.target.value),
  },
};

