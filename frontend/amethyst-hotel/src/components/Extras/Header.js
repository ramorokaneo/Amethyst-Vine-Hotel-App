import React from 'react';
import { Home, Bed, Event, LocalOffer, Phone, Language, AccountCircle, ExitToApp } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, Container, Box, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  const navItems = [
    { icon: <Home style={{ color: 'white' }} />, link: '/home' },
    { icon: <Bed style={{ color: 'white' }} />, link: '/rooms' },
    { icon: <Event style={{ color: 'white' }} />, link: '/events' },
    { icon: <LocalOffer style={{ color: 'white' }} />, link: '/special-offers' },
    { icon: <Phone style={{ color: 'white' }} />, link: '/contact' },
    { icon: <Language style={{ color: 'white' }} />, link: '/language' },
    { icon: <AccountCircle style={{ color: 'white' }} />, link: '/profile' },
    { icon: <AccountCircle style={{ color: 'orange' }} />, link: '/admin-dashboard' }, // Use a different color for admin icon
    { icon: <ExitToApp style={{ color: 'white' }} />, link: '/login' },
  ];

  return (
    <AppBar position="static" style={headerStyle}>
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            Amethyst Vine
          </Typography>
          <Hidden mdDown>
            <Box display="flex" alignItems="center">
              <List component="nav" aria-labelledby="main navigation" style={{ display: 'flex', gap: '2rem', marginLeft: 'auto' }}>
                {navItems.map((item, index) => (
                  <ListItem button component={Link} to={item.link} key={index} style={{ borderRadius: '8px', padding: '8px', transition: 'background-color 0.3s' }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
