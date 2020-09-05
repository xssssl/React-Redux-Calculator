import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../actions'
import { CLEAR, OPERATORS, DECIMAL, EVALUATE, KEYBOARD_LAYOUT } from '../constants/constants'

const KeyBoard = (props) => {
  const { inputNumber, add, subtract, multiply, divide } = props
  const { inputDecimal, inputPercentage, evaluate, allClear, clearEntry } = props
  
  const handleKeyPressedAnimation = (event) => {
    event.target.animate({
        background: '#100',
        color: '#fff'
      }, 120, "linear")
  }
  
  const isNumber = (event) => event.target.innerText.match(/^[0-9]$/) !== null
  const isAllClear = (event) => event.target.id == CLEAR.ALL_CLEAR.id
  const isClearEntry = (event) => event.target.id == CLEAR.CLEAR_ENTRY.id
  const isAdd = (event) => event.target.id == OPERATORS['+'].id
  const isSubtract = (event) => event.target.id == OPERATORS['-'].id
  const isMultiply = (event) => event.target.id == OPERATORS['x'].id
  const isDivide = (event) => event.target.id == OPERATORS['/'].id
  const isDecimal = (event) => event.target.id == DECIMAL['.'].id
  const isPercentage = (event) => event.target.id == DECIMAL['%'].id
  const isEvaluate = (event) => event.target.id == EVALUATE.EVALUATE.id
  
  const handleOnClick = (event) => {
    handleKeyPressedAnimation(event);
    isNumber(event) && inputNumber(event.target.innerText)
    isAllClear(event) && allClear()
    isClearEntry(event) && clearEntry()
    isAdd(event) && add()
    isSubtract(event) && subtract()
    isMultiply(event) && multiply()
    isDivide(event) && divide()
    isDecimal(event) && inputDecimal()
    isPercentage(event) && inputPercentage()
    isEvaluate(event) && evaluate()
  }
  
  return (
    <>
      {KEYBOARD_LAYOUT.map(keyRow => {
        return (
          keyRow.map(keyButton => {
            const { name, id, className } =  keyButton
            return (
              <div 
                key={id} 
                id={id} 
                className={'calcbutton ' + className}
                onClick={handleOnClick}
              >
                {name}
              </div>
            )
          })
        )
      })}
    </>
  )
}

const ConnectedKeyBoard = connect(
  state => state,
  actionCreators
)(KeyBoard)
export default ConnectedKeyBoard