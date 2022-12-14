import Cookies from "js-cookie";
const Auth = {
  isAuthorized() {
    if (!Cookies.get("token")) return false;
    return true;
  },
};
export default Auth;
