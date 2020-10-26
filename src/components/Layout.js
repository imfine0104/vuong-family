import React, { useState } from "react";
import "./Layout.css";
import Data from "../data/LayoutData";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Link } from "react-router-dom";

function onClickCart() {
  alert("\nChào Bạn!\nBạn đã click vào giỏ đi chợ.");
}
export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Layout">
      <div className="header"></div>
      <div className="header-menu">
        <Navbar color="light" light expand="md">
          <div className="layout_navbar--avata inline">
            <img
              width="100px"
              height="100px"
              src={Data.avata.src}
              alt={Data.avata.alt}
            />
          </div>
          <NavbarBrand className="inline" href="/">
            Vuong's family
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/about-us">About Us</Link>
                </NavLink>
              </NavItem>
              <NavItem
                onClick={onClickCart}
                className="layout_navbar--cart-icon"
              >
                <NavLink>
                  <img
                    width="25px"
                    height="20px"
                    src={Data.cartIcon.src}
                    alt={Data.cartIcon.alt}
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      {props.children}
    </div>
  );
}
