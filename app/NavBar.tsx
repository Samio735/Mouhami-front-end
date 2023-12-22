"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-primary1",
      }}
      className="text-white "
    >
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <Link href="/">
          <NavbarBrand className="flex font-thin">
            <svg
              width="35"
              height="31"
              viewBox="0 0 45 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_97_234"
                maskUnits="userSpaceOnUse"
                x="0"
                y="1"
                width="45"
                height="40"
              >
                <path
                  d="M0 1.61719H44.3638V30.9309L20.049 40.8976L0 31.5172V1.61719Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_97_234)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.55701 9.60547V85.7638H21.3731V9.80187L5.55701 9.60547ZM9.40417 13.558V81.9166H17.526V13.7775L9.40417 13.558Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.0829 13.9089V82.1478H31.2047V13.4699L23.0829 13.9089ZM19.2357 9.80198V85.995H35.0518V9.40918L19.2357 9.80198Z"
                  fill="white"
                />
              </g>
              <path
                d="M7.26672 4.70215L20.0906 4.80998L32.9145 4.70215V7.5519L20.0906 7.65973L7.26672 7.5519V4.70215Z"
                fill="white"
              />
              <path
                d="M11.114 0L20.5182 0.107828L29.9224 0V2.84975L20.5182 2.95758L11.114 2.84975V0Z"
                fill="white"
              />
            </svg>

            <p className="font-bold text-inherit">Mouhami</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Sign up</Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} href="#" variant="solid">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
