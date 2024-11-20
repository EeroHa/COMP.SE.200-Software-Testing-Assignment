import defaultTo from '../src/defaultTo'
import { describe, test, expect } from '@jest/globals'

describe('defaultTo', () => {
  test('returns the value if it is not null or undefined', () => {
    expect(defaultTo(1, 10)).toBe(1)
    expect(defaultTo('hello', 'default')).toBe('hello')
    expect(defaultTo(true, false)).toBe(true)
  })

  test('returns the default value if the value is undefined', () => {
    expect(defaultTo(undefined, 'default')).toBe('default')
  })

  test('returns the default value if the value is null', () => {
    expect(defaultTo(null, 'default')).toBe('default')
  })

  test('returns the value if it is NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(NaN)
  })
})
