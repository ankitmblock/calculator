/*
 * String Constants
 */
const DISPLAY_ELEMENT = 'displayResult'
const EMPTY_STRING = ''
const INVALID_EXPRESSION = 'ExpInvalid'
const INVALID_EXPRESSION_MESSAGE = 'Please enter a valid expression.'
const INFINITY = 'Infinity'
const NEG_INFINITY = '-Infinity'

/**
 * Returns value for any particular element by Id from DOM
 * 
 * @param {string} elementId Id for the input DOM element. 
 */
function getValue(elementId) {
  return (document.getElementById(elementId).value)
}

/**
 * Changes value for any particular element by Id from DOM
 * 
 * @param {string} elementId Id for the input DOM element.
 * @param {string} value New value for that element.
 */
function setValue(elementId, value) {
  document.getElementById(elementId).value = value
}

/**
 * Changes the display based on the input character entered by the User.
 * @param {string} character New character typed by the user.
 */
function keyPressed(character) {
  const display = getValue(DISPLAY_ELEMENT) + character
  setValue(DISPLAY_ELEMENT, display)
}

/**
 * Solves the expression entered by User.
 */
function solve() {
  try {
    const result = eval(getValue(DISPLAY_ELEMENT)) || EMPTY_STRING
    setValue(DISPLAY_ELEMENT, result)
  } catch (error) {
    setValue(DISPLAY_ELEMENT, INVALID_EXPRESSION)
    alert(INVALID_EXPRESSION_MESSAGE)
  }
}
/**
 *Clears the result or input in Display field.
 */
function clearResult() {
  setValue(DISPLAY_ELEMENT, EMPTY_STRING)
}

/**
 * Deletes the last entered input in Display field.
 */
function backspace() {
  const expression = getValue(DISPLAY_ELEMENT)
  const compositeTokens = [INFINITY, NEG_INFINITY, INVALID_EXPRESSION]
  if(compositeTokens.includes(expression)) {
    setValue(DISPLAY_ELEMENT, EMPTY_STRING)
  } else {
    setValue(DISPLAY_ELEMENT, expression.slice(0, expression.length - 1))
  }
}

/**
 * Focuses on the input field as soon as the page is loaded.
 */
window.onload = function () {
  document.getElementById(DISPLAY_ELEMENT).focus();
}

/**
 * Defines action on the key press.
 * code = 8: Backspace Key
 * code = 13: Enter Key
 * code = 54: Exponentiation Key
 * code = 61: Equal Key
 * @param {string} key Key that is pressed
 */
window.onkeydown = function (key) {
  document.getElementById(DISPLAY_ELEMENT).focus();
  if (key.keyCode == 13 || key.keyCode == 61) {
    event.preventDefault()
    solve()
  } else if (key.keyCode == 8) {
    event.preventDefault()
    backspace()
  } else if (key.keyCode == 54) {
    event.preventDefault()
    keyPressed('**')
  }
}
