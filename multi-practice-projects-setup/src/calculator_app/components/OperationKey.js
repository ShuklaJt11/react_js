import React from 'react'

export default function OperationKey(props) {
  return <button className={`operation ${props.operation}`} onClick={() => props.onOperationClick(props.keymap)} >{props.label}</button>
}