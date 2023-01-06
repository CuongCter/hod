import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

import FacebookIcon from 'src/icons/FacebookIcon';
import TwitterIcon from 'src/icons/TwitterIcon';
import InstagramIcon from 'src/icons/InstagramIcon';
import LinkedinIcon from 'src/icons/LinkedinIcon';

const useStyles = makeStyles(({ palette }) => ({
  section: {
    background: '#011C3A',
    color: 'white',
    'min-height': 'auto',
    padding: '30px 0 !important'
  },
  custom: {
    display: 'flex'
  },
  'h-grid': {
    height: '50px'
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
  }
}));

const Footer2 = () => {
  const classes = useStyles();

  return (
    <section className={`section ${classes.section}`} id="subscription">
      <div className="container">
        <Grid container spacing={20}>
          <Grid item lg={9} md={3} sm={6} xs={12} className="h-grid">
            <div>Copyright © 2022. HIT Club 🤎</div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12} className="h-grid">
            <div className={`flex-wrap ${classes.custom}`}>
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
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Footer2;
