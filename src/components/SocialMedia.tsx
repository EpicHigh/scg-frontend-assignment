import React from 'react'

export const SocialMedia: React.FC = () => (
  <div className={'card mb-4'}>
    <div className="card-header pt-4 pb-3 px-0 mx-4">
      <h3 className="h6 mb-0">Social Profiles</h3>
    </div>
    <div className="card-body pt-3 pb-4 px-4">
      <a className="media mb-4" href="https://medium.com/@prasittongpradit" target={'_blank'}>
        <div className="u-sm-avatar mr-3">
          <img
            className="img-fluid social-media"
            src="./logo/medium.svg"
            alt="Image Description"
          />
        </div>
        <div className="media-body">
          <span className="d-block text-dark">Medium</span>
        </div>
      </a>
      <a className="media mb-4" href="https://www.linkedin.com/in/prasit-tongpradit/" target={'_blank'}>
        <div className="u-sm-avatar mr-3">
          <img
            className="img-fluid social-media"
            src="./logo/linkedin.png"
            alt="Image Description"
          />
        </div>
        <div className="media-body">
          <span className="d-block text-dark">LinkedIn</span>
        </div>
      </a>
    </div>
  </div>
)
