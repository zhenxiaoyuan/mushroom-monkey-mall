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
    console.log("=================");

    ctx.body = homeListData;
});

// 搜索页 —— 搜索结果列表（含关键词）
const searchListData = require('./Search/list');
router.get('/api/search/:city/:page/:category/:keywords', (ctx, next) => {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;
    const paramsCategory = params.category;
    const paramsKeywords = params.keywords;

    console.log("City: " + paramsCity);
    console.log("Page: " + paramsPage);
    console.log("Category: " + paramsCategory);
    console.log("Keywords: " + paramsKeywords);
    console.log("=================");

    ctx.body = searchListData;
});

// 搜索页 —— 搜索结果列表（不含关键词）
router.get('/api/search/:city/:page/:category', (ctx, next) => {
    const params = ctx.params;
    const paramsCity = params.city;
    const paramsPage = params.page;
    const paramsCategory = params.category;

    console.log("City: " + paramsCity);
    console.log("Page: " + paramsPage);
    console.log("Category: " + paramsCategory);
    console.log("=================");

    ctx.body = searchListData;
});

// 详情页 —— 商户详情信息
const detailInfoData = require('./Detail/info');
router.get('/api/detail/info/:id', (ctx, next) => {
    const params = ctx.params;
    const paramsId = params.id;

    console.log("Id: " + paramsId);
    console.log("=================");

    ctx.body = detailInfoData;
});

// 详情页 —— 商户评价
const detailCommentsData = require('./Detail/comments');
router.get('/api/detail/comments/:id/:page', (ctx, next) => {
    const params = ctx.params;
    const paramsId = params.id;
    const paramsPage = params.page;

    console.log("Id: " + paramsId);
    console.log("Page: " + paramsPage);
    console.log("=================");

    ctx.body = detailCommentsData;
});

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);