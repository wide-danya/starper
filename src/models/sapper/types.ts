export enum FieldState {
  CLOSED = 'CLOSED',
  EMPTY = 'EMPTY',
  NUMBER = 'NUMBER',
  BOMB = 'BOMB',
  FLAG = 'FLAG',
}

// [CLOSED -> FLAG -> BOMB] -> WIN

// CLOSED -> FLAG -> EMPTY

// CLOSED -> BOMB -> LOSE

// CLOSED -> NUMBER

// CLOSED -> EMPTY
