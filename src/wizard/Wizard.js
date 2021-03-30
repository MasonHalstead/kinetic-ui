import React, { useState, useEffect, Children } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { Button } from '../buttons/Button'
import { Progress } from '../progress/Progress'
import cn from './Wizard.module.scss'

const Buttons = ({
  current,
  back,
  next,
  end,
  submit,
  onBack,
  onNext,
  onSubmit,
  theme
}) => {
  return (
    <div className={cn.buttons}>
      {current === 0 && <div className={cn.flex} />}
      {current !== 0 && (
        <Button onClick={onBack} theme={theme} width={125} slim>
          {back}
        </Button>
      )}
      {current !== end && (
        <Button onClick={onNext} theme={theme} width={125} slim>
          {next}
        </Button>
      )}
      {current === end && (
        <Button type='submit' theme={theme} onClick={onSubmit} width={125} slim>
          {submit}
        </Button>
      )}
    </div>
  )
}

Buttons.defaultProps = {
  theme: {},
  onBack: () => {},
  onNext: () => {},
  onSubmit: () => {},
  current: 0,
  end: null,
  back: 'Back',
  next: 'Next',
  submit: 'Submit'
}
Buttons.propTypes = {
  theme: PropTypes.object,
  back: PropTypes.string,
  next: PropTypes.string,
  submit: PropTypes.string,
  current: PropTypes.number,
  end: PropTypes.number,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  onSubmit: PropTypes.func
}

export const Wizard = ({
  theme,
  onSubmit,
  width,
  onStep,
  back,
  next,
  submit,
  buttons,
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
      {buttons({
        current,
        back,
        next,
        end,
        submit,
        onBack,
        onNext,
        onSubmit,
        theme: wizard_theme
      })}
      <Progress current={current} end={end} theme={wizard_theme} />
    </div>
  )
}

Wizard.defaultProps = {
  theme: {},
  width: 500,
  buttons: (props) => <Buttons {...props} />,
  onStep: () => {},
  onSubmit: () => {},
  back: 'Back',
  next: 'Next',
  submit: 'Submit',
  children: null
}
Wizard.propTypes = {
  width: PropTypes.number,
  buttons: PropTypes.func,
  theme: PropTypes.object,
  back: PropTypes.string,
  next: PropTypes.string,
  submit: PropTypes.string,
  onStep: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.any
}
