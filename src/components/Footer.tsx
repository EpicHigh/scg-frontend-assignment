import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-5 bg-white">
      <div className="container text-center space-1 p-4">
        <Link
          className="d-inline-flex justify-content-center align-items-center mb-2"
          to={'/'}
          aria-label="Go to homepage."
        >
          <img width={'20%'} src={'./Scg.png'} alt={'SCG Logo'} />
        </Link>
        <p className="small text-muted">
          © SCG. 2019 Frontend. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
