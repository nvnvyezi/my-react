interface Igong {
  prefixCls: string;
  className?: string;
  name?: string;
  value?: any;
  disabled?: boolean;
  style?: object;
}

export type RadioGroupButtonStyle = 'outline' | 'solid' | undefined;
export type GroupType = 'normal' | 'button' | undefined;

export interface IgroupProps extends Igong {
  defaultValue?: any;
  options?: Array<any>;
  children?: React.ReactNode;
  onChange?: React.MouseEventHandler<HTMLAnchorElement>;
  buttonStyle?: RadioGroupButtonStyle;
}

export interface IradioProps extends Igong {
  id?: string;
  isChecked?: boolean;
  onChange?: any;
  defaultChecked?: boolean;
  classNameLabel?: string;
  isButton?: string;
  outDisabled?: boolean | undefined;
}

export interface IotherProps {
  name: any;
  outDisabled: any;
  onChange: any;
  isChecked?: any;
  buttonStyle: RadioGroupButtonStyle;
}

export interface IbuttonProps extends Igong {
  buttonStyle?: RadioGroupButtonStyle;
}
