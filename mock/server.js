// mock - server.js

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 首页 —— 广告（超值特惠）
const homeAdData = require('./Home/ad');
router.get('/api/home/ad', (ctx, next) => {
    ctx.body = homeAdData;
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./Home/list');
router.get('/api/home/list/:city/:page', (ctx, next) => {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log("City: " + paramsCity);
    console.log("Page: " + paramsPage);

    ctx.body = homeListData;
});

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);