import React from 'react'
import NumberInputKey from './NumberInputKey'
import OperationKey from './OperationKey'
import SpecialKey from './SpecialKey'
import ResultKey from './ResultKey'

export default function CalculatorKeyboard(props) {
  return (
    <div className="calc-keyboard">
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="0" input="zero" label="0" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="1" input="one" label="1" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="2" input="two" label="2" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="3" input="three" label="3" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="4" input="four" label="4" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="5" input="five" label="5" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="6" input="six" label="6" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="7" input="seven" label="7" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="8" input="eight" label="8" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="9" input="nine" label="9" />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="." input="dot" label="." />
      <NumberInputKey onNumberClick={props.onNumberClick} keymap="DEL" input="del" label="&larr;" />
      <SpecialKey onSpecialClick={props.onSpecialClick} special="clear" label="C" />
      <SpecialKey onSpecialClick={props.onSpecialClick} special="toggle" label="+/-" />
      <SpecialKey onSpecialClick={props.onSpecialClick} special="percentage" label="%" />
      <OperationKey onOperationClick={props.onOperationClick} keymap="SUM" operation="plus" label="+" />
      <OperationKey onOperationClick={props.onOperationClick} keymap="DIF" operation="minus" label="-" />
      <OperationKey onOperationClick={props.onOperationClick} keymap="MUL" operation="multiply" label="&times;" />
      <OperationKey onOperationClick={props.onOperationClick} keymap="DIV" operation="divide" label="&divide;" />
      <ResultKey onResultClick={props.onResultClick} />
    </div>
  )
}