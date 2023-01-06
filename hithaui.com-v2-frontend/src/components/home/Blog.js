import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Grid, Card, Button, Divider, Icon, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 20,
    border: '1px solid transparent',
    '&:hover': {
      border: `1px solid ${palette.primary.main}`
    },
    '&:hover $imageOverlay': {
      opacity: 1
    }
  },
  imageOverlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    background: 'rgba(0,0,0,0.67)',
    transition: 'all 250ms ease'
  },
  dateHolder: {
    borderRadius: 4,
    padding: '0.3rem 0.6rem',
    background: 'rgba(var(--primary),0.4)',
    textAlign: 'center',
    marginRight: '1rem'
  },
  minHeight: {
    minHeight: '84px'
  }
}));

const Blog = () => {
  const classes = useStyles();
  const news = [
    {
      id: '1',
      title: 'Đăng ký học phần cực nhanh',
      desc: 'Để có thể đăng kí học phần một các nhanh nhất, bạn có thể sử dụng tab ẩn danh để giúp trang web load nhanh hơn'
    },
    {
      id: '2',
      title: 'Tôi đã đạt được mức lương 11000 đô như thế nào ?',
      desc: 'Để đạt được mức lương 11000 đô tôi đã kiên trì cố gắng trong suốt 3 năm sau ra trường. '
    },
    {
      id: '3',
      title: '11 mẹo lập trình viên Javascript phải biết',
      desc: '11 mẹo giúp các Lập trình viên Javascript làm việc nhanh hơn.'
    },
    {
      id: '4',
      title: 'Làm chủ Java trong 1 tiếng',
      desc: 'Java là một trong những ngôn ngữ lập trình mạnh và được sử dụng đông đảo trong phát triển phần mềm, các trang web,..'
    }
  ];

  return (
    <section className="section section-bg-light-primary" id="blog">
      <div className="container">
        <div className="max-w-400 mb-16 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">Bài viết mới nhất</h1>
        </div>
        <Grid container spacing={2}>
          {news.map((item, ind) => (
            <Grid key={item.id} item md={3} sm={2} xs={12}>
              <Card elevation={3} className={clsx(classes.card, 'card')}>
                <div className="relative">
                  <img
                    className="w-full block"
                    src={`/static/images/sq-${ind + 1}.png`}
                    alt="sq-1"
                  />
                  <div className={classes.imageOverlay}>
                    <Button
                      className="text-white"
                      variant="text"
                      color="primary"
                    >
                      Xem thêm
                    </Button>
                  </div>
                </div>
                <div className="px-4 pt-4">
                  <div className="flex items-center">
                    <div className={classes.dateHolder}>
                      <p className="m-0 text-white">12</p>
                      <small className="m-0 text-primary">Feb</small>
                    </div>
                    <h5 className="m-0">{item.title}</h5>
                  </div>
                  <p className="mt-6 mb-8" style={{ minHeight: '84px' }}>
                    {item.desc}
                  </p>
                  <Divider className="bg-light-primary" />
                  <div className="flex justify-between items-center my-1">
                    <div className="flex justify-between items-center">
                      <RemoveRedEyeIcon
                        fontSize="small"
                        className="text-muted mr-1"
                      />
                      <span className="text-muted">(23)</span>
                      <MessageIcon
                        fontSize="small"
                        className="text-muted ml-4 mr-1"
                      />
                      <span className="text-muted">(45)</span>
                    </div>
                    <IconButton>
                      <Icon fontSize="small" color="primary">
                        share
                      </Icon>
                    </IconButton>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Blog;
