import React, { Suspense } from 'react'
import classNames from 'classnames'
import cn from './Loading.module.scss'
const { PUBLIC_URL } = process.env

export const Loading = () => (
  <div className={classNames(cn.loading, cn.dark)}>
    <Spinner />
  </div>
)

export const Spinner = React.memo(() => (
  <img
    className={cn.spinner}
    src={`${PUBLIC_URL}/loader.gif`}
    type='image/svg+xml'
    alt='Loading Kinetic Dashboard'
  />
))

export const WaitingComponent = (Component) => (props) => (
  <Suspense fallback={<Loading variant='light' />}>
    <Component {...props} />
  </Suspense>
)
