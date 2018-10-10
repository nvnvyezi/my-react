export interface Igong {
  prefixCls?: string;
  className?: string;
  style?: object;
  onChange?: Function;
  placeholder?: string;
  defaultValue?: string;
}
export interface IinputProps extends Igong {
  addonAfter?: string | React.ReactNode;
  addonBefore?: string | React.ReactNode;
  radiusLeft?: boolean;
  radiusRight?: boolean;
  onSearch?: Function;
  classNameInput?: string;
}
export interface IinputState extends Igong {
  value: string | undefined;
}

export interface IsearchProps extends Igong {
  enterButton?: boolean | string;
  onSearch?: Function;
}

export interface ItextAreaProps extends Igong {
  onPressEnter?: Function;
  autosize?: boolean | AutoSizeType;
  rows?: number;
}
export interface ItextAreaState extends Igong {
  value: string | undefined;
}
interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}
