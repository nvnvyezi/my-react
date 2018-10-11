export interface IswitchProps {
  autoFocus?: boolean;
  checked?: boolean;
  checkedChildren?: string;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (e: any) => void;
  pictureSuffix?: string[];
  prefixCls: string;
  size?: 'small' | 'default';
  style?: object;
  unCheckedChildren?: string;
}

export interface IswitchState {
  checked: boolean;
}
