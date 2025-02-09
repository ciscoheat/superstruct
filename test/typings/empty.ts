import { assert, empty, string, array, map, set } from '../../src'
import { test } from '../index.test'

test<string>((x) => {
  assert(x, empty(string()))
  return x
})

test<Array<unknown>>((x) => {
  assert(x, empty(array()))
  return x
})

test<Set<unknown>>((x) => {
  assert(x, empty(set()))
  return x
})

test<Map<unknown, unknown>>((x) => {
  assert(x, empty(map()))
  return x
})
