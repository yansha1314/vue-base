# vue-test

##目录说明
- build  项目管理配置
- config 基础信息配置
- src    主要功能目录
- - assets      公共素材库
- - components  组件目录
- - css         样式文件
- - lib         公共功能库
- - services    服务请求
- data   临时目录--测试数据
- .babelrc	Babel的配置文件，用来设置转码规则和插件
- .editorconfig	设置编码规则，JavaScript文件的行尾和缩进风格
- .eslintignore	ESLint初始化配置文件
- .gitignore	忽略文件或目录
- README.md
- package.json 项目的配置信息及所需模块

`vue-test` 使用了`vue`、`vuex`、`koa`等框架和技术。
**使用了许多es6新特性,请使用6.0以上版本的node!**
基于restful，nodejs的话采用koa框架(koa 1)。

### npm command

```
# install dependencies
npm install

# 开发,跑在本地8080端口
npm run dev-client

# 打包
npm run build-client


