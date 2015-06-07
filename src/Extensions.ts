
//######################################################
// Array
//######################################################

if (!Array.prototype.clone) {
    Array.prototype.clone = function (): any[] {
        return this.slice(0);
    };
}

if (!Array.prototype.contains) {
    Array.prototype.contains = function (val: any): boolean{
        return this.indexOf(val) !== -1;
    };
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement: any, fromIndex?: number): number {
        var i = (fromIndex || 0);
        var j = this.length;

        for (i; i < j; i++) {
            if (this[i] === searchElement) {
                return i;
            }
        }
        return -1;
    };
}

Array.prototype.indexOfTest = function (test: (item: any) => boolean, fromIndex?: number): number {
    var i = (fromIndex || 0);
    var j = this.length;

    for (i; i < j; i++) {
        if (test(this[i])) return i;
    }

    return -1;
};

Array.prototype.insert = function(item: any, index: number){
    this.splice(index, 0, item);
};

if (!Array.prototype.last) {
    Array.prototype.last = function (): any {
        return this[this.length - 1];
    };
}

Array.prototype.move = function (fromIndex, toIndex): void {
    this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
};

Array.prototype.remove = function(item: any) {
    var index = this.indexOf(item);
    if (index > -1) {
        this.splice(index, 1);
    }
};

Array.prototype.removeAt = function(index: number) {
    this.splice(index, 1);
};


//######################################################
// Math
//######################################################

Math.clamp = function(value: number, min: number, max: number){
    return Math.min(Math.max(value, min), max);
};

Math.constrain = function(value: number, low: number, high: number): number{
    return Math.clamp(value, low, high);
};

Math.degreesToRadians = function(degrees: number): number {
    return Math.TAU * (degrees / 360);
};

Math.distanceBetween = function(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.sq(x2 - x1) + Math.sq(y2 - y1));
};

Math.lerp = function(start: number, stop: number, amount: number): number {
    return start + (stop-start) * amount;
};

Math.mag = function(a: number, b: number, c: number): number {
    return Math.sqrt(a*a + b*b + c*c);
};

Math.map = function(value: number,
                    start1: number, stop1: number,
                    start2: number, stop2: number): number {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
};

Math.normalise = function(num: number, min: number, max: number): number {
    return (num - min) / (max - min);
};

Math.radiansToDegrees = function(radians: number): number {
    return (radians * 360) / Math.TAU;
};

/**
 * Get a random number between two numbers.
 * If 'high' isn't passed, get a number from 0 to 'low'.
 * @param {Number} low The low number.
 * @param {Number} [high] The high number.
 */
Math.randomBetween = function(low: number, high?: number): number {
    if (!high){
        high = low;
        low = 0;
    }

    if (low >= high) return low;

    return low + (high-low) * Math.random();
};

Math.roundToDecimalPlace = function(num: number, dec: number): number {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
};

Math.sq = function(n: number): number {
    return n*n;
};

Math.TAU = Math.PI * 2;


//######################################################
// Number
//######################################################

Number.prototype.isInt = function(){ return this % 1 === 0; };


//######################################################
// String
//######################################################

String.prototype.b64_to_utf8 = function(): string {
    return decodeURIComponent(escape(window.atob(this)));
};

String.prototype.contains = function(str): boolean {
    return this.indexOf(str) !== -1;
};

String.prototype.endsWith = function(str): boolean {
    return this.indexOf(str, this.length - str.length) !== -1;
};

String.format = function(): string {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }

    return s;
};

String.prototype.ltrim = function(): string {
    return this.replace(/^\s+/, '');
};

String.prototype.rtrim = function(): string {
    return this.replace(/\s+$/, '');
};

String.prototype.startsWith = function(str): boolean {
    return this.indexOf(str) == 0;
};

String.prototype.toCssClass = function(): string {
    return this.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
};

String.prototype.toFileName = function(): string {
    return this.replace(/[^a-z0-9]/gi, '_').toLowerCase();
};

String.prototype.trim = function(): string {
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};

String.prototype.utf8_to_b64 = function(): string {
    return window.btoa(unescape(encodeURIComponent(this)));
};