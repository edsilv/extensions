if (!Math.clamp) {
    Math.clamp = function(value: number, min: number, max: number): number{
        return Math.min(Math.max(value, min), max);
    }
}

if (!Math.radians) {
    Math.radians = function(degrees: number): number {
        return Math.TAU * (degrees / 360);
    }
}

Math.distanceBetween = function(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(((x2 - x1) * 2) + ((y2 - y1) * 2));
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

Math.median = function(values: number[]) {

    values.sort( function(a,b) {return a - b;} );

    var half = Math.floor(values.length/2);

    if(values.length % 2){
        return values[half];
    } else {
        return (values[half-1] + values[half]) / 2.0;
    }
};

Math.normalise = function(num: number, min: number, max: number): number {
    return (num - min) / (max - min);
};

if (!Math.degrees) {
    Math.degrees = function(radians: number): number {
        return (radians * 360) / Math.TAU;
    }
}

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

Math.TAU = Math.PI * 2;