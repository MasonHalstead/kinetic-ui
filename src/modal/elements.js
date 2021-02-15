import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const fadeOut = keyframes`
  0% {opacity:1;}
  100% {opacity:0;}
`
const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`

export const ModalElement = styled.div(({ show }) => ({
  display: show && 'flex',
  animation: `${show ? fadeIn : fadeOut} ease 0.3s`
}))
