/*
 * @Author: Lin Ya
 * @Date: 2022-07-20 15:17:08
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-07-21 10:43:48
 * @FilePath: \SchoolManageClient\src\utils\Linq.ts
 * @Description: linq.js 包装，简化初始化对象，npm i linq
 */
import Enumerable from "linq";

class Linq {
    /**
     * 获取 IEnumerable 列表用于 linq 操作
     * @param list 列表对象
     * @returns IEnumerable 列表
     */
    public get<T>(list: T[]): Enumerable.IEnumerable<T> {
        type t = Enumerable.IEnumerable<T>;
        let result: t = Enumerable.from(list);
        return result;
    }
}

export default new Linq();