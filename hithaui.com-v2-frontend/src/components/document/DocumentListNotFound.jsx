import { Box, Container, Typography } from '@mui/material';

import { useStyles } from './Styles';

const NotFound = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          {/* <img
            alt="Under development"
            src="/static/images/not_found.png"
            className={classes.boxImg}
          /> */}
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ color: '#00acc1' }}
          >
            Kho tài liệu dành cho sinh viên khoa CNTT
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
