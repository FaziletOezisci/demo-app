import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import './index.css';
import HomePage from './pages/Home';
import StyleGuidePage from './pages/StyleGuide';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/Dashboard';

export interface IApplicationPageProps {}

const App: React.FunctionComponent<IApplicationPageProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout>
                                <HomePage />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/Dashboard"
                        element={
                            <MainLayout>
                                <DashboardPage />
                            </MainLayout>
                        }
                    />
                    <Route
                        path="/StyleGuide"
                        element={
                            <MainLayout>
                                <StyleGuidePage />
                            </MainLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
