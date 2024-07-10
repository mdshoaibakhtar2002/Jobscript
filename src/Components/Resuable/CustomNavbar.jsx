import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, TextField, OutlinedInput, Badge } from '@mui/material';
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
import { Loading } from '../../Redux/Reducer';
import { useDispatch } from 'react-redux';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { getToken, removeToken } from '../Utilities/HelperUtils';

const pages = ['Dashboard', 'Fulltime Job', 'Internships', 'Company Reviews', 'Hackathon', 'Community', 'Job Posting'];
const settings = ['Profile', 'Account', 'Setting', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [userName, setUserName] = React.useState(getToken())
  const [showAppBar, setShowAppBar] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const dispatch = useDispatch();


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
      removeToken()
    }
    if (page === "Fulltime Job") {
      navigate("/fulltimejob")
    }
    if (page === "Job Posting") {
      navigate("/jobpost")
    }
  };
  const navigate = useNavigate();
  const gotoPage = (page) => {
    handleCloseNavMenu()
    if (page === "Dashboard") {
      navigate("/")
    }
    if (page === "Fulltime Job") {
      navigate("/fulltimejob")
    }
    if (page === "Job Posting") {
      navigate("/jobpost")
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
  React.useEffect(() => {
    // const userData = localStorage.getItem("newUserDetails")
    // // console.log(JSON.parse(userData))
    // if(userData && JSON.parse(userData)){
    //   setUserName(JSON.parse(userData)?.['firstName'])
    // }
    // setUserName("Harry")
  }, [])
  React.useEffect(() => {
    if ((window.location.pathname).includes('auth')) {
      setShowAppBar(false)
    } else {
      setShowAppBar(true)
    }
  }, [window.location.pathname])
  const gotoLoginPage = () => {
    dispatch(Loading(true))
    setTimeout(() => {
      dispatch(Loading(false))
      navigate("/auth/")
      // setUserName('Harry')
    }, 4000);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (action) => {
    setAnchorEl(null);
    if(action === 'log_out'){
      navigate("/auth/")
      // setUserName('')
      removeToken()
    }
  };
  return (
    <AppBar position="fixed" className='custom-navbar' sx={{ backgroundColor: 'white', display: showAppBar ? 'block' : 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fill: "#757575" }} />
          <Typography variant="h6" noWrap component="a" href="/" id="company-name" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#757575', textDecoration: 'none' }}>
            JOBSCRIPT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="#757575">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav}
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
              sx={{ display: { xs: 'block', md: 'none' } }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => gotoPage(page)}>
                  <Typography textAlign="center" color="#757575" className=''>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography variant="h5" noWrap component="a" href="/" id="company-name" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
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

          {/* <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
            <OutlinedInput placeholder='Search' size='small' onChange={(e) => setSearch(e.target.value)} value={search}
              endAdornment={
                <InputAdornment position="end">
                  {
                    search.length > 0 ?
                        <IconButton aria-label="toggle password visibility" edge="end" onClick={() => setSearch('')} >
                          <ClearIcon />
                        </IconButton>:
                        <IconButton aria-label="toggle password visibility" edge="end">
                          <SearchIcon />
                        </IconButton>
                  }
                </InputAdornment>
              }
            />
          </FormControl> */}
          {getToken() === undefined ?
            <Box>
              <AccountCircleOutlinedIcon sx={{ cursor: 'pointer', fill: 'black' }} />
              <Tooltip title="Login" arrow >
                <Button sx={{ color: "#757575" }} onClick={() => gotoLoginPage()}>LogIn</Button>
              </Tooltip>
            </Box> :
            
          <React.Fragment>
          <Badge badgeContent={4} color="primary" sx={{
            '.MuiBadge-badge':{
              background:'#ff5758'
            },
            '.MuiSvgIcon-root': {
              width: '2rem !important',
              height: '2rem !important',
              transition: 'transform 1s'
            },
             '.MuiSvgIcon-root:hover': {
              transform: 'scale(1.2)'
            },
            cursor: 'pointer'
          }}>
            <MailIcon color="action" />
          </Badge>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
              <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
            <Tooltip title='Test'>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={() => handleClose('close')}
            onClick={() => handleClose('close')}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => handleClose('my_account')}>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon> My account
            </MenuItem>
            <MenuItem onClick={() => handleClose('setting')}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={() => handleClose('help_centre')}>
              <ListItemIcon>
                <HelpOutlineOutlinedIcon fontSize="small" />
              </ListItemIcon>
              Help centre
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleClose('log_out')}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
          }
        </Toolbar>
      </Container>
      {/* {showDrawer && <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer(null)}>
        <CloseIcon sx={{ cursor: 'pointer' }} />
      </IconButton>} */}
      <FloaterCard showDrawer={showDrawer} toggleDrawer={toggleDrawer} contentToShow={contentToShow} setShowDrawer={setShowDrawer} />
    </AppBar>
  );
}
export default ResponsiveAppBar;