# init-webpack

**目前实现 ts, eslint, prettier, styled-jsx, less, pre-commit**
webpack 基本配置，可以基于此进行拓展

##### 使用

```
git clone https://github.com/nvnvyezi/init-webpack
npm install
npm run start
```

##### 构建

```
npm run build
//单独测试dll
npm run dll
```

#### 基本配置

- `config/`: webpack 配置文件
- `config/config.js`: 基本的配置信息
- `config/resolve.js/alias`: 别名配置(解决 eslint 报错，需要在 tsconfig.json/paths 里面再次标名路径)
- `config/webpack.dev.js/devServer/proxy`: 配置代理
- `dist/`: 打包文件夹
- `.eslintrc.js`: eslint 配置
- `.gitignore`: git 过滤文件
- `tsconfig.json`: ts 配置
- `package.json/eslintIgnore`: eslint 过滤文件
- `vpackage.json/prettier`: prettier 配置

#### 语法检测

使用 prettier+eslint 进行语法检测并修正

**查看更多详细信息**
https://github.com/nvnvyezi/Daily-notes/blob/master/webpack/%E6%90%AD%E5%BB%BA.md
