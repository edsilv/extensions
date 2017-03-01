//https://github.com/lodash/lodash/blob/master/toPlainObject.js

Object.prototype.toPlainObject = function(): any {
    const result: any = {};
    for (const key in this) {
        result[key] = this[key]
    }
    return result;
}