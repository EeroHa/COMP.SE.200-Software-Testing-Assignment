import isEmpty from '../src/isEmpty.js'
import { describe, test, expect } from '@jest/globals'

describe('isEmpty', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  test('should return true for boolean values', () => {
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
  })

  test('should return true for numbers', () => {
    expect(isEmpty(0)).toBe(true)
    expect(isEmpty(1)).toBe(true)
    expect(isEmpty(-1)).toBe(true)
  })

  test('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  test('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true)
  })

  test('should return false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false)
  })

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true)
  })

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  test('should return true for empty maps', () => {
    expect(isEmpty(new Map())).toBe(true)
  })

  test('should return false for non-empty maps', () => {
    const map = new Map()
    map.set('key', 'value')
    expect(isEmpty(map)).toBe(false)
  })

  test('should return true for empty sets', () => {
    expect(isEmpty(new Set())).toBe(true)
  })

  test('should return false for non-empty sets', () => {
    const set = new Set()
    set.add(1)
    expect(isEmpty(set)).toBe(false)
  })

  test('should return true for empty buffers', () => {
    expect(isEmpty(Buffer.alloc(0))).toBe(true)
  })

  test('should return false for non-empty buffers', () => {
    expect(isEmpty(Buffer.alloc(1))).toBe(false)
  })

  test('should return true for empty arguments object', () => {
    function testFunc() {
      expect(isEmpty(arguments)).toBe(true)
    }
    testFunc()
  })

  test('should return false for non-empty arguments object', () => {
    function testFunc() {
      expect(isEmpty(arguments)).toBe(false)
    }
    testFunc(1, 2, 3)
  })

  test('should return true for empty prototype objects', () => {
    const obj = Object.prototype
    expect(isEmpty(obj)).toBe(true)
  })

  test('should return false for non-empty prototype objects', () => {
    const obj = Object.prototype
    obj.b = 2
    expect(isEmpty(obj)).toBe(false)
  })

  test('should return true for objects with only inherited properties', () => {
    function Parent() {
      this.a = 1
    }
    Parent.prototype.b = 2
    const obj = new Parent()
    delete obj.a
    expect(isEmpty(obj)).toBe(true)
  })
})
