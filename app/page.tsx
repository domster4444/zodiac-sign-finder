"use client";

import { ModeToggle } from "./components/mode-toggle";
import { DatePickerForm } from "./components/date-picker-form";
import Image from "next/image";
import styled from "styled-components";
import Logo from "../public/assets/zodiac-sign-finder-logo.png";

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #0000001b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.078);
  position: sticky;
  top: 0;
  z-index: 100;
  padding-top: 4rem;

  img {
    width: 200px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #000;
  }
  font-size: 1.2rem;
`;

export default function Home() {
  return (
    <section>
      hi
      {/* <div className=' absolute top-50 right-2 z-50'>
        <ModeToggle />
      </div> */}
      {/* <div className='flex items-center justify-center  h-screen'>
        <DatePickerForm />
      </div> */}
    </section>
  );
}
