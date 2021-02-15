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
  default_value,
  value,
  options,
  option_key,
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
    if (default_value) {
      const index = findOptionIndex(options, option_key, default_value)
      setSettings((prev) => ({
        ...prev,
        selected: index,
        active: index,
        value: default_value,
        remove: true
      }))
    }
    if (value) {
      const index = findOptionIndex(options, option_key, value)
      setSettings((prev) => ({
        ...prev,
        selected: index,
        active: index,
        value: value,
        remove: true
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
    if (dropdownRef.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  const onChange = (v) => {
    rest.onChange(v)
  }

  const onRemove = () => {
    rest.onSelect(null)

    if (!value) {
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
    if (multi_select) {
      // dont know what to do yet
    } else {
      rest.onSelect(option)
      setOpen(false)
      if (!value) {
        setSettings((prev) => ({
          ...prev,
          selected: i,
          active: i,
          value: option[option_key],
          remove: true
        }))
      }
      inputRef.current.blur()
    }
  }

  const onFocus = () => {
    setOpen(true)
  }
  const onBlur = (override) => {
    if (multi_select && !override) {
      return
    }
    setOpen(false)
  }

  const onKeyDown = (e) => {
    const { active } = settings
    const options_length = options.length - 1
    e.preventDefault()

    if (e.keyCode === key_codes.down_arrow) {
      if (active < options_length) {
        setSettings((prev) => ({ ...prev, active: prev.active + 1 }))
      }
    }
    if (e.keyCode === key_codes.up_arrow) {
      if (active > 0) {
        setSettings((prev) => ({ ...prev, active: prev.active - 1 }))
      }
    }
    if (e.keyCode === key_codes.enter) {
      onSelect(options[active], active)
    }
    if (e.keyCode === key_codes.escape && nullable) {
      onRemove()
    }
    if (e.keyCode === key_codes.tab) {
      setOpen(false)
      inputRef.current.blur()
    }
  }

  const { active, selected, remove } = settings

  // special case inside input base
  // abusing the input component a little bit
  const error_level = remove && nullable ? 99 : null
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
  width: '100%',
  default_value: null,
  value: null,
  options: [],
  option_key: 'name',
  nullable: false,
  onChange: () => {},
  onSelect: () => {},
  children: () => {}
}
DropdownBase.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multi_select: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  default_value: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  option_key: PropTypes.string,
  nullable: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  children: PropTypes.PropTypes.array
}
