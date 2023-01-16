const TOKEN_KEY = '';
/**
 * 保存token
 * @param {*} token
 * @returns
 */
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

/**
 * 获取token
 * @returns token
 */
export const getToken = (): any => localStorage.getItem(TOKEN_KEY);

/**
 * 判断当前是否存在Token
 * @returns true/false
 */
export const hasToken = () => localStorage.getItem(TOKEN_KEY) === null;
