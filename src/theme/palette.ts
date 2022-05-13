import createPalette from '@mui/material/styles/createPalette';
import { common } from '@mui/material/colors';
import { brand, signal, decoration, greyShades } from './colors';
import React from 'react';

declare module '@mui/material/styles' {
    interface Palette {
        greyShades: {
            80: React.CSSProperties['color'];
            60: React.CSSProperties['color'];
            40: React.CSSProperties['color'];
            20: React.CSSProperties['color'];
            10: React.CSSProperties['color'];
            5: React.CSSProperties['color'];
            2: React.CSSProperties['color'];
        };
    }

    interface PaletteOptions {
        greyShades?: {
            80?: React.CSSProperties['color'];
            60?: React.CSSProperties['color'];
            40?: React.CSSProperties['color'];
            20?: React.CSSProperties['color'];
            10?: React.CSSProperties['color'];
            5?: React.CSSProperties['color'];
            2?: React.CSSProperties['color'];
        };
    }
}

export const palette = createPalette({
    common: {
        black: brand.black,
        white: brand.white
    },
    greyShades,
    primary: {
        light: greyShades[80],
        main: brand.black,
        dark: brand.black,
        contrastText: brand.white
    },
    secondary: {
        light: decoration.purple.light,
        main: decoration.purple.main,
        dark: decoration.purple.dark
    },
    error: {
        light: signal.red.light,
        main: signal.red.dark,
        dark: signal.red.dark
    },
    warning: {
        light: signal.orange.light,
        main: signal.orange.main,
        dark: signal.orange.dark
    },
    info: {
        light: decoration.turqoise.light,
        main: decoration.turqoise.main,
        dark: decoration.turqoise.dark
    },
    success: {
        light: signal.green.light,
        main: signal.green.main,
        dark: signal.green.dark
    }
});
