import React from 'react'
import {Description, Experience, Information, Profile, SocialMedia} from '../components';

export const Resume: React.FC = () => (
  <div className="container space-2">
    <div className={'row'}>
      <div className={'col-lg-3 mb-7 mb-lg-0'}>
        <Profile />
        <SocialMedia />
      </div>
      <div className={'col-lg-9'}>
        <Description />
        <Information />
        <Experience />
      </div>
    </div>
  </div>
)
