import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Card, Button } from '@mui/material';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    border: `1px solid ${palette.background.default}`,
    borderRadius: 8,
    textAlign: 'center',
    transition: 'all 400ms ease-in-out',
    zIndex: 1,
    height: '100%',

    '& .title-holder': {
      position: 'relative',
      padding: '5rem 1.5rem',
      transition: 'opacity 400ms ease-in-out',
      zIndex: 1,
      '&:after': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        background: '#F47B2A',
        clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 70%)',
        WebkitClipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0 70%)',
        opacity: 0.23,
        zIndex: -1
      }
    },

    '&:hover': {
      border: `1px solid ${palette.primary.main}`,
      boxShadow: theme.shadows[6],

      '& .title-holder': {
        color: palette.primary.contrastText,
        '& .price': {
          color: `${palette.primary.contrastText} !important`
        },
        '&:after': {
          opacity: 1
        }
      },

      '& .ticket-button': {
        background: palette.primary.main,
        color: palette.primary.contrastText
      },

      "& [class^='MuiButtonBase-']": {
        background: `${palette.primary.main}!important`,
        "& [class^='MuiSvgIcon-']": {
          fill: `${palette.primary.contrastText}!important`
        }
      }
    }
  }
}));

const Classes = () => {
  const classes = useStyles();

  const classList = [
    {
      title: 'Thiết kế web',
      price: 'Thứ 3',
      desc: 'Tham gia lớp Thiết kế Web bạn sẽ được các anh chị áp dụng linh hoạt giữa truyền đạt kiến thức, kỹ năng kinh nghiệm và thực hành để giúp các bạn có thể tạo một website hoàn chỉnh.'
    },
    {
      title: 'Lập trình Java',
      price: 'Thứ 2',
      desc: 'Java là một nền tảng phát triển các ứng dụng phần mềm có vị trí rất lớn trong những năm gần đây. Đến với lớp Lập trình Java bạn sẽ được sử dụng trong, game hay ứng dụng trên di động,..'
    },
    {
      title: 'Thiết kế đồ họa',
      price: 'Thứ 4',
      desc: 'Tham gia lớp Thiết kế đồ hoạ các bạn sẽ được học các kiến thức về màu sắc, bố cục,.. hơn hết các bạn còn có thể thoả sức đam mê sáng tạo để cơ những ấn phẩm đẹp.'
    },
    {
      title: 'Lập trình Python',
      price: 'Thứ 6',
      desc: 'Python là ngôn ngữ lập trình cấp cao, đa mục đính. Python có cộng đồng lập trình rất lớn, hệ thống thư viện chuẩn, và cả các thư viện mã nguồn mở được chia sẻ trên mạng.'
    }
  ];

  return (
    <section className="section" id="classes">
      <div className="container">
        <div className="max-w-600 mb-14 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">
            Các lớp học đang hoạt động  chúng tôi
          </h1>
          <p>
            Các lớp học của CLB Tin học HIT mở ra nhằm mục đích trau dồi và phát
            triển các kỹ năng chuyên ngành mà các bạn đang theo học. Giúp các
            bạn có thêm những kinh nghiệm thực tế với các bài tập lớn của mỗi
            lớp học.
          </p>
        </div>

        {/* <div className={classes.cardWrapper}>
          <Grid container spacing={3}>
            {classList.map((plan) => (
              <Grid key={plan.title} item lg={3} md={3} sm={6} xs={12}>
                <Card className={classes.card} elevation={4}>
                  <div className="title-holder my-4">
                    <h4 className="font-normal capitalize m-0">{plan.title}</h4>
                    <p className="m-0 text-inherit text-18">
                      <span className="price mx-1 text-32 font-normal">
                        {plan.price}
                      </span>
                    </p>
                  </div>

                  <div className="px-6 pb-8">
                    <div className="mb-8">{plan.desc}</div>

                    <Button
                      className="ticket-button rounded px-6"
                      variant="outlined"
                      color="primary"
                    >
                      Tham gia
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div> */}
      </div>
    </section>
  );
};

export default Classes;
