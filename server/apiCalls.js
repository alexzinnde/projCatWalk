const axios = require('axios');

const getProductInfo = (productId) => axios.get(`/products/${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductStyles = (productId) => axios.get(`/products/${productId}/styles`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductReviewMeta = (productId) => axios.get(`/reviews/meta?product_id=${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductReviews = (productId) => axios.get(`/reviews?product_id=${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductQA = (productId) => axios.get(`/qa/questions/?product_id=${productId}&page=1&count=10`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const submitQuestion = (body) => axios({
  method: 'post',
  baseURL: process.env.API_URL,
  url: '/qa/questions',
  headers: { Authorization: process.env.GITHUB_TOKEN },
  data: {
    body: body.body,
    name: body.name,
    email: body.email,
    product_id: body.product_id,
  },
});

const qHelpful = (id) => axios({
  method: 'put',
  baseURL: process.env.API_URL,
  url: `/qa/questions/${id}/helpful`,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const submitAHelpful = (id) => axios({
  method: 'put',
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
  url: `/qa/answers/${id}/helpful`,
});

const reportQuestion = (id) => axios({
  method: 'put',
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
  url: `/qa/questions/${id}/report`,
});

const reportAnswer = (id) => axios({
  method: 'put',
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
  url: `/qa/answers/${id}/report`,
});
const addAnswer = (body) => axios({

  method: 'post',
  baseURL: process.env.API_URL,
  url: `/qa/questions/${body.question_id}/answers`,
  headers: { Authorization: process.env.GITHUB_TOKEN },
  data: {
    body: body.body,
    name: body.name,
    email: body.email,
    photos: body.photos.map((pic) => (pic)),
  },
});

module.exports.addAnswer = addAnswer;
module.exports.reportAnswer = reportAnswer;
module.exports.reportQuestion = reportQuestion;
module.exports.submitAHelpful = submitAHelpful;
module.exports.qHelpful = qHelpful;
module.exports.submitQuestion = submitQuestion;
module.exports.getProductQA = getProductQA;
const addToCart = (skuId) => axios({
  method: 'post',
  baseURL: process.env.API_URL,
  url: '/cart',
  headers: { Authorization: process.env.GITHUB_TOKEN },
  data: {
    sku_id: skuId,
  },
});

const getRelatedProductId = (id) => axios.get(`/products/${id}/related`,
  {
    baseURL: process.env.API_URL,
    headers: { Authorization: process.env.GITHUB_TOKEN },
  });

module.exports.getRelatedProductId = getRelatedProductId;
module.exports.getProductInfo = getProductInfo;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductReviewMeta = getProductReviewMeta;
module.exports.getProductReviews = getProductReviews;
module.exports.addToCart = addToCart;
