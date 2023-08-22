import request from '@/utils/request.js';

export const getArticles = params => {
  return request.get('/articles', {
    params
  });
};

export function getFeedArticles(params) {
  return request.get('/articles/feed', {
    params
  });
}

export function getArticle(slug) {
  return request.get(`/articles/${slug}`);
}

export function createArticle(article) {
  return request.post(`/articles`, {
    article
  });
}

export function deleteArticle(slug) {
  return request.delete(`/articles/${slug}`);
}

export function updateArticle(slug, article) {
  return request.put(`/articles/${slug}`, {
    article
  });
}