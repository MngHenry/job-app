import React, { useState, createContext } from "react";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ModeContext = createContext();
function App() {
  const [modeValue, setModeValue] = useState(1);
  const [searchInput, setSearchInput] = useState();
  const handleChangeMode = () => {
    setModeValue(modeValue === 1 ? 0 : 1);
  };
  const prefersDarkMode = useMediaQuery(
    modeValue === 1
      ? "(prefers-color-scheme: light)"
      : "(prefers-color-scheme: dark)"
  );

  const Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <div>
      <ModeContext.Provider
        value={{ handleChangeMode, searchInput, setSearchInput }}
      >
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs/:id" element={<DetailPage />} />
          </Routes>
        </ThemeProvider>
      </ModeContext.Provider>
    </div>
  );
}

export default App;
