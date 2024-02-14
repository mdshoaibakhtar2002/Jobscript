import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import Switches from '../Modes/Switches';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FloaterCard from './FloaterCard';
import CloseIcon from '@mui/icons-material/Close';

const pages = ['Dashboard', 'Fulltime Job', 'Internships'];
const settings = ['Profile', 'Account', 'Setting', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [userName, setUserName] = React.useState()
  const [showAppBar, setShowAppBar] = React.useState(false)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (e, page) => {
    setAnchorElUser(null);
    if (page === "Logout") {
      navigate("/auth/")
      setUserName('')
    }
    if (page === "Fulltime Job") {
      navigate("/fulltimejob")
    }
  };
  const navigate = useNavigate();
  const gotoPage = (page) => {
    if (page === "Dashboard") {
      navigate("/")
    }
    if (page === "Fulltime Job") {
      navigate("/fulltimejob")
    }
  }
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [contentToShow, setContentToShow] = React.useState(null)
  const toggleDrawer = () => (event) => {
        if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(!showDrawer);
    // setContentToShow()
  };
  // React.useEffect(() =>{
  //   const userData = localStorage.getItem("newUserDetails")
  //   // console.log(JSON.parse(userData))
  //   if(userData && JSON.parse(userData)){
  //     setUserName(JSON.parse(userData)?.['firstName'])
  //   }

  // },[])
  React.useEffect(() =>{
    if((window.location.pathname).includes('auth')){
      setShowAppBar(false)
    }else{
      setShowAppBar(true)
    }
  },[window.location.pathname])
  return (
    <AppBar position="static" className='custom-navbar' sx={{backgroundColor:'white', display:showAppBar ? 'block':'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fill: "#757575" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            id="company-name"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#757575',
              textDecoration: 'none',
            }}
          >
            JOBSCRIPT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#757575"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => gotoPage(page)}>
                  <Typography textAlign="center" color="#757575" className=''>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            id="company-name"
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
            JOBSCRIPT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => gotoPage(page)}
                sx={{ my: 2, color: '#757575', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* <Switches/> */}
          
          {!userName ?
          <Box onClick={toggleDrawer()}>
            <AccountCircleOutlinedIcon sx={{ cursor: 'pointer' , fill:'black'}} />
            <Tooltip title="Add" arrow >
              <Button sx={{ color: "#757575" }} onClick={toggleDrawer()}>LogIn</Button>
            </Tooltip>
          </Box> :
          <Box sx={{ flexGrow: 0, display:'flex' }}>
            <Typography sx={{marginRight:'1rem', marginTop:'10px', color:'#757575', fontWeight:'600'}}>{userName}</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
                <MenuItem key={setting} onClick={(e) => handleCloseUserMenu(e, setting)}>
                  <Typography textAlign="center" color="">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>}
          {/* {userName ? } */}
        </Toolbar>
      </Container>
      {/* {showDrawer && <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer(null)}>
        <CloseIcon sx={{ cursor: 'pointer' }} />
      </IconButton>} */}
      <FloaterCard showDrawer={showDrawer} toggleDrawer={toggleDrawer} contentToShow={contentToShow} setShowDrawer={setShowDrawer}/>
    </AppBar>
  );
}
export default ResponsiveAppBar;