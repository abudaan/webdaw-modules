export declare const round: (value: number, decimals: number) => number;
export declare const floor: (value: number, decimals: number) => number;
export declare const getNiceTime: (millis: number) => {
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    timeAsString: string;
    timeAsArray: [number, number, number, number];
    timeAsArrayString: [string, string, string, string];
};
