import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./Theme";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.bg};
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  html {
    font-size: 62.5%;
  }
  
  @media (max-width: 670px) {
    html {
      font-size: 50%;
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<Router>
				<App />
			</Router>
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
);
