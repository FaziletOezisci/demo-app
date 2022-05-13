import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import './index.css';
import HomePage from './pages/Home';

export interface IApplicationPageProps {}

const App: React.FunctionComponent<IApplicationPageProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
