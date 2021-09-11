import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand>ToDo App</NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink
              href="https://halocoders.netlify.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              halocoders
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
