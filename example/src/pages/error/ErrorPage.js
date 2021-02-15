import React from 'react'
import { Button } from 'kinetic-ui'
import { Link } from 'react-router-dom'
import cn from './ErrorPage.module.scss'
const { PUBLIC_URL } = process.env

const ErrorPage = () => {
  return (
    <div className={cn.page}>
      <img
        className={cn.ghost}
        src={`${PUBLIC_URL}/404-ghost.svg`}
        type='image/svg+xml'
        alt='404 Ghost Error'
      />
      <div className={cn.box}>
        <img
          className={cn.image}
          src={`${PUBLIC_URL}/404.svg`}
          type='image/svg+xml'
          alt='404 Error'
          height={300}
        />
        <p className={cn.title}>Oops, looks like you are stranded!</p>
        <p className={cn.message}>
          The page you are trying to access is coming soon. Please navigate your
          way back to a working page.
        </p>
        <Link to='/'>
          <Button margin='30px 0px 0px 0px' width='max-content'>
            Back to Safety
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
