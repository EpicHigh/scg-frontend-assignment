import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar as NavbarStrap, NavbarBrand, NavItem } from 'reactstrap'

export const Navbar: React.FC = () => (
  <div className={'container'}>
  <NavbarStrap color={'white'} light={true} expand="md">
    <NavbarBrand href={'/'}>
      <img width={'10%'} src={'./Scg.png'} alt={'SCG Logo'} />
    </NavbarBrand>
    <Nav className="ml-auto" navbar={true}>
      <NavItem>
        <Link className={'nav-link'} to={'/'}>
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link className={'nav-link'} to={'/scg'}>
          SCG
        </Link>
      </NavItem>
      <NavItem>
        <Link className={'nav-link'} to={'/resume'}>
          Resume
        </Link>
      </NavItem>
      <NavItem>
        <Link className={'nav-link'} to={'/restaurants'}>
          Restaurants
        </Link>
      </NavItem>
    </Nav>
  </NavbarStrap>
  </div>
)
