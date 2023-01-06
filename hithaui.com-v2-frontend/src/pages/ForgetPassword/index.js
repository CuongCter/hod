import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
  AlertTitle
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'src/utils/axios';
import constants from '../../constants';

const { endpoints } = constants;

const ForgetPassword = () => {
  const [state, setState] = useState({
    open: false,
    msg: '',
    isError: false
  });

  const [loading, setLoading] = useState(false);

  const { open, msg, isError } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <>
      <Helmet>
        <title>Quên mật khẩu</title>
      </Helmet>

      <Box
        sx={{
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              studentCode: '2019606167'
            }}
            validationSchema={Yup.object().shape({
              studentCode: Yup.string()
                .matches(/^[0-9]{10}$/, 'Mã sinh viên không đúng định dạng')
                .required('Mã sinh viên bắt buộc')
            })}
            onSubmit={async ({ studentCode }) => {
              setLoading(true);
              axios
                .post(endpoints.forgetPassword, {
                  student_code: studentCode
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
              <Form onSubmit={handleSubmit}>
                <Box>
                  <Typography color="textPrimary" variant="h2">
                    Quên mật khẩu
                  </Typography>
                </Box>

                <TextField
                  fullWidth
                  label="Mã sinh viên"
                  margin="normal"
                  name="studentCode"
                  type="text"
                  variant="outlined"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.studentCode}
                  error={Boolean(touched.studentCode && errors.studentCode)}
                  helperText={touched.studentCode && errors.studentCode}
                />

                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={26} /> : 'Gửi'}
                </Button>
              </Form>
            )}
          </Formik>

          <Typography color="textSecondary" variant="body1">
            Quay lại trang đăng nhập
            <Link to="/login" variant="h6">
              Đăng nhập
            </Link>
          </Typography>

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

export default ForgetPassword;
