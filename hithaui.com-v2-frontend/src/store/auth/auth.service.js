import constants from '../../constants';
import axios from '../../utils/axios';

const { endpoints } = constants;

const AuthServices = {};

AuthServices.signIn = (studentCode, password) =>
  new Promise((resl, rej) => {
    axios
      .post(endpoints.authLogin, { student_code: studentCode, password })
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });

AuthServices.forgetPassword = () =>
  new Promise((resl, rej) => {
    axios
      .post(endpoints.forgetPassword)
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });

AuthServices.getProfile = () =>
  new Promise((resl, rej) => {
    axios
      .get(endpoints.getProfile)
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });

AuthServices.updateProfile = (formValues) =>
  new Promise((resl, rej) => {
    axios
      .put(endpoints.updateProfile, formValues)
      .then((res) => resl(res))
      .catch((e) => rej(e));
  });
export default AuthServices;
