import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { Theme } from '@mui/material/styles';

declare module '@mui/styles' {
    interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
    spacing: 10,
    palette,
    // overrides,
    typography,
    components: {
        MuiCssBaseline: {},
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 9999,
                    borderWidth: 4,
                    borderColor: palette.primary.main,
                    '&:hover': {
                        borderWidth: 4,
                        backgroundColor: palette.primary.main,
                        color: palette.common.white
                    }
                }
                // contained: {
                //     borderWidth: 4,
                //     '&:hover': {
                //         borderWidth: 4
                //     }
                // },
                // outlined: {
                //     '&:hover': {
                //         borderWidth: 4
                //     }
                // }
            }
        }
    }
});
