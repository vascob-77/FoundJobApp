//Librairies
import React from "react";
//Components
import { SearchContainer, SearchJob, FutureJob, Location } from "./SearchStyles";
import { Button } from "../globalStyleComponents";
//Icons
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FcSearch } from "react-icons/fc";

const Search = () => {
  return (
    <SearchContainer>
      <h2>Découvrez les offres d’emploi</h2>
      <SearchJob>
        <form>
          <FutureJob>
            <AiOutlineSearch />
            <input type="text" placeholder="Votre futur job" />
          </FutureJob>

          <Location>
            <GoLocation />
            <input type="text" placeholder="Localisation" />
          </Location>
          <div>
            Contrat <AiOutlineDown />
          </div>
        </form>
      </SearchJob>
      <Button>
        <FcSearch /> Rechercher
      </Button>
    </SearchContainer>
  );
};

export default Search;
