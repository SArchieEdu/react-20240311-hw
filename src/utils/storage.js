export const setStorageItem = (itemKey, itemValue) =>
  localStorage.setItem(itemKey, itemValue);

export const getStorageItem = (itemKey) => localStorage.getItem(itemKey);
