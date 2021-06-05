const PREFIX = 'bet';
class LocalStorageService {
    get(key) {
        try {
            const value = localStorage.getItem(`${PREFIX}-${key}`);
            return value ? JSON.parse(value) : null;
        }
        catch (e) {
            throw new Error(`Unable to get value from localStorage with key ${key}`);
        }
    }
    set(key, value) {
        if (!value) {
            return;
        }
        const parsedValue = JSON.stringify(value);
        localStorage.setItem(`${PREFIX}-${key}`, parsedValue);
    }
    remove(key) {
        localStorage.removeItem(`${PREFIX}-${key}`);
    }
}
export const localStorageService = new LocalStorageService();
// const get = (key: string): unknown | null => {
//   try {
//     const value = localStorage.getItem(`${PREFIX}-${key}`);
//     return value ? JSON.parse(value) : null;
//   } catch (e) {
//     throw new Error(`Unable to get value from localStorage with key ${key}`);
//   }
// };
//
// const set = (key: string, value: unknown): void => {
//   const parsedValue = JSON.stringify(value);
//   localStorage.setItem(`${PREFIX}-${key}`, parsedValue);
// };
//
// const remove = (key: string): void => {
//   localStorage.removeItem(`${PREFIX}-${key}`);
// };
//
// export const localStorageService = {
//   get,
//   set,
//   remove,
// };
