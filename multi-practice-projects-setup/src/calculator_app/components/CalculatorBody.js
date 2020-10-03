/**********************************
*? Index
*? 1. Imports
*? 2. Component Declaration
*? 3. Initial States and Refs
*? 4. Helper Functions
*? 5. Event Handlers
*? 6. Return with Passing of Props
**********************************/

/**********************************
*! 1. Imports
**********************************/
import React, {useState, useRef, useCallback} from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorKeyboard from './CalculatorKeyboard'

/**********************************
*! 2. Component Declaration
**********************************/
export default function CalculatorBody() {
  /**********************************
  *! 3. Initial States and Refs
  **********************************/
  const [activeNumber, setActiveNumber] = useState(0)
  const [isOperationDone, setIsOperationDone] = useState(false)
  const [selectedOperation, setSelectedOperation] = useState('')
  const floatPosition = useRef(0)
  const memoryNumber= useRef(0)

  /**********************************
  *! 4. Helper Functions
  **********************************/
  // Reset all states and refs
  const performReset = () => {
    setActiveNumber(0)
    setIsOperationDone(false)
    setSelectedOperation('')
    floatPosition.current = 0
    memoryNumber.current = 0
  }

  // Prepare active number as per input
  const prepareOperand = keyValue => {
    const digit = parseInt(keyValue) // Get digit as integer rather than string
    if (floatPosition.current > 0) { // Check if calculator is in floating point mode
      const floating = digit / Math.pow(10, floatPosition.current) // Calculate and store (digit / 10^floating_point_position)
      if (activeNumber >=0) { // Check for positive active number
        setActiveNumber(prevActiveNumber => parseFloat((prevActiveNumber + floating).toFixed(floatPosition.current))) // Active number = active number + floating
      } else {
        setActiveNumber(prevActiveNumber => parseFloat((prevActiveNumber - floating).toFixed(floatPosition.current))) // Active number = active number - floating
      }
      floatPosition.current = floatPosition.current + 1 // Increment floating position
    } else if (activeNumber >= 0) { // Check for positive active number
      setActiveNumber(prevActiveNumber => prevActiveNumber * 10 + digit) // Active number = active number * 10 + digit
    } else {
      setActiveNumber(prevActiveNumber => prevActiveNumber * 10 - digit) // Active number = active number * 10 - digit
    }
  }

  // Set the calculator in floating point mode
  const handleDecimal = () => {
    if (floatPosition.current === 0) { // Check if calculator is already in floating point mode
      floatPosition.current = 1
    }
  }

  // Delete the last entered digit
  const handleDel = () => {
    if (floatPosition.current <= 1) { // Check if calculator is NOT in floating point mode
      setActiveNumber(prevActiveNumber => parseInt(prevActiveNumber / 10)) // Active number = Quotient of (active number / 10)
      floatPosition.current = 0 // Make sure floating point mode is disabled if last floating point is just deleted
    } else {
      let decimalString = activeNumber.toString() // Convert active number to string
      decimalString = decimalString.slice(0, (decimalString.indexOf('.') + floatPosition.current - 1)) // Slice the string to disregard last character
      setActiveNumber(parseFloat(decimalString)) // Active number = Above string converted back to floating point mode
      floatPosition.current -= 1 // Decrement floating position
    }
  }

  // Toggle the sign of active number
  const toggleSign = () => {
    setActiveNumber(prevActiveNumber => 0 - prevActiveNumber) // Active number = 0 - active number
  }

  // Calculate active percentage of the memory number
  const calculatePercentage = () => {
    const percent = activeNumber / 100
    setActiveNumber(memoryNumber.current * percent) // Active number = memory number * active number / 100
    performCalculation() // Perform calculation
    setActiveNumber(memoryNumber.current) // Set the result of calculation as active number
  }

  // Do calculation according to currently selected operation
  const performCalculation = () => {
    if (selectedOperation === '') { // If no operation has been selected yet
      memoryNumber.current = activeNumber // Shift active number to memory number
    } else if (selectedOperation === 'SUM') {
      memoryNumber.current = memoryNumber.current + activeNumber 
    } else if (selectedOperation === 'DIF') {
      memoryNumber.current = memoryNumber.current - activeNumber
    } else if (selectedOperation === 'MUL') {
      memoryNumber.current = memoryNumber.current * activeNumber
    } else if (selectedOperation === 'DIV') {
      if (activeNumber === 0) { // Check for DEVIDE BY ZERO
        memoryNumber.current = "Can't divide by 0"
      } else {
        memoryNumber.current = memoryNumber.current / activeNumber
      }
    }
    setActiveNumber(0)
    setSelectedOperation('')
    setIsOperationDone(true)
  }

  /**********************************
  *! 5. Event Handlers
  **********************************/

  // Clicking of number input keys
  const onNumberClick = useCallback(keyValue => {
    setIsOperationDone(false)
    if (keyValue === null) return
    if (keyValue === '.') {
      handleDecimal()
    } else if (keyValue === 'DEL') {
      handleDel()
    } else {
      prepareOperand(keyValue)
    }
  })

  // Clicking of special keys
  const onSpecialClick = useCallback(keyValue => {
    if (keyValue === null) return
    if (keyValue === 'C') {
      performReset()
    } else if (keyValue === '+/-') {
      toggleSign()
    } else if (keyValue === '%') {
      calculatePercentage()
    }
  })

  // Clicking on operation keys
  const onOperationClick = useCallback(keyValue => {
    performCalculation()
    setSelectedOperation(keyValue)
  })

  // Clicking on result key
  const onResultClick = useCallback(() => {
    performCalculation()
  })

  /**********************************
  *! 6. Return with Passing of Props
  **********************************/
  return (
    <div className="calc-body">
      <CalculatorDisplay display={isOperationDone ? memoryNumber.current : activeNumber} />
      <CalculatorKeyboard 
        onNumberClick={onNumberClick}
        onSpecialClick={onSpecialClick}
        onOperationClick={onOperationClick}
        onResultClick={onResultClick}
      />
    </div>
  )
}