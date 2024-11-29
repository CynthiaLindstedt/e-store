import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#3b82f6',
        },
        secondary: {
            main: '#f97316',
        },
    },
    typography: {
        fontFamily: 'inherit',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
})

export default theme

