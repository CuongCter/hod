import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Container,
  Link,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import {
  authLogout,
  authSignInAsyncAction,
  resetError
} from 'src/store/auth/auth.action';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.auth.data.token);
  const studentCodeRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClose = () => {
    dispatch(resetError());
  };

  useEffect(() => {
    if (token) {
      navigate('/app/documents');
    }
  }, [token]);

  return (
    <>
      <Helmet>
        <title>Đăng nhập - Câu Lạc Bộ Tin Học DHCNHN</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              studentCode: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              studentCode: Yup.string()
                .matches(/^[0-9]{10}$/, 'Mã sinh viên không đúng định dạng')
                .required('Mã sinh viên bắt buộc'),
              password: Yup.string().max(255).required('Mật khẩu bắt buộc')
            })}
            onSubmit={() => {
              dispatch(
                authSignInAsyncAction(
                  studentCodeRef.current.value,
                  passwordRef.current.value,
                  navigate
                )
              );
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Đăng nhập
                  </Typography>
                </Box>

                <TextField
                  error={Boolean(touched.studentCode && errors.studentCode)}
                  fullWidth
                  helperText={touched.studentCode && errors.studentCode}
                  label="Mã sinh viên"
                  margin="normal"
                  name="studentCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.studentCode}
                  variant="outlined"
                  inputRef={studentCodeRef}
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Mật khẩu"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                  inputRef={passwordRef}
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={auth.isLoading}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {auth.isLoading ? (
                      <CircularProgress size={26} />
                    ) : (
                      'Đăng nhập'
                    )}
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Bạn quên mật khẩu?
                  <Link
                    component={RouterLink}
                    to="/forget-password"
                    variant="h6"
                  >
                    Quên mật khẩu
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
        {auth.error !== '' && (
          <Snackbar
            open={auth.data.msg !== ''}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={3000}
            onClose={handleClose}
            size={30}
          >
            <Alert severity="error">
              <AlertTitle>Lỗi</AlertTitle>
              <strong>{auth.error}</strong>
            </Alert>
          </Snackbar>
        )}
      </Box>
    </>
  );
};

export default Login;
