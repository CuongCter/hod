import React from 'react';
import { Grid, Card, Avatar } from '@mui/material';
import FacebookIcon from 'src/icons/FacebookIcon';
import TwitterIcon from 'src/icons/TwitterIcon';
import InstagramIcon from 'src/icons/InstagramIcon';
import LinkedinIcon from 'src/icons/LinkedinIcon';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    border: '1px solid transparent',
    transition: 'all 250ms ease-in-out',
    '&:hover': {
      border: '1px solid rgba(var(--primary), 1)',
      color: palette.primary.main,
      '& $iconContainer': {
        opacity: 1
      },
      '& .description': {
        color: palette.primary.main
      }
    }
  },
  iconContainer: {
    position: 'absolute',
    top: 'calc(50% - 10px)',
    left: '50%',
    transform: 'translate(-50%)',
    opacity: 0,
    transition: 'opacity 250ms ease',
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      marginTop: 'calc(-50% - 4px)',
      height: 128,
      width: 128,
      background: 'rgba(0,0,0, 0.67)',
      borderRadius: 300,
      overflow: 'hidden',
      zIndex: -1
    }
  },
  iconWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    marginRight: 4,
    border: `1px solid ${palette.primary.contrastText}`,
    cursor: 'pointer'
  }
}));

const Leaders = () => {
  const classes = useStyles();
  const speakerList = [
    {
      name: 'Hoàng Thị Sao Mai',
      imgUrl: '/static/images/Mai.jpg',
      position: 'Phó chủ nhiệm hoạt động'
    },
    {
      name: 'Phạm Văn Cương',
      imgUrl: '/static/images/Cuong.jpg',
      position: 'Chủ nhiệm câu lạc bộ'
    },
    {
      name: 'Ngô Thế Tài',
      imgUrl: '/static/images/Tai.jpg',
      position: 'Phó chủ  nhiệm học tập'
    }
  ];

  return (
    <section className="section section-bg-light-primary" id="leaders">
      <div className="container text-center">
        <h1 className="mt-0 font-normal text-44 pb-10">BAN CHỦ NHIỆM</h1>

        <Grid container spacing={3}>
          {speakerList.map((item) => (
            <Grid key={item.name} item sm={4} xs={12}>
              <Card
                elevation={4}
                className={clsx(
                  'border-radius-12 px-6 pt-8 pb-4 text-center',
                  classes.card
                )}
              >
                <div className="mb-6 relative">
                  <Avatar
                    src={item.imgUrl}
                    className="h-128 w-128 inline-block"
                  />
                  <div
                    className={clsx(
                      'flex flex-wrap justify-center',
                      classes.iconContainer
                    )}
                  >
                    <div className={classes.iconWrapper}>
                      <FacebookIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                    <div className={classes.iconWrapper}>
                      <TwitterIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                    <div className={classes.iconWrapper}>
                      <InstagramIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                    <div className={classes.iconWrapper}>
                      <LinkedinIcon
                        className="text-13 text-white"
                        fontSize="small"
                      />
                    </div>
                  </div>
                </div>
                <h5 className="m-0 font-medium text-18">{item.name}</h5>
                <p className="description">{item.position}</p>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Leaders;
