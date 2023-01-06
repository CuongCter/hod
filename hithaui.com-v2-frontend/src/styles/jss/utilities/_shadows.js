import { makeStyles } from '@mui/styles';

const generateShadows = (theme) => {
  const classList = {};

  // eslint-disable-next-line array-callback-return
  theme.shadows.map((shadow, ind) => {
    classList[`.elevation-z${ind}`] = {
      boxShadow: `${shadow} !important`
    };
  });

  return classList;
};

// eslint-disable-next-line import/prefer-default-export
export const shadowStyles = makeStyles(({ palette, ...theme }) => ({
  '@global': {
    ...generateShadows(theme)
  }
}));
