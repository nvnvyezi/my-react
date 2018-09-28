export interface Igong {
  prefixCls?: string;
  className?: string;
  style?: object;
  onChange?: Function;
  onSearch?: Function;
  placeholder?: string;
}
export interface IinputProps extends Igong {
  addonAfter?: string | React.ReactNode;
  addonBefore?: string | React.ReactNode;
  defaultValue?: string;
  radiusLeft?: boolean;
  radiusRight?: boolean;
}
export interface IinputState extends Igong {
  value: string | undefined;
}

export interface IsearchProps extends Igong {
  enterButton?: boolean | string;
}
