import React from 'react';
import { Outlet, useLocation } from 'react-router';
import {
  Container, Nav, NavItem, NavLink,
} from 'reactstrap';

const menu = [
  {
    id: 1,
    link: '/',
    title: 'Home',
  },
  {
    id: 2,
    link: '/posts',
    title: 'Posts',
  },
  {
    id: 3,
    link: '/about',
    title: 'About',
  },
];

const DefaultLayout = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Container>
        <Nav>
          {
            menu.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  active={item.link === pathname}
                  href={item.link}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            ))
          }
        </Nav>
      </Container>
      <Container>
        <Outlet />
      </Container>
    </Container>
  );
};

export default DefaultLayout;
