import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import {
  authGetProfileAsyncAction,
  authUpdateProfileAsyncAction
} from 'src/store/auth/auth.action';
import { Box, Container, Grid, CircularProgress } from '@mui/material';
import AvatarProfile from 'src/components/profile/AvatarProfile';
import ProfileDetails from 'src/components/profile/ProfileDetails';

function Profile() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const hanldeSubmitProfileDetails = async (event, values) => {
    event.preventDefault();
    dispatch(authUpdateProfileAsyncAction(values));
  };

  const body =
    auth.isLoading || !auth.data.user?.student_code ? (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress />
      </div>
    ) : (
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <AvatarProfile user={auth.data.user} />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ProfileDetails
              user={auth.data.user}
              handleSubmit={hanldeSubmitProfileDetails}
              isSubmitting={auth.isSubmitting}
            />
          </Grid>
        </Grid>
      </Container>
    );

  return (
    <>
      <Helmet>
        <title>Tài khoản - Câu Lạc Bộ Tin Học DHCNHN</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        {body}
      </Box>
    </>
  );
}

export default Profile;
