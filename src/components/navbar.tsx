import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-background/40 backdrop-blur-sm px-5 py-4 fixed w-full top-0 left-0 z-10">
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
