import * as React from 'react';
import * as PropTypes from 'prop-types';
import Radio from "./Radio";
import { IgroupProps, IotherProps } from "./interfance";

class Group extends React.PureComponent<IgroupProps> {
  public static defaultProps = {
    prefixCls: 'nvnv-radio-group',
    buttonStyle: 'outline',
  }
  public static propTypes = {
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    children: PropTypes.node,
    value: PropTypes.any,
  }

  render() {
    const { prefixCls, className, defaultValue, disabled, name, options, onChange, children, value, buttonStyle, ...others } = this.props;
    const otherProps: IotherProps = {
      name,
      outDisabled: disabled,
      buttonStyle,
      onChange: typeof onChange == 'function' ? onChange : null,
    }
    const radios = React.Children.map(children, (radio: React.ReactElement<any>, index) => {
      if (!radio) {
        return null;
      }
      // 再有value的情况下判断选中的是哪个
      const radioValue = radio.props.value;
      const currentValue = value || defaultValue;
      let flag = radioValue == currentValue || !!radio.props.checked;
      if (value) {
        otherProps.isChecked = flag;
      }
      return React.cloneElement(radio, {
        ...otherProps,
      })
    })

    if (options && options.length > 0) {
      return options.map((item, index) => {
        return <Radio { ...otherProps } value={item} key={index}>{item}</Radio>
      })
    }

    return (
      <div className={className} {...others}>
        {radios}
      </div>
    );
  }
}

export default Group;
