import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Button,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InputIcon from '@mui/icons-material/Input';

import { authLogout } from 'src/store/auth/auth.action';
import Logo from './Logo';

const UserProfile = ({ user }) => {
  return (
    <RouterLink to="/app/account">
      <Avatar
        alt="Minh Hung"
        src={
          user?.avatar !== ''
            ? user.avatar
            : 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg'
        }
        sx={{ width: 24, height: 24, margin: '0 8px 0 8px' }}
      >
        {user.full_name[0]}
      </Avatar>
    </RouterLink>
  );
};

const DashboardNavbar = ({ onMobileNavOpen, user }) => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(authLogout());
  };

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <Button
            href="/app/documents"
            sx={{ color: '#fff', fontWeight: '600', fontFamily: 'Arial' }}
          >
            TÀI LIỆU
          </Button>
          {user && <UserProfile user={user} />}
          <RouterLink to="/">
            <IconButton color="inherit" onClick={() => handlerClick()}>
              <InputIcon />
            </IconButton>
          </RouterLink>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
