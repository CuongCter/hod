import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress
} from '@mui/material';

const ProfileDetails = (props) => {
  const { user, handleSubmit, isSubmitting } = props;
  const [values, setValues] = useState({
    ...user
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form autoComplete="off" onSubmit={(e) => handleSubmit(e, values)}>
      <Card>
        <CardHeader title="Thông tin" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Họ tên"
                name="full_name"
                onChange={handleChange}
                required
                value={values.full_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Giới tính</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={values.gender || 'nam'}
                  onChange={handleChange}
                >
                  <Grid container spacing={3}>
                    <Grid item>
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Nam"
                      />
                    </Grid>
                    <Grid item>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Nữ"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Số điện thoại"
                name="phone_number"
                onChange={handleChange}
                value={values.phone_number}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Địa chỉ"
                name="address"
                onChange={handleChange}
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Ngày sinh"
                name="date_of_birth"
                type="date"
                onChange={handleChange}
                value={values.date_of_birth.substr(0, 10)}
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Khoa"
                name="faculty"
                onChange={handleChange}
                value={values.faculty}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Lớp"
                name="class_name"
                onChange={handleChange}
                value={values.class_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Sinh viên khóa"
                name="school_year"
                onChange={handleChange}
                value={values.school_year}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                required
                label="Thành viên khóa"
                name="club_year"
                onChange={handleChange}
                value={values.club_year}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                multiline
                label="Tiểu sử"
                name="bio"
                onChange={handleChange}
                value={values.bio}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={30} /> : 'Lưu'}
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  user: PropTypes.object,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
};

export default ProfileDetails;
