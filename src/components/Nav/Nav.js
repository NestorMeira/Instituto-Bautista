import'./Nav.scss'
import { useState } from 'react';
import{Link} from'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


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



  const useStyles = {
    customAppBar: {
      backgroundColor: 'transparent', 
      boxShadow: 'none',
    },
    customTypography: {
      color: 'black', // Letras negras
    },
    customIconButton: {
      color: 'black', // Iconos negros
    },
  };
  

  

  return (


      <AppBar  position="static" style={useStyles.customAppBar}>
        <Container className='cotenedor' maxWidth="xl">
          <Toolbar disableGutters>
            <Link className='linea' to='/contacto'>
          <img className='logo' src='/assets/logo.png' alt='imagen'/>
          </Link>
          <h4>IBC ELDORADO</h4>
          
            <Box className='menu' sx={{ flexGrow: 1, marginLeft:'16%',display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'left',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  marginLeft:'-0.8%',display: { xs: 'block', md: 'none' },
                }}
              >
                  <div className='menuItem'>
                  <MenuItem sx={{display: 'block'}} key={pages} onClick={handleCloseNavMenu}>
                  <Link className='linea' to='/nosotros'>
                    <Button className='boton'
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textAlign:'center', width:'84%' }}
                > nosotros
                  {pages.nosotros}
                </Button>
                </Link>
                <Link className='linea' to='/niveles'>
                <Button className='boton' 
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textAlign:'center', width:'80%' }}
                >niveles
                  {pages.niveles}
                </Button>
                </Link>
                <Link className='linea' to='/contacto'>
                <Button className='boton'
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textAlign:'center', width:'80%' }}
                >inicio
                  {pages.contacto}
                </Button>
                </Link>
                <div className='redes2'>
              <a href="https://www.facebook.com/Instituto-Bautista-del-Centro-1285019808241413" className='linea'><FacebookOutlinedIcon className='face'/></a>
              <a href="https://api.whatsapp.com/send?phone=5493751502744&text=Hola%21%20Buen%20dia%20" className='linea'><WhatsAppIcon className='wpp'/></a>          
            </div>
                  </MenuItem>
                  </div>
              </Menu>
            </Box>
          
            
               
              <Box sx={{color:'black' ,flexGrow: 2,paddingLeft:'17%',display: { xs: 'none', md: 'flex' }}}> 
                <>
                <Link className='linea' to='/nosotros'>
                <Button
                  key={pages}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,height:'50%',width:'96px',backgroundColor:'#e0742ce9',color:'#fafafa',textShadow:'2px 2px 5px rgba(92, 91, 91, 0.465)',boxShadow:'2px 2px 5px rgba(63, 63, 63, 0.465)',fontWeight:'bold',display: 'block' }}
                >nosotros
                  {pages.nosotros}
                </Button>
                </Link>
                       <Link className='linea' to='/niveles'>
                       <Button 
                         key={pages}
                         onClick={handleCloseNavMenu}
                         sx={{ my: 2,height:'50%',width:'95px',marginLeft:'10%', backgroundColor:'#e0742ce9',color:'#fafafa',textShadow:'2px 2px 5px rgba(92, 91, 91, 0.465)',boxShadow:'2px 2px 5px rgba(63, 63, 63, 0.465)', display: 'block' ,fontWeight:'bold'}}
                       >niveles
                         {pages.niveles}
                       </Button>
                       </Link>
                              <Link className='linea' to='/contacto'>
                              <Button 
                                key={pages}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2,height:'50%',width:'95px',marginLeft:'15%',backgroundColor:'#e0742ce9',color:'#fafafa',textShadow:'2px 2px 5px rgba(92, 91, 91, 0.465)',boxShadow:'2px 2px 5px rgba(63, 63, 63, 0.465)', display: 'block',fontWeight:'bold'}}
                              >inicio
                                {pages.contcto}
                              </Button>
                              </Link>
                              </>
            </Box>
            <div className='redes'>
              <a href="https://www.facebook.com/Instituto-Bautista-del-Centro-1285019808241413" className='linea'><FacebookOutlinedIcon className='face'/></a>
              <a href="https://api.whatsapp.com/send?phone=5493751502744&text=Hola%21%20Buen%20dia%20" className='linea'><WhatsAppIcon className='wpp'/></a>          
            </div>
<Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
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