// AdminLayout.js
import React from 'react';
import Container from '@mui/material/Container';

const AdminLayout = ({ children }) => {
    return (
        <Container>
            {/* Add any common elements for the admin layout */}
            <header>Admin Header</header>
            <nav>Admin Navigation</nav>
            <main>{children}</main>
            <footer>Admin Footer</footer>
        </Container>
    );
};

export default AdminLayout;
