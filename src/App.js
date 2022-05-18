//Librairies
import { ThemeProvider } from "styled-components";
//Components
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import GlobalStyles from "./styles/globalStyleHTML";
//Style
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Search />
      </ThemeProvider>
    </>
  );
}

export default App;
