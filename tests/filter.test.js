import filter from '../src/filter'
import { describe, test, expect } from '@jest/globals'

describe('filter', () => {
  test('filters even numbers', () => {
    expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4])
  })

  test('filters objects based on a property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ]
    expect(filter(users, (user) => user.active)).toEqual([{ user: 'barney', active: true }])
  })

  test('handles empty arrays', () => {
    expect(filter([], (n) => n > 0)).toEqual([])
  })

  test('handles null or undefined input', () => {
    expect(filter(null, (n) => n > 0)).toEqual([])
    expect(filter(undefined, (n) => n > 0)).toEqual([])
  })

  test('always true predicate', () => {
    expect(filter([1, 2, 3], () => true)).toEqual([1, 2, 3])
  })

  test('always false predicate', () => {
    expect(filter([1, 2, 3], () => false)).toEqual([])
  })

  test('handles mixed data types', () => {
    expect(filter([1, '2', null, undefined, true], (value) => typeof value === 'number')).toEqual([
      1,
    ])
  })

  test('uses index in predicate', () => {
    expect(filter(['a', 'b', 'c', 'd'], (value, index) => index % 2 === 0)).toEqual(['a', 'c'])
  })

  test('passes the original array to the predicate', () => {
    expect(filter([1, 2, 3, 4], (value, index, array) => array[index] === value)).toEqual([
      1, 2, 3, 4,
    ])
  })
})
