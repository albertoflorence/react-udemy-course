import React, { Component } from 'react'
import classes from './Input.css'
import * as util from '../../../util'

const shouldTransform = (capitalize, pretty) => string => {
  if (capitalize) {
    string = util.capitalize(string)
  }
  if (pretty) {
    string = util.undoCamelCase(string)
  }
  return string
}

const hasValue = string => string && string.trim() !== ''

class Input extends Component {
  state = {
    focused: false
  }

  handleBlur = event => {
    this.setState({ focused: false })
    this.inputValue = event.target.value
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  handleChange = event => {
    this.inputValue = event.target.value
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleFocus = event => {
    this.touched = true
    this.setState({ focused: true })
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  render() {
    const {
      placeholder,
      value,
      type,
      label,
      capitalize,
      pretty,
      require,
      multiline,
      select,
      htmlFor,
      error,
      options
    } = this.props

    let InputElement = 'input'
    let inputProps = {
      ...this.inputProps
    }
    let inputChildren = null
    if (multiline) {
      InputElement = 'textarea'
    } else if (select) {
      InputElement = 'select'
      inputChildren = [
        <option defaultValue="" disabled key={placeholder}>
          {placeholder}
        </option>
      ]
      inputChildren.push(
        ...options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))
      )
      inputProps['defaultValue'] = placeholder
    }
    let inputClasses = [classes.InputElement]
    if (this.touched && ((require && !hasValue(this.inputValue)) || error)) {
      inputClasses.push(classes.Invalid)
    }

    const transform = shouldTransform(capitalize, pretty)

    return (
      <div className={classes.Input}>
        <label htmlFor={htmlFor} classes={classes.Label}>
          {label}
          <InputElement
            value={value}
            type={type}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            placeholder={transform(placeholder)}
            className={inputClasses.join(' ')}
            {...inputProps}
          >
            {inputChildren}
          </InputElement>
        </label>
      </div>
    )
  }
}
export default Input
