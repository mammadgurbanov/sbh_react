import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navbar from '../components/layouting/Navbar'
import './layout.scss'


const MainLayout = ({children}) => {
    return (
        <React.Fragment>
            <Navbar/>
            <CssBaseline/>
            <Container maxWidth="xl">
                <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}>
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    );
};


export default MainLayout

