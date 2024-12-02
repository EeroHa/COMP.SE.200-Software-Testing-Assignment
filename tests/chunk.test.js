import chunk from '../src/chunk'
import { describe, test, expect } from '@jest/globals'

describe('chunk', () => {

    test('chunks an array correctly', () => {
      const array = ['a', 'b', 'c' ,'d', 'e', 'f', 'g', 'h', 'i', 'j'];
      
        expect(chunk(array, 2)).toBe([['a', 'b'], ['c' ,'d'], ['e', 'f'], ['g', 'h'], ['i', 'j']]);
        expect(chunk(array, 3)).toBe([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j']]);
        
    })

    test('no size given', () => {
        const array = ['a', 'b', 'c' ,'d'];
        expect(chunk(array)).toEqual([['a'], ['b'], ['c'] ,['d']]);
    })
    test('negative array size', () => {
        const array = ['a', 'b', 'c' ,'d'];
        expect(chunk(array, -1)).toEqual([]);
    })
    test('non numeral array size', () => {
        const array = ['a', 'b', 'c' ,'d'];
        expect(chunk(array, 'number')).toEqual([]);
    })
    test('missing array', ()=> {
        expect(chunk(null)).toEqual([]);
    })

    test('empty array', () => {
        expect(chunk([], 2)).toEqual([]);
    })
    test('chunk lenght larger than array', () => {
        const array = ['a', 'b', 'c' ,'d'];
        expect(chunk(array, 5)).toEqual([['a', 'b', 'c' ,'d']]);
    })

  })