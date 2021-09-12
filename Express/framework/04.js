// 引入 express 框架
const express = require('express');
// 创建网站服务器
const app = express();

// 网站公告
// app.use((req, res, next) => {
//     res.send('当前网站正在维护...');
// })

app.use('/admin', (req, res, next) => {
    // 用户默认没有登录
    // let isLogin = false;
    let isLogin = true;

    // 如果用户登录
    if (isLogin) {
        // 请求继续向下执行
        next();
    } else {
        // 如果用户没有登录 直接对客户端做出响应
        res.send('您还没有登录，不能访问当前页面');
    }
})

app.get('/admin', (req, res, next) => {
    res.send('您已经登录，可以访问当前页面');
})

// 如果访问没有存在的页面
app.use((req, res, next) => {
    // 为客户端响应 404 状态码 以及提示信息
    res.status(404)
        .send('当前访问的页面不存在');
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');