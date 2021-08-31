const localStorageHelper = {
  getItem: (key: string) => {
    const data: string | null = localStorage.getItem(key);
    return data && JSON.parse(data);
  },
  setItem: <T>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};
export default localStorageHelper;
