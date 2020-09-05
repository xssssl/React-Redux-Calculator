import { ACTION_TYPES } from '../constants/constants'

export const initState = {
  currentValue: '0',
  formula: ''
}

export const calculator = (state = initState, action) => {
  const isOperator = value => value.match(/^[+\-*x/\u00D7\u00F7]{1}$/) !== null
  const endWithOperator = string => isOperator(string.slice(-1))
  const hasCharacter = (string, character) => !!(string.indexOf(character) + 1)
  
  switch(action.type) {
    case ACTION_TYPES.INPUT_NUMBER:
      return {
        ...state,
        currentValue: (isOperator(state.currentValue) 
                        ? action.number
                        : (state.currentValue == '0'
                          ? action.number
                          : state.currentValue + action.number
                          )
                        ),
        formula: isOperator(state.currentValue)
                  ? state.formula + state.currentValue
                  : state.formula
      }
    case ACTION_TYPES.ALL_CLEAR:
      return {
        ...state,
        currentValue: '0',
        formula: ''
      }
    case ACTION_TYPES.CLEAR_ENTRY:
      return {
        ...state,
        currentValue: '0',
      }
    case ACTION_TYPES.ADD:
      return {
        ...state,
        currentValue: '+',
        formula: isOperator(state.currentValue)
                    ? endWithOperator(state.formula)
                      ? state.formula.slice(0, -1)
                      : state.formula
                    : hasCharacter(state.formula, '=')
                      ? state.formula.split('=')[1]
                      : state.formula + state.currentValue
      }
    case ACTION_TYPES.SUBTRACT:
      return {
        ...state,
        currentValue: '-',
        formula: isOperator(state.currentValue)
                    ? state.currentValue === '-'
                      ? state.formula
                      : state.formula + state.currentValue
                    : hasCharacter(state.formula, '=')
                      ? state.formula.split('=')[1]
                      : state.formula + state.currentValue
      }
    case ACTION_TYPES.MULTIPLY:
      return {
        ...state,
        currentValue: '\u00D7',
        formula: isOperator(state.currentValue)
                    ? endWithOperator(state.formula)
                      ? state.formula.slice(0, -1)
                      : state.formula
                    : hasCharacter(state.formula, '=')
                      ? state.formula.split('=')[1]
                      : state.formula + state.currentValue
      }
    case ACTION_TYPES.DIVIDE:
      return {
        ...state,
        currentValue: '\u00F7',
        formula: isOperator(state.currentValue)
                    ? endWithOperator(state.formula)
                      ? state.formula.slice(0, -1)
                      : state.formula
                    : hasCharacter(state.formula, '=')
                      ? state.formula.split('=')[1]
                      : state.formula + state.currentValue
      }
    case ACTION_TYPES.INPUT_DECIMAL:
      return {
        ...state,
        currentValue: isOperator(state.currentValue)
                        ? '0.'
                        : hasCharacter(state.currentValue, '.')
                          ? state.currentValue
                          : state.currentValue + '.',
        formula: isOperator(state.currentValue)
                  ? state.formula + state.currentValue
                  : state.formula
      }
    case ACTION_TYPES.INPUT_PERCENTAGE:
      return {
        ...state,
        currentValue: isOperator(state.currentValue)
                        ? state.currentValue
                        : (state.currentValue / 100).toString()
      }
    case ACTION_TYPES.EVALUATE:
      var transformedFormula = isOperator(state.currentValue)
                                ? state.formula
                                : state.formula + state.currentValue
      transformedFormula = transformedFormula.replaceAll('x', '*').replaceAll('\u00D7', '*').replaceAll('\u00F7', '/')
      const result = eval(transformedFormula).toString()
      return {
        ...state,
        currentValue: result,
        formula: state.formula + state.currentValue + '=' + result
      }
    default:
      return state
  }
}