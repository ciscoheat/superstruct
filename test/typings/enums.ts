import { assert, enums } from '../../src'
import { test } from '../index.test'

test<'a' | 'b' | 'c'>((x) => {
  assert(x, enums(['a', 'b', 'c']))
  return x
})

test<1 | 2 | 3>((x) => {
  assert(x, enums([1, 2, 3]))
  return x
})

test<1 | 2 | 3>((x) => {
  assert(x, enums([1, 2, 3] as const))
  return x
})

test<number>((x) => {
  let values = [1, 2, 3]
  assert(x, enums(values))
  return x
})

test<{
  a: 'a'
  b: 'b'
  c: 'c'
}>((x) => {
  return enums(['a', 'b', 'c']).schema
})

test<{
  1: 1
  2: 2
  3: 3
}>((x) => {
  return enums([1, 2, 3]).schema
})
