Array.prototype.clone = function(): any[] {
    return this.slice(0);
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function (val: any): boolean{
        return this.indexOf(val) !== -1;
    };
}

Array.prototype.insert = function(item: any, index: number): void {
    this.splice(index, 0, item);
}

Array.prototype.move = function(fromIndex, toIndex): void {
    this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
}

Array.prototype.remove = function(item: any): void {
    var index = this.indexOf(item);
    if (index > -1) {
        this.splice(index, 1);
    }
}

Array.prototype.removeAt = function(index: number): void {
    this.splice(index, 1);
}