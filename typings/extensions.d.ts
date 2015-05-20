declare function escape(s: string): any;
declare function unescape(s: string): any;

interface String {
    b64_to_utf8(str: string): string;
    contains(str: string): boolean;
    endsWith(text: string): boolean;
    ltrim(): string;
    rtrim(): string;
    startsWith(text: string): boolean;
    toCssClass(): string;
    toFileName(): string;
    trim(): string;
    utf8_to_b64(str: string): string;
}

interface StringConstructor {
    format(template: string, ...args: any[]): string;
}

interface Array<T>{
    clone(): Array<T>;
    contains(val: any): boolean;
    indexOf(searchElement: any, fromIndex?: number): number;
    indexOfTest(test: (item: any) => boolean, fromIndex?: number): number;
    last(): any;
    move(fromIndex: number, toIndex: number): void;
}