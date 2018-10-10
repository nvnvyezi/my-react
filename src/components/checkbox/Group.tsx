import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IgroupProps, IgroupState } from './interfance';
import Checkbox from './Checkbox'

class Group extends React.PureComponent<IgroupProps, IgroupState> {
  static propTypes = {
    defaultValue: PropTypes.array,
    onChange: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.array,
  }

  // 解决全选时value 改变 但是currentValue没变
  static getDerivedStateFromProps(nextProps: IgroupProps) {
    if ('value' in nextProps) {
      return {currentValue: nextProps.value || []};
    }
    return null;
  }

  constructor(props: IgroupProps) {
    super(props);
    this.state = {
      currentValue: props.value || props.defaultValue || [],
    }
  }

  render() {
    const { className, options, value, onChange, children, ...otherProps } = this.props;
    const { currentValue } = this.state;

    const checkboxs = options ? options.map((checkbox, index) => (
      <Checkbox
        {...otherProps}
        key={index}
        checked={currentValue.indexOf(checkbox) !== -1}
        onChange={this.handleOptionValues}
      >
        {checkbox}
      </Checkbox>
    ))
    :
    children;

    return (
      <div className={className}>
        {checkboxs}
      </div>
    );
  }

  // 筛选已经选中的checkbox
  handleOptionValues = (e: any) => {
    const { onChange } = this.props;
    const { currentValue } = this.state;
    const val = e.target.getAttribute('data-value');
    const optionIndex = currentValue.indexOf(val);
    let value = [...currentValue];
    if (optionIndex === -1) {
      value.push(val);
    } else {
      value.splice(optionIndex, 1);
    }
    this.setState({currentValue: value});
    onChange && onChange(value);
  }
}

export default Group;
