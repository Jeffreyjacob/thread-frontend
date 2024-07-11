import React from "react"
import ThreadLogo from '../assets/images/Frame.png';
import { NavLink, useLocation } from "react-router-dom";
import { Heart, House, Search, User } from "lucide-react";
import { cn } from "../lib/utils";
import LogoutPopover from "../components/shared/LogoutPopover";
import CreatePostPopOver from "../components/shared/CreatePostPopOver";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation()
  return (
    <div className="w-full h-full sm:flex bg-primary-primarybackground relative">
      {/**Navbar for big screens */}
      <nav className=" hidden w-[80px] sm:flex flex-col items-center
       py-4 fixed  h-full justify-between">
        <img src={ThreadLogo} width={35} />
        <ul className="flex flex-col gap-2">
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/" >
              <House className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/"
              })} />
            </NavLink>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/search">
              <Search className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/search"
              })} />
            </NavLink>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/like">
              <Heart className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/like"
              })} />
            </NavLink>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/profile">
              <User className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/profile"
              })} />
            </NavLink>
          </li>
        </ul>
        <div>
          <LogoutPopover/>
        </div>
      </nav>

      {/**Navbar small screen */}
      <nav className="sm:hidden w-full  bottom-0 bg-primary-primarybackground/50 fixed">
        <ul className="flex justify-evenly gap-2">
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/" >
              <House className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/"
              })} />
            </NavLink>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/search">
              <Search className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/search"
              })} />
            </NavLink>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <CreatePostPopOver Option="smallSize"/>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/like">
              <Heart className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/like"
              })} />
            </NavLink>
          </li>
          <li className="p-4 hover:bg-primary-secondarybackground rounded-lg">
            <NavLink to="/profile">
              <User className={cn(`text-primary-iconColor w-7 h-7`, {
                "text-primary-primaryText": pathname === "/profile"
              })} />
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className=" sm:flex-1 min-h-screen">
        {children}
      </div>
      <div className="hidden sm:flex fixed bottom-7 right-5">
         <CreatePostPopOver Option="largeSize"/>
      </div>
    </div>
  )
}

export default Layout