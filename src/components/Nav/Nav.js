import'./Nav.scss'
import { useState } from 'react';
import{Link} from'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['nosotros', 'niveles', 'contacto'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (


      <AppBar  position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <img className='logo' src='/assets/logo.png' alt='imagen'/>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
               
                  <MenuItem key={pages} onClick={handleCloseNavMenu}>
                    <div className='menuItem'>
                  <Link className='linea' to='/nosotros'>
                    <Button className='boton'
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >nosotros
                  {pages.nosotros}
                </Button>
                </Link>
                <Link className='linea' to='/niveles'>
                <Button className='boton'
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >niveles
                  {pages.niveles}
                </Button>
                </Link>
                <Link className='linea' to='/contacto'>
                <Button className='boton'
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >contacto
                  {pages.contacto}
                </Button>
                </Link>
                </div>
                  </MenuItem>
              
              </Menu>
            </Box>
           
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
             
            
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            </Typography>   
           <Box sx={{color:'inherit', flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              
                <>
                <Link className='linea' to='/nosotros'>
                <Button
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >nosotros
                  {pages.nosotros}
                </Button>
                </Link>
                       <Link className='linea' to='/niveles'>
                       <Button 
                         key={pages}
                         onClick={handleCloseNavMenu}
                         sx={{ my: 2, color: 'white', display: 'block' }}
                       >niveles
                         {pages.niveles}
                       </Button>
                       </Link>
                              <Link className='linea' to='/'>
                              <Button 
                                key={pages}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                              >contacto
                                {pages.contcto}
                              </Button>
                              </Link>
                              </>
            </Box>
           
            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Button textAlign="center">{setting}</Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    
  );
}
export default ResponsiveAppBar;