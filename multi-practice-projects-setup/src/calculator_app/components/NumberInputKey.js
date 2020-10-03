import React from 'react'

export default function NumberInputKey(props) {
  return <button className={`number ${props.input}`} onClick={() => props.onNumberClick(props.keymap)} >{props.label}</button>
}