interface Igong {
  prefixCls?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  multipleArr?: Array<any>;
}

export interface IselectProps extends Igong {
  defaultValue?: string;
  style?: object;
  className?: string;
  onChange?: Function;
  multiple?: boolean;
  placeholder?: string;
  onFocus?: Function;
  onBlur?: Function;
  autoFocus?: boolean;
  classNameSelect?: string;
}

export interface IselectState extends Igong {
  allowOptionBox: boolean;
  text: string;
  valueFlag: string | undefined;
  multipleArr: Array<any>;
}

export interface IoptionState extends Igong {
  flag: boolean;
  select: boolean | undefined;
}

export interface IoptionProps extends Igong {
  value?: string;
  select?: boolean;
  onSelect?: any;
}
