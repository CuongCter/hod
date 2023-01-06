import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { Helmet } from 'react-helmet';
import GlobalCss from './styles/jss/GlobalCss';
import './styles/jss/utilities/landing.scss';

const App = () => {
  const routing = useRoutes(routes());

  return (
    <ThemeProvider theme={theme}>
      <GlobalCss>
        <GlobalStyles />
        {routing}
      </GlobalCss>
    </ThemeProvider>
  );
};

export default App;
