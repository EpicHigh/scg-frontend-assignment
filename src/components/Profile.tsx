import React from 'react'

export const Profile: React.FC = () => (
  <div className={'card p-1 mb-4'}>
    <div className={'card-body text-center'}>
      <div className="mb-3">
        <img
          className="u-lg-avatar rounded-circle profile-media"
          src="./logo/profile.jpeg"
          alt="Image Description"
        />
      </div>
      <div className="mb-3">
        <h1 className="h6 font-weight-medium mb-0">Prasit Tongpradit</h1>
        <small className="d-block text-muted">
          Software Engineer (Technology Graduate Trainee)
        </small>
      </div>
    </div>
  </div>
)
