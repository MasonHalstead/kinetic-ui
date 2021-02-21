import React, { Fragment, Children, cloneElement } from 'react'
import { Option } from '../options/Option'
import PropTypes from 'prop-types'
import cn from './Select.module.scss'

const option = {
  option_key: 'name',
  index: -2,
  text_align: 'center',
  option: { name: 'nothing to select' }
}
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
          {options.length === 0 && <Option theme={theme} {...option} />}
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

Select.propTypes = {
  options: PropTypes.array,
  theme: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.number,
  right: PropTypes.number,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  scroll_height: PropTypes.number,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.func
}
