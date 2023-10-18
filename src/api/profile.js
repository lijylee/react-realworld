import request from "@/utils/request";

export const getProfile = (username) => {
  return request({
    method: "get",
    url: `/profiles/${username}`,
  });
};

export function followUser(username) {
  return request.post(`/profiles/${username}/follow`);
}

export function unFollowUser(username) {
  return request.delete(`/profiles/${username}/follow`);
}
