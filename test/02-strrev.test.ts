import { describe, expect, it } from 'vitest'
import { strrev, strrev2 } from '@/index'

describe('strrev', () => {
  it('should reverse a string', () => {
    expect(strrev('strrev')).toEqual('verrts')
  })

  it('should reverse a string2', () => {
    expect(strrev2('strrev2')).toEqual('2verrts')
  })
})
