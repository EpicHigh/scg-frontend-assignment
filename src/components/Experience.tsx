import React from 'react'

export const Experience: React.FC = () => (
  <>
    <div className={'row mb-7'}>
      <div className="col-md-6 mb-7 mb-md-0">
        <div className="mb-3">
          <h3 className="h6 mb-0">Work experience</h3>
        </div>

        <div className="d-flex mb-5">
          <img
            className="u-avatar align-self-center mr-4"
            src="./logo/refinitiv.png"
            alt="Nextzy Technologies Logo"
          />
          <div>
            <small className="d-block text-secondary">Jun 2019 – Sep 2019</small>
            <h4 className="h6 mb-0">Software Engineer (Technology Graduation Trainee)</h4>
            <span className="d-block text-secondary">at Refinitiv - Bangkok, Thailand</span>
          </div>
        </div>
        <div className="d-flex mb-5">
          <img
            className="u-avatar align-self-center mr-4"
            src="./logo/nextzy.png"
            alt="Nextzy Technologies Logo"
          />
          <div>
            <small className="d-block text-secondary">Nov 2018 - May2019</small>
            <h4 className="h6 mb-0">Frontend Developer</h4>
            <span className="d-block text-secondary">at Nextzy Technologies - Bangkok, Thailand</span>
          </div>
        </div>
        <div className="d-flex">
          <img
            className="u-avatar align-self-center mr-4"
            src="https://via.placeholder.com/160"
            alt="Incubate Co., Ltd. Logo"
          />
          <div>
            <small className="d-block text-secondary">
              Sep 2018 - Oct 2018
            </small>
            <h4 className="h6 mb-0">Angular Developer (Intern)</h4>
            <span className="d-block text-secondary">
              at Incubate Co., Ltd. - Bangkok, Thailand
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3 mb-md-0">
        <div className="mb-3">
          <h3 className="h6 mb-0">Education</h3>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-4">
            <img
              className="img-fluid"
              src="./logo/Mahidol_U.png"
              alt="Mahidol University Logo"
            />
          </div>
          <div className="col-8">
            <small className="d-block text-secondary">
              2014 - 2018
            </small>
            <h4 className="h6 mb-0">Bachelor of Arts (B.A.), English Language and Literature/Letters</h4>
            <span className="d-block text-secondary">Mahidol University</span>
          </div>
        </div>
      </div>
    </div>
  </>
)
