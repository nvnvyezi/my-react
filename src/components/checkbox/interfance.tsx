export interface Igong {
  className?: string;
  disabled?: boolean;
  onChange?: any;
  style?: object;
}

export interface IcheckboxProps extends Igong {
  autoFocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  indeterminate?: boolean;
  name?: string;
  onFocus?: any;
  onBlur?: any;
  prefixCls: string;
  value?: any;
}

export interface IgroupProps extends Igong {
  defaultValue?: Array<string>;
  options?: Array<string>;
  value?: Array<string>;
}
export interface IgroupState{
  currentValue: string[];
}
