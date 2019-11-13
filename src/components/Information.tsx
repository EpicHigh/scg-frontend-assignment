import React from 'react'

export const Information: React.FC = () => (
  <>
    <div className="row">
      <div className="col-md-6">
        <ul className="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
          <li className="list-group-item pt-0 pb-4">
            <div className="media">
              <span className="fas fa-envelope list-group-icon mr-3" />
              <div className="media-body text-lh-sm">
                <span className="d-block mb-1">Email:</span>
                <a href="mailto:prasit_tongpradit@windowslive.com">
                  prasit_tongpradit@windowslive.com
                </a>
              </div>
            </div>
          </li>
          <li className="list-group-item pt-0 pb-4">
            <div className="media">
              <span className="fas fa-link list-group-icon mr-3" />
              <div className="media-body text-lh-sm">
                <span className="d-block mb-1">GitHub:</span>
                <a href="https://github.com/EpicHigh">
                  https://github.com/EpicHigh
                </a>
              </div>
            </div>
          </li>
          <li className="list-group-item pt-0 pb-4">
            <div className="media">
              <span className="fas fa-map-marker-alt list-group-icon mr-3" />
              <div className="media-body text-lh-sm">
                <span className="d-block mb-1">Location:</span>
                <a href="#">Samut Sakhon, Thailand</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="col-md-6">
        <ul className="list-group list-group-transparent list-group-flush list-group-borderless mb-0">
          <li className="list-group-item pt-0 pb-4">
            <div className="media">
              <span className="fas fa-birthday-cake list-group-icon mr-3" />
              <div className="media-body text-lh-sm">
                <span className="d-block mb-1">Birthday:</span>
                <span className="d-block text-muted">December 8, 1995</span>
              </div>
            </div>
          </li>
          <li className="list-group-item pt-0 pb-4">
            <div className="media">
              <span className="fas fa-building list-group-icon mr-3" />
              <div className="media-body text-lh-sm">
                <span className="d-block mb-1">Organization:</span>
                <a href="https://www.refinitiv.com/en">Refinitiv</a>
              </div>
            </div>
          </li>
          <li className="list-group-item pt-0 pb-4">
            <div className="media">
              <span className="fas fa-mobile-alt list-group-icon mr-3" />
              <div className="media-body text-lh-sm">
                <span className="d-block mb-1">Phone number:</span>
                <a href="#">+66(8)7-715-6651</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <hr className="my-7" />
  </>
)
