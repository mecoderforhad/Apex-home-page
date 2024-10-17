import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { Box, Tab, Tabs, AppBar, Drawer, Toolbar, Typography, IconButton, useMediaQuery } from '@mui/material';

import { navData } from '../config-nav-dashboard';

const Navbar: React.FC = () => {
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Tabs value={value} onChange={handleChange} orientation="vertical" sx={{ width: '100%' }}>
        {navData?.map((nav, index) => (
          <Tab
            key={nav.title}
            label={nav.title}
            component={Link}
            to={nav.path}
            onClick={() => setValue(index)}
          />
        ))}
      </Tabs>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: '#333',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '10px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src={isSmallScreen ? "/apex_Icon.png" : "/apex_logo.png"} alt="Logo" style={{ height: '60px', marginRight: '8px' }} />
          </Typography>

          {/* Icon button to open the drawer on small screens */}
          {isSmallScreen && (
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}

          {/* Render Tabs normally for larger screens */}
          {!isSmallScreen && (
            <Tabs value={value} onChange={handleChange} centered>
              {navData?.map((nav, index) => (
                <Tab
                  key={nav.title}
                  label={nav.title}
                  component={Link}
                  to={nav.path}
                  onClick={() => setValue(index)}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer component for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
