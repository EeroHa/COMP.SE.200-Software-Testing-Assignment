import capitalize from '../src/capitalize.js'
import { describe, test, expect } from '@jest/globals'

describe('capitalize', () => {
  test('capitalizes a single word', () => {
    expect(capitalize('hello')).toBe('Hello')
  })

  test('capitalizes a word with all uppercase letters', () => {
    expect(capitalize('WORLD')).toBe('World')
  })

  test('capitalizes a word with mixed case letters', () => {
    expect(capitalize('jAvAsCrIpT')).toBe('Javascript')
  })

  test('capitalizes a word with all lowercase letters', () => {
    expect(capitalize('testing')).toBe('Testing')
  })

  test('returns an empty string when input is an empty string', () => {
    expect(capitalize('')).toBe('')
  })

  test('capitalizes a single character', () => {
    expect(capitalize('a')).toBe('A')
  })

  test('capitalizes a single uppercase character', () => {
    expect(capitalize('B')).toBe('B')
  })

  test('handles non-string input by converting to string', () => {
    expect(capitalize(123)).toBe('123')
    expect(capitalize(null)).toBe('Null')
    expect(capitalize(undefined)).toBe('Undefined')
    expect(capitalize(true)).toBe('True')
    expect(capitalize(false)).toBe('False')
  })

  test('capitalizes a string with leading and trailing spaces', () => {
    expect(capitalize('  hello  ')).toBe('  hello  ')
  })

  test('capitalizes a string with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello')
    expect(capitalize('@WORLD')).toBe('@world')
  })
})
