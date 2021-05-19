import React, {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement
} from 'react'
import PropTypes from 'prop-types'
import cn from './Dropdown.module.scss'

const key_codes = {
  down_arrow: 40,
  up_arrow: 38,
  enter: 13,
  tab: 9,
  delete: 8,
  escape: 27
}

export const findOptionIndex = (
  options = [],
  option_key = 'uuid',
  default_value = ''
) => {
  const value = default_value || ''
  const search = value.toString().toLowerCase()

  return options.findIndex((option) => {
    if (option[option_key]) {
      return option[option_key].toString().toLowerCase() === search
    }
    return false
  })
}

export const DropdownBase = ({
  margin,
  width,
  multi_select,
  children,
  input_control,
  default_value,
  value,
  options,
  option_key,
  controlled,
  nullable,
  ...rest
}) => {
  const dropdownRef = useRef()
  const inputRef = useRef()
  const [settings, setSettings] = useState({
    value: null,
    active: -1,
    selected: -1,
    remove: false
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // setting a default value for uncontrolled dropdown
    if (!controlled) {
      const index = findOptionIndex(options, option_key, default_value)
      setSettings((prev) => ({
        ...prev,
        selected: index,
        active: index,
        value: default_value,
        remove: true
      }))
    }
  }, [options])

  useEffect(() => {
    // controlled needs to be explicitly set for value
    // to account for empty strings and null etc
    if (controlled) {
      const index = findOptionIndex(options, option_key, value)
      setSettings((prev) => ({
        ...prev,
        selected: index,
        active: index,
        value: value,
        remove: !!value
      }))
    }
  }, [options, value])

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', onClickOutside)
    } else {
      document.removeEventListener('mousedown', onClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  })

  const onClickOutside = (e) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  const onChange = (input) => {
    rest.onChange(input)
  }

  const onRemove = () => {
    rest.onChange(null)
    rest.onSelect(null, -1)

    if (!controlled) {
      setSettings((prev) => ({
        ...prev,
        selected: -1,
        active: -1,
        value: null,
        remove: false
      }))
    }
  }

  const onSelect = (option, i) => {
    rest.onSelect(option, i)

    if (!multi_select) {
      setOpen(false)

      // if (inputRef && inputRef.current) {
      //   inputRef.current.blur()
      // }

      if (!controlled) {
        setSettings((prev) => ({
          ...prev,
          selected: i,
          active: i,
          value: option[option_key],
          remove: true
        }))
      }
    }
  }

  const onFocus = () => {
    setOpen(true)
  }
  const onBlur = (override) => {
    // override also could be the element
    // need to check the value is a boolean
    // override the onBlur when the label is clicked
    if (override === true) {
      setOpen(false)
    }
  }

  const onKeyDown = (e) => {
    const { active } = settings
    const options_length = options.length - 1
    // e.preventDefault() is case by case basis
    // it prevents onChange from firing for input control
    // also prevents scroll behavior from bubbling
    if (e.keyCode === key_codes.down_arrow && active < options_length) {
      e.preventDefault()
      setSettings((prev) => ({ ...prev, active: prev.active + 1 }))
    } else if (e.keyCode === key_codes.up_arrow && active > 0) {
      e.preventDefault()
      setSettings((prev) => ({ ...prev, active: prev.active - 1 }))
    } else if (e.keyCode === key_codes.enter && input_control) {
      setOpen(false)
    } else if (e.keyCode === key_codes.enter) {
      onSelect(options[active], active)
    } else if (e.keyCode === key_codes.escape && nullable) {
      onRemove()
    } else if (e.keyCode === key_codes.tab) {
      setOpen(false)
    }
  }

  const { active, selected, remove } = settings

  // special case inside input base
  // abusing the input component a little bit
  const error_level = remove && nullable ? 99 : null

  if (input_control) {
    return (
      <div
        tabIndex={-1}
        className={cn.wrapper}
        style={{ margin, maxWidth: width }}
      >
        <div className={cn.dropdown} ref={dropdownRef}>
          {Children.map(children, (child) =>
            cloneElement(child, {
              onFocus,
              onBlur,
              onSelect,
              onRemove,
              onKeyDown,
              active,
              selected,
              open,
              error_level
            })
          )}
        </div>
      </div>
    )
  }
  return (
    <div
      className={cn.wrapper}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      style={{ margin, maxWidth: width }}
    >
      <div className={cn.dropdown} ref={dropdownRef}>
        {Children.map(children, (child) =>
          cloneElement(child, {
            inputRef,
            onFocus,
            onBlur,
            onChange,
            onSelect,
            onRemove,
            value: settings.value,
            active,
            selected,
            open,
            error_level
          })
        )}
      </div>
    </div>
  )
}
DropdownBase.defaultProps = {
  margin: 0,
  multi_select: false,
  input_control: false,
  width: '100%',
  default_value: null,
  value: null,
  options: [],
  option_key: 'name',
  controlled: true,
  nullable: false,
  onChange: () => {},
  onSelect: () => {},
  children: () => {}
}
DropdownBase.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multi_select: PropTypes.bool,
  input_control: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  default_value: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  option_key: PropTypes.string,
  controlled: PropTypes.bool,
  nullable: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  children: PropTypes.PropTypes.array
}
