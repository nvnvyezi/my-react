import * as React from 'react';
import * as PropTypes from 'prop-types';
const classNames = require('classnames');
// import Radio from "./Radio";

interface IgroupProps {
  prefixCls: string;
  className?: string;
  defaultValue?: number;
  disabled?: boolean;
  name?: string;
  options?: Array<any>;
  children?: React.ReactNode;
  onChange?: React.MouseEventHandler<HTMLAnchorElement>;
  value?: any;
}

class Group extends React.PureComponent<IgroupProps> {
  public static defaultProps = {
    prefixCls: 'nvnv-radio-group',
  }
  public static propTypes = {
    prefixCls: PropTypes.string,
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    children: PropTypes.node,
  }
  render() {
    const { prefixCls, className, defaultValue, disabled, name, options, onChange, children, ...others } = this.props;
    const classes = classNames(className, {});

    const radios = React.Children.map(children, (radio: React.ReactElement<any>, index) => {
      if (!radio) {
        return null;
      }
      return React.cloneElement(radio, {
        name,
        defaultChecked: index == defaultValue,
        disabled: disabled ? true : false,
        onChange: typeof onChange == 'function' ? onChange : null,
        value: radio.props.children,
      })
    })

    if (options && options.length > 0) {
      return <div>sds</div>
    }

    return (
      <div className={classes} {...others}>
        {radios}
      </div>
    );
  }
}

export default Group;
