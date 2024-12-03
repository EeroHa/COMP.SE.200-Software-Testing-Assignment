import words from '../src/words'
import { describe, test, expect } from '@jest/globals'

describe('words', () => {
  test('turns a list of words into an array', () => {
    const text = 'abcd, efgh, ijkl'
    expect(words(text)).toStrictEqual(['abcd', 'efgh', 'ijkl'])
  })
  test('turns a sentence into an array', () => {
    const text = 'This sentence consists of words'
    expect(words(text)).toStrictEqual(['This', 'sentence', 'consists', 'of', 'words'])
  })
  test('handles empty string', () => {
    expect(words('')).toEqual([])
  })
  test('handles custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
  })
  test('handles strings with multiple spaces or newlines', () => {
    expect(words('  hello    world  ')).toEqual(['hello', 'world'])
    expect(words('hello\nworld\tthis is great')).toEqual(['hello', 'world', 'this', 'is', 'great'])
  })
  test('handles patterns matching numbers or punctuation', () => {
    expect(words('123 hello 456 world', /\d+/g)).toEqual(['123', '456'])
    expect(words('hello, world...', /[!.,]+/g)).toEqual([',', '...'])
  })
  test('unicode input', () => {
    expect(words('你好 世界')).toEqual(['你好', '世界'])
    expect(words('hello  世界')).toEqual(['hello', '世界'])
  })
  test('handles null or undefined input', () => {
    expect(words(null)).toEqual([])
    expect(words(undefined)).toEqual([])
  })
  test('handles null or undefined pattern', () => {
    expect(words('hello world', undefined)).toEqual(['hello', 'world'])
    expect(words('hello world', null)).toEqual([])
  })
})
