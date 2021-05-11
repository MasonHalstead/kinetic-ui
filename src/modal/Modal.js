import React, { useEffect, Children, cloneElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { ModalElement } from './elements'
import { useTheme } from '../theme/ThemeProvider'
import classNames from 'classnames'
import cn from './Modal.module.scss'

export const Modal = ({
  show,
  wizard,
  onClose,
  theme,
  standard,
  mobile,
  width,
  padding,
  children
}) => {
  const handleKeyDown = (e) => {
    // escape close modal
    if (e.keyCode === 27) {
      onClose()
    }
  }

  const onCloseModal = () => {
    if (standard) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const modal = useTheme('modal', theme)

  return (
    <ModalElement
      className={classNames(cn.modal, { [cn.mobile]: mobile })}
      theme={modal}
      show={show}
      onClick={onCloseModal}
    >
      <div
        className={classNames(cn.content, { [cn.mobile]: mobile })}
        role='dialog'
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: wizard ? 'max-content' : width,
          minWidth: wizard ? 'max-content' : width,
          border: modal.border_modal,
          background: modal.background_modal
        }}
      >
        <div className={cn.close} onClick={onClose}>
          <FontAwesomeIcon
            className={cn.icon}
            color={modal.modal_close_color}
            icon={['fas', 'times']}
          />
        </div>
        <div className={cn.body} style={{ padding: wizard ? 0 : padding }}>
          {show &&
            Children.map(children, (child) =>
              cloneElement(child, {
                show,
                mobile,
                onClose
              })
            )}
        </div>
      </div>
    </ModalElement>
  )
}

Modal.defaultProps = {
  width: 500,
  padding: 10,
  standard: true,
  wizard: false,
  show: false,
  mobile: false,
  theme: {},
  onClose: () => {}
}

Modal.propTypes = {
  wizard: PropTypes.bool,
  width: PropTypes.number,
  mobile: PropTypes.bool,
  standard: PropTypes.bool,
  children: PropTypes.any,
  padding: PropTypes.number,
  show: PropTypes.bool,
  theme: PropTypes.object,
  onClose: PropTypes.any
}
