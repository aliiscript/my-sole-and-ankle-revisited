/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS, COLORS } from '../../constants';
import "@reach/dialog/styles.css";
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <ClosedBtn>
          <Icon id="close" />
        </ClosedBtn>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>  
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220deg 5% 40% / .8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ClosedBtn = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 26px;
`;


const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  /* &:first-of-type {
    color: ${COLORS.secondary};
  } */
`;

export default MobileMenu;
