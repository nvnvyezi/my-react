import Button from '../Button/index';
import Grid from "../Grid/index";
import Layout from "../Layout/index";
import Radio from '../Radio/index'
import Autocomplete from '../AutoComplete/index'
import Checkbox from '../Checkbox/index'
import Input from '../Input/index'
import Select from '../Select/index'
import Slider from '../Slider/index'
import Switch from '../Switch/index'
import Tooltip from "../Tooltip/index";
import InputNumber from "../Input-number/index";

export default [
  {
    name: "开发指南",
    isTitle: true
  },{
    name: "安装",
    url: "/install",
    template: Button
  },{
    name: "快速上手",
    url: "/quickstart",
    template: Button
  },{
    name: "组件",
    isTitle: true
  },{
    name: "General",
    isCT: true
  },{
    name: "Button 按钮",
    url: "/button",
    template: Button
  },{
    name: "Layout",
    isCT: true
  },{
    name: "Grid 栅格",
    url: "/grid",
    template: Grid
  },{
    name: "Layout 布局",
    url: "/layout",
    template: Layout
  },{
    name: 'Form',
    isCT: true
  },{
    name: 'Radio 单选框',
    url: '/radio',
    template: Radio
  },{
    name: 'AutoComplete 自动完成',
    url: '/rautocomplete',
    template: Autocomplete
  },{
    name: 'Checkbox 多选框',
    url: '/checkbox',
    template: Checkbox
  },{
    name: 'Input 输入框',
    url: '/input',
    template: Input
  },{
    name: 'Select 选择器',
    url: '/select',
    template: Select
  },{
    name: 'Slider 滑动输入条',
    url: '/slider',
    template: Slider
  },{
    name: 'Switch 开关',
    url: '/switch',
    template: Switch
  },{
    name: 'Tooltip 文字提示',
    url: '/tooltip',
    template: Tooltip
  },{
    name: 'InputNumber 数字输入框',
    url: '/inputnumber',
    template: InputNumber
  }
]