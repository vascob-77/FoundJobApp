//Librairies
import React from "react";
import { FcSearch } from "react-icons/fc";
//Components
import logoFoundJob from "../../asset/images/logo.png";
import { Button } from "../globalStyleComponents";
//Styles
import { NavBar, Container, Search } from "./NavBarStyle";

const Navbar = () => {
  return (
    <NavBar>
      <Container>
        <img src={logoFoundJob} width={125} />
        <p>Trouver un job</p>
        <Search>
          <p>Rechercher</p>
          <FcSearch />
        </Search>
        <Button>
            <p>Se connecter</p>
        </Button>
      </Container>
    </NavBar>
  );
};

export default Navbar;
