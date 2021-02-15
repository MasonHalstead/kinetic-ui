import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../buttons/Button'
import cn from './Table.module.scss'

export const Footer = ({ footer }) => {
  const { pagination, submit_disabled, submit_text, onSubmit } = footer
  if (pagination || submit_text) {
    return (
      <div className={cn.footer}>
        <div className={cn.flex} />
        {submit_text && (
          <Button onClick={onSubmit} disabled={submit_disabled}>
            {submit_text}
          </Button>
        )}
      </div>
    )
  }
  return null
}

Footer.defaultProps = {
  footer: {
    pagination: null, // todo
    submit_disabled: false,
    submit_text: null,
    onSubmit: () => {}
  }
}

Footer.propTypes = {
  footer: PropTypes.object
}
