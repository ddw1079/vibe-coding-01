import type { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from './index';

// 샘플 옵션 데이터
const sampleOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' },
  { value: 'option6', label: '옵션 6' },
  { value: 'option7', label: '옵션 7' },
  { value: 'option8', label: '옵션 8' },
  { value: 'option9', label: '옵션 9' },
  { value: 'option10', label: '옵션 10' },
];

// Meta 설정
const meta = {
  title: 'Commons/Components/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '셀렉트박스의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '셀렉트박스의 크기',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '셀렉트박스의 테마',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
  },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: '전체',
  },
};

// Variant 스토리
export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Primary Dark',
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Secondary Dark',
  },
};

export const TertiaryDark: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Tertiary Dark',
  },
};

export const PrimaryLight: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
    placeholder: 'Primary Light',
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
    placeholder: 'Secondary Light',
  },
};

export const TertiaryLight: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    options: sampleOptions,
    placeholder: 'Tertiary Light',
  },
};

// Size 스토리
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Small SelectBox',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Medium SelectBox',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Large SelectBox',
  },
};

// 상태 스토리
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Disabled SelectBox',
    disabled: true,
  },
};

export const WithSelectedValue: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    value: 'option2',
  },
};

// 조합 스토리 - 모든 Variants (Dark Theme)
export const AllVariantsDark: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <SelectBox variant="primary" theme="dark" options={sampleOptions} placeholder="Primary" />
      <SelectBox variant="secondary" theme="dark" options={sampleOptions} placeholder="Secondary" />
      <SelectBox variant="tertiary" theme="dark" options={sampleOptions} placeholder="Tertiary" />
    </div>
  ),
};

// 조합 스토리 - 모든 Variants (Light Theme)
export const AllVariantsLight: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <SelectBox variant="primary" theme="light" options={sampleOptions} placeholder="Primary" />
      <SelectBox variant="secondary" theme="light" options={sampleOptions} placeholder="Secondary" />
      <SelectBox variant="tertiary" theme="light" options={sampleOptions} placeholder="Tertiary" />
    </div>
  ),
};

// 조합 스토리 - 모든 Sizes
export const AllSizes: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <SelectBox variant="primary" size="small" theme="dark" options={sampleOptions} placeholder="Small" />
      <SelectBox variant="primary" size="medium" theme="dark" options={sampleOptions} placeholder="Medium" />
      <SelectBox variant="primary" size="large" theme="dark" options={sampleOptions} placeholder="Large" />
    </div>
  ),
};

// 조합 스토리 - Disabled 상태
export const DisabledStates: Story = {
  args: {
    options: sampleOptions,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
      <SelectBox variant="primary" theme="dark" options={sampleOptions} placeholder="Primary Disabled" disabled />
      <SelectBox variant="secondary" theme="dark" options={sampleOptions} placeholder="Secondary Disabled" disabled />
      <SelectBox variant="tertiary" theme="dark" options={sampleOptions} placeholder="Tertiary Disabled" disabled />
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    options: sampleOptions,
    placeholder: 'Select an option...',
    onChange: (value) => console.log('Selected value:', value),
  },
};

