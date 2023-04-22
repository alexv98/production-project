import { classNames } from './classNames'

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('main'))
      .toBe('main')
  })
  test('with additional', () => {
    expect(classNames('main', {}, ['class1']))
      .toBe('main class1')
  })
  test('with mods', () => {
    expect(classNames('main', { red: true, hovered: false }))
      .toBe('main red')
  })
  test('full classes', () => {
    expect(classNames('main', { red: true, hovered: false, scrollable: undefined }, ['class1', 'class2']))
      .toBe('main class1 class2 red')
  })
})
