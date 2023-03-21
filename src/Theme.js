import { ThemeProvider } from "styled-components";

const coolTheme = {
    // add style here
    // colors:{
    //     'red': '#0000'
    // },
    // fonts: ['sans-serif'],
    // fontSize : {
    //     large: '3rem',
    //     medium: '1.5rem',
    //     small: '0.5rem'
    // }
};

export default function Theme ({children}){
    return <ThemeProvider theme={coolTheme}>
        {children}
    </ThemeProvider>
}