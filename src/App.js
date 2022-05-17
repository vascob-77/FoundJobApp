//Librairies
import { ThemeProvider } from "styled-components";
//Components
import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./styles/globalStyleHTML";
//Style
import { theme } from "./styles/theme";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
