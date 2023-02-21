import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { GlobalContext } from "./context/globalContext";
import Guest from "./Guest";

const theme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider
        theme={theme}
        children={
          <GlobalContext>
            <Guest />
          </GlobalContext>
        }
      />
    </>
  );
}

export default App;
