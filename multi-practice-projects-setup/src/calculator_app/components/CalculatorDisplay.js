import React from 'react'

const CalculatorDisplay = React.memo(props => {
  return (
    <div className="calc-display">
      {props.display}
    </div>
  )
})

export default CalculatorDisplay