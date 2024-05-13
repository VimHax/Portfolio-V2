export function assert(x: boolean): asserts x {
	if (!x) throw new Error('Assertion failed.');
}
