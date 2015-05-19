
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

if (!Array.prototype.last) {
    Array.prototype.last = function (): any {
        return this[this.length - 1];
    };
}

Array.prototype.move = function (fromIndex, toIndex): void {
    this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
};