import React, { Children, ReactNode } from 'react';
import { Container, Grid, Button, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
    toolBarTypoColor: {
        flexGrow: 1
    }
}));

export interface IMainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.toolBarTypoColor} component="div" variant="h3">
                        Title
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" disableGutters={false}>
                {children ?? false}
            </Container>
        </Grid>
    );
};

export default MainLayout;
