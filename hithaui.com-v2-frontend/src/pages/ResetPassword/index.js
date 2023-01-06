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
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
// eslint-disable-next-line import/named
import constants from '../../constants';
import axios from '../../utils/axios';

const { endpoints } = constants;

const ResetPassword = () => {
  const [state, setState] = useState({
    open: false,
    msg: '',
    isError: false
  });

  const [loading, setLoading] = useState(false);

  const { open, msg, isError } = state;

  const { resetToken } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(async () => {
    const { data } = await axios.post(
      `${endpoints.resetPassword}${resetToken}`
    );
    if (data || data.msg === 'Mã không hợp lệ') {
      navigate('/404');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Đổi mật khẩu</title>
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
              password: '',
              passwordConfirm: ''
            }}
            validationSchema={Yup.object().shape({
              password: Yup.string().required('Mật khẩu là bắt buộc'),
              passwordConfirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
                .required('Mật khẩu là bắt buộc')
            })}
            onSubmit={async ({ password }) => {
              setLoading(true);
              axios
                .post(`${endpoints.resetPassword}${resetToken}`, {
                  password
                })
                .then((data) => {
                  if (data.status !== 200) {
                    setState({
                      ...state,
                      open: true,
                      msg: data.data.msg,
                      isError: true
                    });
                  } else {
                    setState({
                      ...state,
                      open: true,
                      msg: data.data.msg,
                      isError: false
                    });
                  }
                })
                .catch(() => {
                  setState({
                    ...state,
                    open: true,
                    msg: 'Có lỗi xảy ra, vui lòng thử lại sau',
                    isError: true
                  });
                })
                .finally(() => {
                  setLoading(false);
                });
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
                    Đổi mật khẩu
                  </Typography>
                </Box>

                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Mật khẩu mới"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.passwordConfirm && errors.passwordConfirm
                  )}
                  fullWidth
                  helperText={touched.passwordConfirm && errors.passwordConfirm}
                  label="Nhập lại mật khẩu"
                  margin="normal"
                  name="passwordConfirm"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.passwordConfirm}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={loading}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {loading ? <CircularProgress size={26} /> : 'Đổi mật khẩu'}
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Quay lại trang đăng nhập
                  <Link component={RouterLink} to="/login" variant="h6">
                    Đăng nhập
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>

          <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={6000}
            onClose={handleClose}
            size={30}
          >
            {msg !== '' && (
              <Alert severity={isError ? 'error' : 'success'}>
                <AlertTitle>{isError ? 'Lỗi' : 'Thành công'}</AlertTitle>
                <strong>{msg}</strong>
              </Alert>
            )}
          </Snackbar>
        </Container>
      </Box>
    </>
  );
};

export default ResetPassword;
