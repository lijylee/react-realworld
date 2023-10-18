const saveUserToStorage = (user) => {
  window.sessionStorage.setItem("user", JSON.stringify(user));
};

const getUserFromStorage = () => {
  return JSON.parse(window.sessionStorage.getItem("user"));
};

const removeUserFromStorage = () => {
  return window.sessionStorage.removeItem("user");
};

export { saveUserToStorage, getUserFromStorage, removeUserFromStorage };
