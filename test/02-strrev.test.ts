import { describe, expect, it } from 'vitest'
import { strrev, strrev2 } from '@/index'

describe('strrev', () => {
  it('1. should reverse a string', () => {
    expect(strrev('strrev')).toEqual('verrts')
  })

  it('2. should reverse a string', () => {
    expect(strrev2('strrev2')).toEqual('2verrts')
  })
})
