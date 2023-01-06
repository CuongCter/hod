import constants from '../../constants';
import axios from '../../utils/axios';

const { endpoints } = constants;

const SubjectServices = {};

SubjectServices.getSubjects = () => {
  const promise = new Promise((resl, rej) => {
    setTimeout(() => {
      axios
        .get(endpoints.getSubjects, {
          params: {
            limit: 100
          }
        })
        .then((res) => resl(res))
        .catch((e) => rej(e));
    }, 1000);
  });
  return promise;
};

export default SubjectServices;
