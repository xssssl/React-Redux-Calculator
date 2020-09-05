import { ACTION_TYPES } from '../constants/constants'

const inputNumber = number => ({
  type: ACTION_TYPES.INPUT_NUMBER,
  number
})

const add = () => ({
  type: ACTION_TYPES.ADD
})

const subtract = () => ({
  type: ACTION_TYPES.SUBTRACT
})

const multiply = () => ({
  type: ACTION_TYPES.MULTIPLY
})

const divide = () => ({
  type: ACTION_TYPES.DIVIDE
})

const inputDecimal = () => ({
  type: ACTION_TYPES.INPUT_DECIMAL
})

const inputPercentage = () => ({
  type: ACTION_TYPES.INPUT_PERCENTAGE
})

const allClear = () => ({
  type: ACTION_TYPES.ALL_CLEAR
})

const clearEntry = () => ({
  type: ACTION_TYPES.CLEAR_ENTRY
})

const evaluate = () => ({
  type: ACTION_TYPES.EVALUATE
})

export const actionCreators = {
  inputNumber,
  add,
  subtract,
  multiply,
  divide,
  inputDecimal,
  inputPercentage,
  allClear,
  clearEntry,
  evaluate
}