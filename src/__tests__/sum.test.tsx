import '@testing-library/jest-dom';

function sum(a: number, b: number): number {
    return a + b;
}

test("sum test", () =>{
    expect(sum(2, 3)).toBe(5);
})