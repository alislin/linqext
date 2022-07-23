/*
 * @Author: Lin Ya
 * @Date: 2022-07-21 21:10:04
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-07-22 10:19:16
 * @Description: linq Array 扩展定义
 */
import Enumerable from "linq"

declare global {
    interface Array<T> {
        linq(): Enumerable.IEnumerable<T>;
    }
}

export { }