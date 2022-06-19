import { describe, expect, it } from 'vitest'
import { twoSum, twoSum2 } from '@/index'

describe('two-sum', () => {
  it('1. two sum is target', () => {
    const output = twoSum([2, 3, 7], 10)

    expect(output).toEqual([1, 2])
  })

  it('2. two sum is target', () => {
    const output = twoSum2([2, 3, 7], 10)

    expect(output).toEqual([1, 2])
  })
})
