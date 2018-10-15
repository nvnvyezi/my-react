export interface IsliderProps {
  className?: string;
  defaultValue?: number | number[];
  disabled?: boolean;
  onAfterChange?: (e) => void;
  onChange?: (e) => void;
  prefixCls: string;
  range?: boolean;
}

export interface IsliderState {
  ballEnd: number;
  ballOrigin: number;
}
