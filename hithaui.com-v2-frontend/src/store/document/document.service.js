import constants from '../../constants';
import axios from '../../utils/axios';

const { endpoints } = constants;

const DocumentServices = {};

DocumentServices.getDocumentsAll = (params) => {
  const promise = new Promise((resl, rej) => {
    setTimeout(() => {
      axios
        .get(endpoints.getDocuments, {
          params: {
            subject: params?.subject,
            type: params?.type,
            name: params?.name,
            page: params?.page,
            limit: params?.limit,
            sort: params?.attribute
          }
        })
        .then((res) => resl(res))
        .catch((e) => rej(e));
    }, 300);
  });
  return promise;
};
export default DocumentServices;
