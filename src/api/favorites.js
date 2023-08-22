import request from '@/utils/request.js';

export function postFavorites(slug) {
  return request.post(`/articles/${slug}/favorite`);
}

export function deleteFavorites(slug) {
  return request.delete(`/articles/${slug}/favorite`);
}