import React from 'react'

export default function SpecialKey(props) {
  return <button className={`special ${props.special}`} onClick={() => props.onSpecialClick(props.label)} >{props.label}</button>
}