const sum = (a: number, b: number) => a + b;

test('sample test', () => {
    expect(sum(1, 2)).toBe(3);
});

export {};
