String.prototype.b64_to_utf8 = function(): string {
    return decodeURIComponent(escape(window.atob(this)));
}

String.format = function(): string {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }

    return s;
}

String.prototype.isAlphanumeric = function(): boolean {
    return /^[a-zA-Z0-9]*$/.test(this);
}

String.prototype.ltrim = function(): string {
    return this.replace(/^\s+/, '');
}

String.prototype.rtrim = function(): string {
    return this.replace(/\s+$/, '');
}

String.prototype.toCssClass = function(): string {
    return this.replace(/[^a-z0-9]/g, function(s: string) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
}

String.prototype.toFileName = function(): string {
    return this.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

String.prototype.utf8_to_b64 = function(): string {
    return window.btoa(unescape(encodeURIComponent(this)));
}