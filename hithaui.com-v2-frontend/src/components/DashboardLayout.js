import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { experimentalStyled } from '@mui/material';

import { authGetProfileAsyncAction } from 'src/store/auth/auth.action';

import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import DocumentFooter from './DocumentFooter';

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
}));

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const AdminDashboardLayout = (props) => {
  const { isMobileNavOpen, setMobileNavOpen } = props;
  return (
    <>
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
    </>
  );
};

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [role, setRole] = useState(4);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth?.data.token);
  const data = useSelector((state) => state.auth?.data.user);

  useEffect(() => {
    dispatch(authGetProfileAsyncAction());
  }, [token, dispatch]);

  useEffect(() => {
    if (data) {
      setRole(data.role);
    }
  }, [data]);

  const DashboardLayoutWrapper = experimentalStyled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: role?._id === 1 ? 256 : 0
    }
  }));

  return (
    <>
      <DashboardLayoutRoot>
        <DashboardNavbar
          onMobileNavOpen={() => setMobileNavOpen(true)}
          user={data}
        />
        {role?._id === 1 && (
          <AdminDashboardLayout
            isMobileNavOpen={isMobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        )}
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              <Outlet />
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
      {role?._id !== 1 && <DocumentFooter />}
    </>
  );
};

export default DashboardLayout;
