import request from "@/utils/request.js";

export function getComments(slug) {
  return request.get(`/articles/${slug}/comments`);
}

export function createComment(slug, commentBody) {
  return request.post(`/articles/${slug}/comments`, {
    comment: {
      body: commentBody,
    },
  });
}

export function deleteComment(slug, id) {
  return request.delete(`/articles/${slug}/comments/${id}`);
}
