//data
import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;
beforeEach(() => {
    a = 2;
    b = 3;
    c = 4;

});

test('sum should be correct', () => {


    //action
    const result1 = sum(a, b);
    const result2 = sum(a, c);

    //expect result1
    expect(result1).toBe(5);
    expect(result2).toBe(6);

})

test('mult should be correct', () => {

    // action
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    //expect result1

    expect(result1).toBe(6);
    expect(result2).toBe(12);
})
