type Placements = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' |  'rightTop' | 'rightBottom'

export interface ItooltipProps {
  children?: React.ReactNode;
  className?: string;
  defaultVisible?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  onVisibleChange?: (e) => void;
  overlayClassName?: string;
  overlayStyle?: object;
  placement?: Placements;
  prefixCls: string;
  style?: object;
  title?: string | React.ReactNode;
  visible?: boolean;
  tabIndex?: number;
}

export interface ItooltipState {
  show: boolean;
  style: object;
}
