import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import clsx from 'clsx';
import FacebookIcon from 'src/icons/FacebookIcon';
import TwitterIcon from 'src/icons/TwitterIcon';
import InstagramIcon from 'src/icons/InstagramIcon';
import LinkedinIcon from 'src/icons/LinkedinIcon';

const useStyles = makeStyles(({ palette }) => ({
  section: {
    background: '#011C3A',
    color: 'white'
  },
  iconWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    marginRight: 12,
    border: `1px solid ${palette.primary.contrastText}`,
    cursor: 'pointer'
  },
  link: {
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#011C3A',
      opacity: 0.2
    }
  },
  logo: {
    width: '100%'
  }
}));

const companyOption = ['About Us', 'Services', 'Team', 'Pricing', 'Project'];

const userfulLink = [
  'Terms of Services',
  'Privacy Policy',
  'Documentation',
  'Changelog',
  'Components'
];

const Footer2 = () => {
  const classes = useStyles();

  return (
    <section className={`section ${classes.section}`} id="subscription">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Về chúng tôi</h4>
              <p className="my-6 max-w-200 text-inherit">
                Câu lạc bộ tin học HIT là Câu lạc bộ học tập sinh viên trực
                thuộc khoa Công nghệ thông tin trường Đại học công nghiệp Hà
                Nội. Được thành lập vào ngày 18/8/2010.
              </p>
              <div className="flex flex-wrap">
                <div className={classes.iconWrapper}>
                  <FacebookIcon className="text-13" fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <TwitterIcon className="text-13" fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <InstagramIcon className="text-13" fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <LinkedinIcon className="text-13" fontSize="small" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Doanh nghiệp</h4>
              <div className="mt-4 mb-6 ml--4">
                {companyOption.map((item) => (
                  <div
                    key={item}
                    className={clsx(
                      'flex items-center py-2 cursor-pointer px-4 w-full',
                      classes.link
                    )}
                  >
                    <NavigateNextIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Liên kết</h4>
              <div className="mt-4 mb-6 ml--4">
                {userfulLink.map((item) => (
                  <div
                    key={item}
                    className={clsx(
                      'flex items-center py-2 cursor-pointer px-4 w-full',
                      classes.link
                    )}
                  >
                    <NavigateNextIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <img
              src="./static/images/logo-hit.png"
              alt="logo HIT"
              className={classes.logo}
            />
          </Grid>
          {/* <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Liên hệ</h4>
              <p className="my-6 text-inherit">Sign Up for the latest news</p>
              <TextField
                className="mb-4"
                size="small"
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    paddingLeft: 8,
                    color: '#fff'
                  }
                }}
                InputProps={{
                  style: {
                    paddingLeft: 4
                  },
                  startAdornment: (
                    <InputAdornment position="end">
                      <Icon fontSize="small" className="text-white">
                        email
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
              <Button className="w-full" variant="contained" color="primary">
                SUBSCRIBE
              </Button>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </section>
  );
};

export default Footer2;
