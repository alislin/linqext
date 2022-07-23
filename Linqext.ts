/*
 * @Author: Lin Ya
 * @Date: 2022-07-21 21:10:04
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-07-22 10:17:00
 * @Description: linq Array 扩展实现
 * @Comment: 在调用的文件加入：import "../utils/Linqext"
 */
import Enumerable from "linq";
export { }
(function () {
    if (!Array.prototype.linq) {
        Array.prototype.linq = function<T> (): Enumerable.IEnumerable<T> {
            type t = Enumerable.IEnumerable<T>;
            let result: t = Enumerable.from(this);
            return result;
        }
    }
})();


