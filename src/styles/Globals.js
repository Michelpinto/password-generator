import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize};

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

html {
    font-size: 62.5%;

    @media ${(props) => props.theme.breakpoints.xs} {
        font-size: 50%;
    }
}

body {
    font-family: "Robotto", sans-serif;
    color: #ebebeb
}



a {
    color: inherit;
    text-decoration: none;
}


`;

export default GlobalStyles;
