import get from '../src/get'
import { describe, test, expect } from '@jest/globals'

describe('get', () => {
    test('should return the correct value from a simple object', () => {
        const object = { a: 1 };
        expect(get(object, 'a')).toBe(1);
    })
    
    test('should return the correct value from a nested object', () => {
        const object = { a: {b: {c : 5}}};
        expect(get(object, 'a.b.c')).toBe(5);
    })
    test('should return the correct value from a nested object using an array path', () => {
        const object = { a: {b: {c : 5}}};
        expect(get(object, ['a','b','c'])).toBe(5);
    })
    test('should return the default value if wanted value is not found', () => {
        const object = { a: 1 };
        expect(get(object, 'c', 'default')).toBe('default');
    })
    test('should return the default value if provided object does not exist', () => {
      expect(get(undefined, 'a', 'default')).toBe('default');
      expect(get(null, 'a', 'default')).toBe('default');
    })
    test('should return the default value if path is empty', () => {
        const object = { a: 1 };
        expect(get(object, '', 'default')).toBe('default');
        expect(get(object, [], 'default')).toBe('default');
    })
    test('should return the default value if path is not a string or an array', () => {
        const object = { a: 1 };
        expect(get(object, 1234, 'default')).toBe('default');
    })
    test('behavior with dumb key names and values', () => {
        const object = { 'a[0].b': { c: 1 } };
        const object2 = {'undefined': 'null'};
        expect(get(object, 'a[0].b.c', 'default')).toBe('default');
        expect(get(object, ['a[0].b','c'], 'default')).toBe(1);
        expect(get(object2, 'undefined')).toBe('null');

    })

    
    
})