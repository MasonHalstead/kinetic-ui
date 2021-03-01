import styled from '@emotion/styled'
import { lighten } from 'polished'

export const CalendarElement = styled.div(({ secondary, theme }) => ({
  border: `1px solid ${lighten(0.05, secondary)}`,
  background: '#fff'
}))

export const PresetsElement = styled.div(({ secondary }) => ({
  background: secondary,
  borderRight: `1px solid ${lighten(0.05, secondary)}`,
  '> div:first-of-type': {
    borderBottom: `1px solid ${lighten(0.05, secondary)}`
  }
}))
export const PresetElement = styled.p(({ active, primary, secondary }) => ({
  background: active ? primary : secondary,
  borderBottom: `1px solid ${lighten(0.05, secondary)}`,
  '&:hover': {
    background: lighten(0.05, primary)
  }
}))

export const SelectorElement = styled.div(({ secondary }) => ({
  background: secondary,
  borderBottom: `1px solid ${lighten(0.05, secondary)}`
}))

export const SelectElement = styled.div(({ primary }) => ({
  '&:hover': {
    background: primary
  }
}))

export const RangeElement = styled.div(({ secondary }) => ({
  background: secondary,
  borderTop: `1px solid ${lighten(0.05, secondary)}`
}))

export const CurrentElement = styled.div(({ secondary }) => ({
  background: secondary,
  borderLeft: `1px solid ${lighten(0.05, secondary)}`
}))

export const WeekdayElement = styled.div(({ secondary }) => ({
  background: secondary,
  borderBottom: `1px solid ${lighten(0.05, secondary)}`
}))

export const DayElement = styled.p(
  ({
    selected_range,
    selected_day,
    selected_start,
    selected_finish,
    calendar_range,
    current_day,
    prev_month,
    next_month,
    primary,
    secondary,
    disabled
  }) => {
    const range = prev_month || next_month

    if (disabled) {
      return {
        color: primary,
        textDecoration: 'line-through'
      }
    }
    if (calendar_range) {
      if (selected_start || selected_finish) {
        return {
          opacity: range ? 0.8 : 1,
          color: '#fff',
          background: primary,
          '&:hover': {
            color: '#fff',
            background: lighten(0.1, primary)
          }
        }
      }
    } else if (selected_day) {
      return {
        opacity: range ? 0.8 : 1,
        color: '#fff',
        background: primary,
        '&:hover': {
          color: '#fff',
          background: lighten(0.1, primary)
        }
      }
    }
    if (calendar_range && selected_range) {
      return {
        opacity: range ? 0.8 : 1,
        color: '#fff',
        background: lighten(0.1, secondary),
        '&:hover': {
          color: '#fff',
          background: lighten(0.1, primary)
        }
      }
    }
    if (!calendar_range && current_day) {
      return {
        opacity: range ? 0.8 : 1,
        color: '#fff',
        background: lighten(0.1, secondary),
        '&:hover': {
          color: '#fff',
          background: lighten(0.1, primary)
        }
      }
    }
    return {
      opacity: range ? 0.8 : 1,
      background: range && lighten(0.73, secondary),
      '&:hover': {
        color: '#fff',
        background: lighten(0.1, primary)
      }
    }
  }
)
