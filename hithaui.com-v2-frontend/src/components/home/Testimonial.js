import React from 'react';
import { Avatar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import TwitterIcon from 'src/icons/TwitterIcon';
import FacebookIcon from 'src/icons/FacebookIcon';
import clsx from 'clsx';
import StarIcon from '@mui/icons-material/Star';
import Carousel from '../common/Carousel';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    maxWidth: 700,
    '& .image-border': {
      border: '3px solid rgba(var(--primary),0.3)',
      background: palette.primary.contrastText
    },

    '&:after': {
      content: '" "',
      position: 'absolute',
      display: 'block',
      top: 0,
      bottom: 0,
      left: 'calc(50% - 120px)',
      right: 'calc(50% - 175px)',
      background: 'rgba(var(--primary),0.15)',
      clipPath: 'polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)',
      zIndex: -1
      // [theme.breakpoints.down('xs')]: {
      //   right: 0,
      //   left: 0,
      //   clipPath: 'none'
      // }
    }
  }
}));

const Testimonial = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  // const isMobile = useMediaQuery(false);

  const testimonialList = [
    {
      id: 1,
      companyLogoUrl: './static/images/mock-logo-1.png',
      comment: '"Sau khi học các lớp của CLB em đã có lương 2000$"',
      icon: TwitterIcon,
      user: {
        imageUrl: './static/images/bui-hoang.jpg',
        name: 'Bùi Việt Hoàng',
        designation: 'Cài win dạo'
      }
    },
    {
      id: 2,
      companyLogoUrl: './static/images/mock-logo-2.png',
      comment: `"Được tham gia vào lớp học HIT ns riêng và clb HIT nói chung thì đây chính là một bước ngoặt quan trọng, 
        nơi mà có những con người thân thiện và nhiệt huyết như ngọn hải đăng dẫn đường cho kẻ mù đường này vậy.
        Ngoài những lúc ngu ngơ sợ bị gọi ra thì lúc nào cũng thoải mái. Em cảm ơn tất cả mọi người."`,
      icon: FacebookIcon,
      user: {
        imageUrl: './static/images/thuy.jpeg',
        name: 'Thuỷ Nguyễn',
        designation: 'Member'
      }
    },
    {
      id: 3,
      companyLogoUrl: './static/images/mock-logo-3.png',
      comment: `"Em thấy các lớp học của CLB thật sự bổ ích, nhờ sự chia sẻ của anh chị và các bạn mà em 
        đã có thêm nhiều kiến thức và kỹ năng mới, dần dần định hướng được bản thân.
        P.s: Các anh đều đẹp trai :v"`,
      icon: TwitterIcon,
      user: {
        imageUrl: './static/images/mai.jpeg',
        name: 'Mai',
        designation: 'Member'
      }
    },
    {
      id: 4,
      companyLogoUrl: './static/images/mock-logo-2.png',
      comment: `"Em thấy các lớp học của HIT quá chi là chất lượng, anh chị support, leader very very nhiệt tình và tận tâm. 
        Sau 2 khóa học, em thấy mình học thêm được rất nhiều kiến thức, điều bổ ích mới... 
        Và em muốn gửi lời cảm ơn sâu sắc đến HIT và anh chị đã tạo ra các lớp học bổ ích này và 
        dành thời gian để chia sẻ kinh nghiệm truyền đạt lại kiến thức cho tụi em ạ ❤️"`,
      icon: FacebookIcon,
      user: {
        imageUrl: './static/images/face-2.png',
        name: 'Việt Nguyễn',
        designation: 'Member'
      }
    },
    {
      id: 5,
      companyLogoUrl: './static/images/mock-logo-3.png',
      comment: `"Từ trước đến giờ chưa thấy lớp học nào mà có đội ngũ leader, support cute nhiệt tình như vậy luôn ạ.
        Cảm ơn anh chị cũng như CLB rất nhiều vì đã cho bọn em 1 môi trường học tập chất lượng như này ạ .
        YÊU HIT <3...
        "`,
      icon: TwitterIcon,
      user: {
        imageUrl: './static/images/nguyet.jpeg',
        name: 'Minh Nguyệt',
        designation: 'Member'
      }
    },
    {
      id: 6,
      companyLogoUrl: './static/images/mock-logo-4.png',
      comment: `"Lời đầu tiên em muốn nói đây là một trải nghiệm ý nghĩa và vui nhất của em từ trước đến giờ. 
        Từ khi các lớp học được mở sau khi chúng em được vào HIT các anh/chị leader và support đã dạy cho em
        rất nhiều kiến thức bổ ích cùng với đó là rất nhiều kỹ năng, định hướng nghề nghiệp và giải 
        đáp mọi thắc mắc mà em gặp phải. Em rất cảm ơn các anh/chị đã giúp đỡ em ạ "`,
      icon: FacebookIcon,
      user: {
        imageUrl: './static/images/face-4.png',
        name: 'Hoàng Tùng',
        designation: 'Member'
      }
    }
  ];

  return (
    <div className="section section-bg-light-primary" id="testimonial">
      <div className="container text-center">
        <h1 className="font-normal text-44 mt-0 mx-auto mb-16">
          Trải nghiệm lớp học
        </h1>
        <Carousel
          bulletColor={theme.palette.primary.main}
          slidesPerView={1}
          spacing={0}
          navigation={false}
          paginationClass="mt-16"
          carouselId="carousel-9"
        >
          {testimonialList.map((testimonial) => (
            <div
              className={clsx('mx-auto pt-8', classes.card)}
              key={testimonial.id}
            >
              <div
                className={clsx({
                  'flex justify-center items-center': true,
                  'flex-wrap': isMobile
                })}
              >
                <Avatar
                  className="w-108 h-108 image-border p-3px"
                  src={testimonial.user.imageUrl}
                  alt="user"
                />
                <p
                  className={clsx({
                    'text-left my-0 ml-8': !isMobile
                  })}
                >
                  {testimonial.comment}
                </p>
              </div>
              <div className="flex flex-wrap mt-4 justify-center mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon
                    key={i}
                    className="mx-1"
                    fontSize="small"
                    color="primary"
                  />
                ))}
              </div>
              <h5 className="inline-block m-0 font-medium">
                <div>{testimonial.user.name}</div>
                <div>{testimonial.user.designation}</div>
              </h5>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
