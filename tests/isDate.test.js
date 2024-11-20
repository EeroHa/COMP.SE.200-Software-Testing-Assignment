import isDate from '../src/isDate'
import { describe, test, expect } from '@jest/globals'

describe('isDate', () => {
  test('should return true for Date objects', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date('2021-01-01'))).toBe(true)
  })

  test('should return false for non-Date objects', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
    expect(isDate(1617184800000)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
    expect(isDate(true)).toBe(false)
    expect(isDate(false)).toBe(false)
    expect(isDate(/regex/)).toBe(false)
  })

  test('should return false for objects that are not Date instances but have similar properties', () => {
    const fakeDate = {
      toString: () => '[object Date]',
      getTime: () => 1617184800000,
    }
    expect(isDate(fakeDate)).toBe(false)
  })
})
