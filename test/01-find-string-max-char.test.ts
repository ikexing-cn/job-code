import { expect, test } from 'vitest'
import { findStringMaxChar } from '@/index'

test('Find max char for string', () => {
  const output = findStringMaxChar('findStringMaxChar')

  expect(output).eq('a')
})
