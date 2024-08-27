import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import logo from "../../public/assets/icons/earth.svg";
export default function Nav() {
  return (
    <nav className="bg-[#F55A5A] px-10 flex justify-between h-14 items-center text-white ">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" />
        <h1>my travel journal.</h1>
      </div>
      <div>
        <Menu>
          <MenuButton>Menu</MenuButton>
          <MenuItems anchor="bottom" className="flex flex-col">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={focus ? "bg-black text-white" : " text-gray-600"}
                >
                  Home
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={focus ? "bg-black text-white" : " text-gray-600"}
                >
                  About
                </a>
              )}
            </MenuItem>

            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={focus ? "bg-black text-white" : " text-gray-600"}
                >
                  Contact
                </a>
              )}
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}
