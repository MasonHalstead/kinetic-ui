import React, { useState, useEffect, Children } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { Button } from '../buttons/Button'
import { Progress } from '../progress/Progress'
import cn from './Wizard.module.scss'

export const Wizard = ({
  theme,
  onSubmit,
  width,
  onStep,
  submit,
  children
}) => {
  const [current, setProgressCurrent] = useState(0)
  const [end, setProgressEnd] = useState(1)
  const [child, setChildren] = useState([])
  useEffect(() => {
    // pushing children adds an array index
    // it doesnt not add a child object
    if (children) {
      const flatten_children = children.flat(1)
      if (flatten_children && flatten_children.length > 0) {
        setProgressEnd(flatten_children.length - 1)
        setChildren(flatten_children)
      }
    }
  }, [children])

  const onBack = () => {
    const back = current - 1
    setProgressCurrent(back)
    onStep(back, end)
  }
  const onNext = () => {
    const next = current + 1
    setProgressCurrent(next)
    onStep(next, end)
  }
  const wizard_theme = useTheme('wizard', theme)
  return (
    <div className={cn.wizard} style={{ minWidth: width, maxWidth: width }}>
      <div className={cn.content}>
        {Children.map(child, (c, i) => {
          if (current === i) {
            return c
          }
          return null
        })}
      </div>
      <div className={cn.buttons}>
        {current === 0 && <div className={cn.flex} />}
        {current !== 0 && (
          <Button onClick={onBack} theme={wizard_theme} width={125} slim>
            Back
          </Button>
        )}
        {current !== end && (
          <Button onClick={onNext} theme={wizard_theme} width={125} slim>
            Next
          </Button>
        )}
        {current === end && (
          <Button
            type='submit'
            theme={wizard_theme}
            onClick={onSubmit}
            width={125}
            slim
          >
            {submit}
          </Button>
        )}
      </div>
      <Progress current={current} end={end} theme={wizard_theme} />
    </div>
  )
}

Wizard.defaultProps = {
  theme: {},
  width: 500,
  onStep: () => {},
  onSubmit: () => {},
  submit: 'Submit',
  children: null
}
Wizard.propTypes = {
  width: PropTypes.number,
  theme: PropTypes.object,
  submit: PropTypes.string,
  onStep: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.any
}
