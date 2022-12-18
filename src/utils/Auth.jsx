import Cookies from "js-cookie";
const Auth = {
  isAuthorized() {
    if (!Cookies.get("token")) return false;
    return true;
  },
  getToken() {
    return Cookies.get("token");
  },
};
export default Auth;
