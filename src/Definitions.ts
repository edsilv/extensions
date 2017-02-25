///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/> 

declare function escape(s: string): any;
declare function unescape(s: string): any;

interface Array<T>{
    clone(): Array<T>;
    insert(item: any, index: number): void;
    move(fromIndex: number, toIndex: number): void;
    remove(item: any): void;
    removeAt(index: number): void;
}

interface Math {
    radians(degrees: number): number;
    distanceBetween(x1: number, y1: number, x2: number, y2: number): number;
    lerp(start: number, stop: number, amount: number): number;
    mag(a: number, b: number, c: number): number;
    map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;
    median(values: number[]): number;
    randomBetween(low: number, high?: number): number;
    roundToDecimalPlace(num: number, dec: number): number;
    degrees(radians: number): number;
    normalise(num: number, min: number, max: number): number;
    TAU: number;
}

interface String {
    b64_to_utf8(str: string): string;
    isAlphanumeric(): boolean;
    ltrim(): string;
    rtrim(): string;
    toCssClass(): string;
    toFileName(): string;
    trim(): string;
    utf8_to_b64(str: string): string;
}

interface StringConstructor {
    format(template: string, ...args: any[]): string;
}