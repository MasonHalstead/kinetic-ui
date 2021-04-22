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
  height,
  position,
  scroll_height,
  options,
  theme,
  width,
  transparent,
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
            background: theme.background_select,
            minWidth: 100,
            width,
            marginTop: transparent ? 0 : -1,
            left: transparent ? left - 1 : left,
            right: transparent ? right - 1 : right,
            bottom: position === 'top' ? height - 1 : null
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
  transparent: false,
  open: false,
  disabled: false,
  scroll_height: 200,
  height: 30,
  position: 'bottom',
  onFocus: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onChange: () => {},
  children: () => {}
}

Select.propTypes = {
  options: PropTypes.array,
  theme: PropTypes.object,
  height: PropTypes.number,
  position: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.number,
  transparent: PropTypes.bool,
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
