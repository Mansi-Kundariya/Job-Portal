import { createTheme } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        white: "#ffffff",
        black: "#000000",
        main: "#00b98e",
        dark: "#254035",
        light: "#e2f9ee",

        gradient: {
            main: "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)"
            // main: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%);"
        },
        primary:{
            // main: blue[500]
            main: "#00bf58",
            bg: "#e2f9ee"
        },
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#020026"
        }
    }
})