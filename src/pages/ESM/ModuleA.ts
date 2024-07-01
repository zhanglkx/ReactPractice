// moduleA.js
let value = 42;
export { value };
export function setValue(newValue: number) {
    value = newValue;
}
