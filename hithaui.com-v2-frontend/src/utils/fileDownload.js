import Axios from 'axios';
import FileDownload from 'js-file-download';

export const download = (e, id) => {
  e.preventDefault();
  Axios({
    url: `${process.env.REACT_APP_BASE_URL}/download`,
    method: 'GET',
    responseType: 'blob',
    params: {
      id
    }
  }).then((res) => {
    console.log('[res--]', res);
    FileDownload(res.data, 'download');
  });
};
