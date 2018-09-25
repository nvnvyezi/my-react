type DataSourceObject = {value: string; text: string;};

type DataSourceItemType = string | DataSourceObject;

export interface IautoProps {
  prefixCls?: string;
  allowClear?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  dataSource: DataSourceItemType[];
  onSearch?: Function;
  onSelect?: Function;
  onFocus?: Function;
  onBlur?: Function;
  onChange?: Function;
  style?: object;
}

export interface IautoState {
  allowClearFlag: boolean;
  value: string;
  select: number;
  allowSelectBox: boolean;
  keyNum: number;
}
