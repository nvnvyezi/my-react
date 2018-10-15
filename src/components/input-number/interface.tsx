export interface Iprops {
  autoFocus?: boolean;
  className?: string;
  defaultValue?: number;
  disabled?: boolean;
  formatter?: (value: number | string | undefined) => string;
  max?: number;
  min?: number;
  onChange?: (e) => void;
  parser?: any;
  precision?: number;
  prefixCls: string;
  size?: 'small' | 'large' | 'default';
  step?: number;
  value?: number;
}

export interface Istate {
  currentValue: number | string;
  isBottomClick: boolean;
  isTopClick: boolean;
  precision: number;
  visible: boolean;
}
