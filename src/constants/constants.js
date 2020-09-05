export const NUMBERS = {
  '0': { name: '0', id: 'zero', className: 'number bottomrow'},
  '1': { name: '1', id: 'one', className: 'number'},
  '2': { name: '2', id: 'two', className: 'number'},
  '3': { name: '3', id: 'three', className: 'number'},
  '4': { name: '4', id: 'four', className: 'number'},
  '5': { name: '5', id: 'five', className: 'number'},
  '6': { name: '6', id: 'six', className: 'number'},
  '7': { name: '7', id: 'seven', className: 'number'},
  '8': { name: '8', id: 'eight', className: 'number'},
  '9': { name: '9', id: 'nine', className: 'number'}
  };
  
export const OPERATORS = {
  '+': { name: '+', id: 'add', className: 'operator add'},
  '-': { name: '-', id: 'subtract', className: 'operator' },
  'x': { name: '\u00D7', id: 'multiply', className: 'operator' },
  '/': { name: '\u00F7', id: 'divide', className: 'operator' },
};
  
export const DECIMAL = {
  '.': { name: '.', id: 'decimal', className: 'decimal bottomrow' },
  '%': { name: '%', id: 'percentage', className: 'decimal' },
};
  
export const CLEAR = {
  ALL_CLEAR: { name: 'AC', id: 'clear', className: 'clear' },
  CLEAR_ENTRY: { name: 'CE', id: 'clearEntry', className: 'clear' },
};
  
export const EVALUATE = {
  EVALUATE: { name: '=', id: 'equals', className: 'evaluate bottomrow' }
}
  
export const KEYBOARD_LAYOUT = [
  [CLEAR.ALL_CLEAR, CLEAR.CLEAR_ENTRY, DECIMAL['%'], OPERATORS['/']],
  [NUMBERS['7'], NUMBERS['8'], NUMBERS['9'], OPERATORS['x']],
  [NUMBERS['4'], NUMBERS['5'], NUMBERS['6'], OPERATORS['-']],
  [NUMBERS['1'], NUMBERS['2'], NUMBERS['3'], OPERATORS['+']],
  [NUMBERS['0'], DECIMAL['.'], EVALUATE.EVALUATE]
]
  
export const ACTION_TYPES = {
  INPUT_NUMBER: 'INPUT_NUMBER',
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  INPUT_DECIMAL: 'INPUT_DECIMAL',
  INPUT_PERCENTAGE: 'INPUT_PERCENTAGE',
  ALL_CLEAR: 'ALL_CLEAR',
  CLEAR_ENTRY: 'CLEAR_ENTRY',
  EVALUATE: 'EVALUATE'
}