import React, { Fragment, Children, cloneElement } from 'react'
import cn from './Select.module.scss'

export const Select = ({
  open,
  disabled,
  children,
  scroll_height,
  options,
  theme,
  width,
  left,
  right,
  ...rest
}) => {
  return (
    <Fragment>
      {open && !disabled && (
        <div
          className={cn.select}
          style={{
            maxHeight: scroll_height,
            border: theme.border_select,
            width,
            left,
            right
          }}
        >
          {options.map((option, index) =>
            Children.map(children, (child) =>
              cloneElement(child, { option, index, ...rest })
            )
          )}
        </div>
      )}
    </Fragment>
  )
}
Select.defaultProps = {
  options: [],
  theme: {},
  width: null,
  left: 0,
  right: 0,
  open: false,
  disabled: false,
  scroll_height: 200,
  onFocus: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onChange: () => {},
  children: () => {}
}
