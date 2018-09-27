import Button from '../Button/index';
import Grid from "../Grid/index";
import Layout from "../Layout/index";
import Radio from '../Radio/index'
import Autocomplete from '../AutoComplete/index'
import Cascader from '../Cascader/index'
import Input from '../Input/index'
import Select from '../Select/index'

export default [
  {
    "name": "开发指南",
    "isTitle": true
  },{
    "name": "安装",
    "url": "/install",
    template: Button
  },{
    "name": "快速上手",
    "url": "/quickstart",
    template: Button
  },{
    "name": "组件",
    "isTitle": true
  },{
    "name": "General",
    "isCT": true
  },{
    "name": "Button 按钮",
    "url": "/button",
    template: Button
  },{
    "name": "Layout",
    "isCT": true
  },{
    "name": "Grid 栅格",
    "url": "/grid",
    template: Grid
  },{
    "name": "Layout 布局",
    "url": "/layout",
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
    name: 'Cascader 级联选择',
    url: '/cascader',
    template: Cascader
  },{
    name: 'Input 输入框',
    url: '/input',
    template: Input
  },{
    name: 'Select 选择器',
    url: '/select',
    template: Select
  }
]