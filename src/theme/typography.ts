import { TypographyOptions } from '@mui/material/styles/createTypography';
import { palette } from './palette';
export const typography: TypographyOptions = {
    fontFamily: 'Sen',
    h1: {
        fontFamily: '"BandeinsStange Bold Extended Half", "Sen"',
        color: palette.primary.main,
        fontSize: 96
    },
    h2: {
        fontFamily: '"BandeinsStange Bold", "Sen"',
        color: palette.primary.main,
        fontSize: 60
    },
    h3: {
        fontFamily: '"BandeinsStange Bold", "Sen"',
        color: palette.primary.main,
        fontSize: 48
    },
    h4: {
        fontFamily: '"BandeinsStange Bold", "Sen"',
        color: palette.primary.main,
        fontSize: 34
    },
    h5: {
        fontFamily: '"BandeinsStange Bold", "Sen"',
        color: palette.primary.main,
        fontSize: 24
    },
    h6: {
        fontFamily: '"BandeinsStange Bold", "Sen"',
        color: palette.primary.main,
        fontSize: 20
    },
    body1: {
        fontFamily: 'Sen',
        color: palette.primary.main,
        fontSize: 17,
        fontStyle: 'normal'
    },
    body2: {
        fontFamily: 'Sen',
        color: palette.primary.main,
        fontSize: 15,
        fontStyle: 'normal'
    },
    subtitle1: {
        fontFamily: 'Sen',
        color: palette.primary.main,
        fontSize: 16,
        fontWeight: 'bold'
    },
    subtitle2: {
        fontFamily: 'Sen',
        color: palette.primary.main,
        fontSize: 14,
        fontWeight: 'bold'
    },
    button: {
        fontFamily: 'Sen',
        fontSize: 15,
        fontWeight: 'bold'
    }
};
