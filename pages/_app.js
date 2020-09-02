// 首先说一下为什么要自定义App，这里的App其实就是我们平时写react时候的根组件。 1）通过重写_app.js文件，我们可以对App组件进行重构，在App组件中加入一些项目中不变的内容，比如页面的布局；

// 2）在App中保持公用的状态，这里的公用状态也可以是一些全局的css，比如我们之前搭建环境的文章中加入的antd.css；

// 3）以及给页面传递自定义的数据，

// 4）使用componentDidCatch自定义处理错误;

// 5）注入额外数据到页面里 (如 GraphQL 查询)
import App from "next/app";

import "antd/dist/antd.css";
import "../static/style/pages/comm.css";

export default App;
