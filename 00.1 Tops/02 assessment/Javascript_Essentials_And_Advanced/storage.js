export const StorageUtils = {
  getItem(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
