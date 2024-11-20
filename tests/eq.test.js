import eq from '../src/eq'
import { describe, test, expect } from '@jest/globals'

describe('eq', () => {
  test('should return true for identical objects', () => {
    const object = { a: 1 }
    expect(eq(object, object)).toBe(true)
  })

  test('should return false for different objects with same properties', () => {
    const object = { a: 1 }
    const other = { a: 1 }
    expect(eq(object, other)).toBe(false)
  })

  test('should return true for identical strings', () => {
    expect(eq('a', 'a')).toBe(true)
  })

  test('should return false for string and object with same value', () => {
    expect(eq('a', Object('a'))).toBe(false)
  })

  test('should return true for NaN compared to NaN', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })

  test('should return true for identical numbers', () => {
    expect(eq(1, 1)).toBe(true)
  })

  test('should return false for different numbers', () => {
    expect(eq(1, 2)).toBe(false)
  })

  test('should return true for identical booleans', () => {
    expect(eq(true, true)).toBe(true)
  })

  test('should return false for different booleans', () => {
    expect(eq(true, false)).toBe(false)
  })

  test('should return true for null compared to null', () => {
    expect(eq(null, null)).toBe(true)
  })

  test('should return true for undefined compared to undefined', () => {
    expect(eq(undefined, undefined)).toBe(true)
  })

  test('should return false for null compared to undefined', () => {
    expect(eq(null, undefined)).toBe(false)
  })
})
