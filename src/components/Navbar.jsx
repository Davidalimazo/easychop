import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {Typography, ListItemIcon, ListItemText} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import me from '../assets/images/ayd.JPG'
import { notifications } from '../assets/JsonData/notification';
import { messages } from '../assets/JsonData/messages';
import { profile } from './../assets/JsonData/profile';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      const [mailAnchorEl, setMailAnchorEl] = React.useState(null);

    const mailOpen = Boolean(mailAnchorEl);

const handleMailClose=()=>{
  setMailAnchorEl(null)
}

    const handleMailClick=(e)=>{
      setMailAnchorEl(e.currentTarget)
    }

      const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);

    const profileOpen = Boolean(profileAnchorEl);

const handleCloseProfile=()=>{
  setProfileAnchorEl(null)
}

    const handleClickProfile=(e)=>{
      setProfileAnchorEl(e.currentTarget)
    }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [chatAnchorEl, setChatAnchorEl] = React.useState(null);

  const chatOpen = Boolean(chatAnchorEl);

const handleCloseChat=()=>{
  setChatAnchorEl(null)
}

    const handleClickChat=(e)=>{
      setChatAnchorEl(e.currentTarget)
    }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
          <MailIcon onClick={handleMailClick}/>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon onClick={handleClickChat}/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <Menu id='profile' anchorEl={profileAnchorEl} open={profileOpen} onClose={handleCloseProfile}>
         {
          profile && profile.map((item, i)=>{
            const {icon, text} = item;
            return(
              <MenuItem key={i}><ListItemIcon>{icon}</ListItemIcon><ListItemText>{text}</ListItemText></MenuItem>
            )
          })
         }
        </Menu>

        <Menu id='chat' anchorEl={chatAnchorEl} open={chatOpen} onClose={handleCloseChat}>
                 {
                  notifications && notifications.map((item, i)=>{
                    const {icon, content} = item;
                    return(
                      <MenuItem key={i}><ListItemIcon>{icon}</ListItemIcon><ListItemText>{content}</ListItemText></MenuItem>
                    )
                  })
                 }
                </Menu>

        <Menu id='message' anchorEl={mailAnchorEl} open={mailOpen} onClose={handleMailClose}>
                  {
                    messages && messages.map((item)=>{
                      const {id, icon, message} = item;
                      return(
                        <MenuItem key={id}><ListItemIcon>{icon}</ListItemIcon><ListItemText>{message}</ListItemText></MenuItem>
                      )
                    })
                   }
                </Menu>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <FoodBankIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            EASYCHOP
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
        <Avatar src={me} sizes='200px' onClick={handleClickProfile}/><Typography variant='h6' component='span' sx={{display:{xs:'none', sm:'block'}, ml:2}}>CustomerName</Typography> 
        </IconButton>
          <Box sx={{ display: {md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon onClick={handleMailClick}/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon onClick={handleClickChat}/>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

