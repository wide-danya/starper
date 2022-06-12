import { createEvent, createStore } from 'effector'

const defaultState = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]

export const $mineField = createStore<number[][]>(defaultState)

export const fieldWillBeChecked = createEvent()

export const mineWillBeDefused = createEvent()
