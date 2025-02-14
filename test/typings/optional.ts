import { assert, optional, string, number, object, enums } from '../../src'
import { test } from '../index.test'

test<string | undefined>((x) => {
  assert(x, optional(string()))
  return x
})

test<{
  a?: number | undefined
  b: string
}>((x) => {
  assert(
    x,
    object({
      a: optional(number()),
      b: string(),
    })
  )
  return x
})

test<{
  a: 'a'
  b: 'b'
}>(() => {
  return optional(enums(['a', 'b'])).schema
})
