import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './index';
import { useState } from 'react';

// Meta 설정
const meta = {
  title: 'Commons/Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '토글의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '토글의 크기',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '토글의 테마',
    },
    checked: {
      control: 'boolean',
      description: '토글의 체크 상태 (controlled)',
    },
    defaultChecked: {
      control: 'boolean',
      description: '토글의 기본 체크 상태 (uncontrolled)',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
  },
};

// Variant 스토리 - Dark Theme
export const PrimaryDark: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
  },
};

export const SecondaryDark: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
  },
};

export const TertiaryDark: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
  },
};

// Variant 스토리 - Light Theme
export const PrimaryLight: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
  },
};

export const SecondaryLight: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
  },
};

export const TertiaryLight: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    theme: 'light',
    defaultChecked: false,
  },
};

// Size 스토리
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    theme: 'dark',
    defaultChecked: false,
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    theme: 'dark',
    defaultChecked: false,
  },
};

// 상태 스토리
export const Checked: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: true,
  },
};

export const Unchecked: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    theme: 'dark',
    defaultChecked: true,
    disabled: true,
  },
};

// 조합 스토리 - 모든 Variants (Dark Theme)
export const AllVariantsDark: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" theme="dark" defaultChecked={false} />
        <span style={{ color: '#fff' }}>Primary (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" theme="dark" defaultChecked={true} />
        <span style={{ color: '#fff' }}>Primary (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="secondary" theme="dark" defaultChecked={false} />
        <span style={{ color: '#fff' }}>Secondary (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="secondary" theme="dark" defaultChecked={true} />
        <span style={{ color: '#fff' }}>Secondary (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="tertiary" theme="dark" defaultChecked={false} />
        <span style={{ color: '#fff' }}>Tertiary (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="tertiary" theme="dark" defaultChecked={true} />
        <span style={{ color: '#fff' }}>Tertiary (Checked)</span>
      </div>
    </div>
  ),
};

// 조합 스토리 - 모든 Variants (Light Theme)
export const AllVariantsLight: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" theme="light" defaultChecked={false} />
        <span>Primary (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" theme="light" defaultChecked={true} />
        <span>Primary (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="secondary" theme="light" defaultChecked={false} />
        <span>Secondary (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="secondary" theme="light" defaultChecked={true} />
        <span>Secondary (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="tertiary" theme="light" defaultChecked={false} />
        <span>Tertiary (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="tertiary" theme="light" defaultChecked={true} />
        <span>Tertiary (Checked)</span>
      </div>
    </div>
  ),
};

// 조합 스토리 - 모든 Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" size="small" theme="dark" defaultChecked={false} />
        <span style={{ color: '#fff' }}>Small (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" size="small" theme="dark" defaultChecked={true} />
        <span style={{ color: '#fff' }}>Small (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" size="medium" theme="dark" defaultChecked={false} />
        <span style={{ color: '#fff' }}>Medium (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" size="medium" theme="dark" defaultChecked={true} />
        <span style={{ color: '#fff' }}>Medium (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" size="large" theme="dark" defaultChecked={false} />
        <span style={{ color: '#fff' }}>Large (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" size="large" theme="dark" defaultChecked={true} />
        <span style={{ color: '#fff' }}>Large (Checked)</span>
      </div>
    </div>
  ),
};

// 조합 스토리 - Disabled 상태
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" theme="dark" defaultChecked={false} disabled />
        <span style={{ color: '#fff' }}>Primary Disabled (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="primary" theme="dark" defaultChecked={true} disabled />
        <span style={{ color: '#fff' }}>Primary Disabled (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="secondary" theme="dark" defaultChecked={false} disabled />
        <span style={{ color: '#fff' }}>Secondary Disabled (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="secondary" theme="dark" defaultChecked={true} disabled />
        <span style={{ color: '#fff' }}>Secondary Disabled (Checked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="tertiary" theme="dark" defaultChecked={false} disabled />
        <span style={{ color: '#fff' }}>Tertiary Disabled (Unchecked)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Toggle variant="tertiary" theme="dark" defaultChecked={true} disabled />
        <span style={{ color: '#fff' }}>Tertiary Disabled (Checked)</span>
      </div>
    </div>
  ),
};

// 인터랙티브 스토리 (Controlled)
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Toggle
            variant="primary"
            size="medium"
            theme="dark"
            checked={checked}
            onChange={(newChecked) => {
              setChecked(newChecked);
              console.log('Toggle state:', newChecked);
            }}
          />
          <span style={{ color: '#fff' }}>
            Controlled Toggle: {checked ? 'Checked' : 'Unchecked'}
          </span>
        </div>
      </div>
    );
  },
};

