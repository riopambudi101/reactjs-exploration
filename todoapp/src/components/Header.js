import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

export default function Header() {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand>ToDo App</NavbarBrand>
      </Container>
    </Navbar>
  );
}
