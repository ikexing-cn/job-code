import { expect, test } from 'vitest'
import findStringMaxChar from '../src/01-find-string-max-char'

test('Find max char for string', () => {
  const output = findStringMaxChar('findStringMaxChar')

  expect(output).eq('a')
})
