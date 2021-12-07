/**
 * 获取数组对象中的属性， lodash._map
 * @param keys 要获取的属性key
 * @param hashArr [{}]
 * @return []
 */
export const lodashMap = (hashArr: Array<object>, keys: string): any[] => hashArr.map(item => item[keys])