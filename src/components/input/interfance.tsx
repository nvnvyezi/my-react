export interface Igong {
  prefixCls?: string;
  className?: string;
  style?: object;
  onChange?: Function;
  placeholder?: string;
  defaultValue?: any;
}
export interface IinputProps extends Igong {
  addonAfter?: string | React.ReactNode;
  addonBefore?: string | React.ReactNode;
  autoFocus?: boolean;
  classNameInput?: string;
  onSearch?: Function;
  prefix?: string;
  radiusLeft?: boolean;
  radiusRight?: boolean;
  suffix?: string;
  value?: any;
  type?: string;
}
export interface IinputState {
  currentValue: any;
}

export interface IsearchProps extends Igong {
  enterButton?: boolean | string;
  onSearch?: Function;
}

export interface ItextAreaProps extends Igong {
  autosize?: boolean | AutoSizeType;
  autoFocus?: boolean;
  onPressEnter?: Function;
  rows?: number;
}
export interface ItextAreaState {
  value: string | undefined;
}
interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}
