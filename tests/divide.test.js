import divide from '../src/divide'
import { describe, test, expect } from '@jest/globals'

let smokeTest = false;
describe('divide', () => {
    //smoke test, ignore others if this fails
    test('should perform normal division with no remainder', () => {
      expect(divide(10,2)).toBe(5);
      expect(divide(6,3)).toBe(2);
      expect(divide(24288,2024)).toBe(12);
      smokeTest = true;
    });

    test('should perform division with remainder', () => {
      if (!smokeTest) return;
      expect(divide(10,4)).toBe(2.5);
    });

    test('divides a negative number by a positive number', () => {
        if (!smokeTest) return;
        expect(divide(-6, 3)).toBe(-2);
    });
    test('divides a positive number by a negative number', () => {
        if (!smokeTest) return;
        expect(divide(6, -2)).toBe(-3);
    });
    test('divides two negative numbers', () => {
        if (!smokeTest) return;
        expect(divide(-6, -3)).toBe(2);
    });
    test('division by 0', () => {
        if (!smokeTest) return;
        expect(divide(10,0)).toBe(Infinity);
    });
    test('returns NaN when dividing zero by zero', () => {
        if (!smokeTest) return;
        expect(divide(0, 0)).toBeNaN();
    });
    test('returns Nan for non numeric inputs', () => {
        if (!smokeTest) return;
        expect(divide('number', 'number2')).toBeNaN();
    });

    
})