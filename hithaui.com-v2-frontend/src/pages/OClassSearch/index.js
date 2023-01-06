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
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

// eslint-disable-next-line import/named
import {
  authLogout,
  authSignInAsyncAction,
  resetError
} from 'src/store/auth/auth.action';
import * as Yup from 'yup';

import Modal from '@mui/material/Modal';
import { set } from 'nprogress';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const OClassSearch = () => {
  const dispatch = useDispatch();

  const studentCodeRef = useRef(null);
  const [titleMess, setTitleMess] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    const res = await axios.post('https://api.hithaui.com/api/candidates', {
      student_code: studentCodeRef.current.value,
      categoryId: '625e2ad99c2900410e07958e'
    });
    setMessage(res.data.msg);
    setTitleMess('Kết quả');
    console.log(res);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Helmet>
        <title>Tra cứu trúng tuyển lớp O - Câu Lạc Bộ Tin Học DHCNHN</title>
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
              studentCode: ''
            }}
            validationSchema={Yup.object().shape({
              studentCode: Yup.string().matches(
                /^[0-9]{10}$/,
                'Mã sinh viên không đúng định dạng'
              )
            })}
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
                    Tra cứu trúng tuyển lớp O
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
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={handleOpen}
                  >
                    Tra cứu
                  </Button>
                </Box>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h3"
                      component="h2"
                    >
                      {titleMess}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {message}
                    </Typography>
                  </Box>
                </Modal>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default OClassSearch;

