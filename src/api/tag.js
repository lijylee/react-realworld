import request from '@/utils/request.js';

export function getTags() {
  return request.get('/tags');
}