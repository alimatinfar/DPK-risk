import {get, set, del} from "idb-keyval";

export const indexedDBStorage = {
  getItem: async (name: string) => {
    return await get(name);
  },

  setItem: async (name: string, value: string) => {
    await set(name, value);
  },

  removeItem: async (name: string) => {
    await del(name);
  },
};
