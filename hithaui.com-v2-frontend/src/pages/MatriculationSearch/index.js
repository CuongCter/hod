import { Helmet } from 'react-helmet';
import { Link } from '@mui/material';

const MatriculationSearch = () => {
  return (
    <>
      <Helmet>
        <title>Tra cứu trúng tuyển - Câu Lạc Bộ Tin Học DHCNHN</title>
      </Helmet>

      <Link href="/app/searching/o-class">Tra cứu trúng tuyển lớp O</Link>
    </>
  );
};

export default MatriculationSearch;
