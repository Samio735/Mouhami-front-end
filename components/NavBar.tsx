"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});
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
        <Link href="/">
          <NavbarBrand className="flex font-medium text-lg">
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

            <p className={inter.className}>Mouhami</p>
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" ">
          <Link href="/joindre">Joindre</Link>
        </NavbarItem>
        <NavbarItem className=" ">
          <Link href="/login">Se connecter</Link>
        </NavbarItem>

        {/* <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="flex items-center gap-2 py-2" color="primary">
                <Avatar
                  src="https://i.pravvatar.cc/150?u=a04258114e29026302dkkkkkkkkkkkkkkkkkk"
                  size="md"
                  showFallback
                  classNames={{ icon: "text-black" }}
                />
                <h2 className="">Said Nouasria</h2>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem href="/my-bookings" key={"bookings"}>
                Mes rendez-vous
              </DropdownItem>
              <DropdownItem key="edit" href={"/profile"}>
                Mon profile
              </DropdownItem>
              <DropdownItem key="edit" href={"/edit"}>
                Edit profile
              </DropdownItem>
              <DropdownItem
                href="/"
                key="logout"
                className="text-danger"
                color="danger"
              >
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
