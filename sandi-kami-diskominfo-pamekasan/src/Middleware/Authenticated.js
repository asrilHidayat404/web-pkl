import { useRecoilValue } from "recoil";
import { authenticatedUser } from "../Store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Authenticated = ({ children }) => {
  const userInfo = localStorage.getItem("auth");
  const navigate = useNavigate();
  const auth = useRecoilValue(authenticatedUser);
  let i = 1;
  useEffect(() => {
    console.log(i);
    i++;
    if (!auth.check) {
      navigate(userInfo ? "/dashboard" : "/login");
    }
  }, [auth, userInfo]);
  return children;
};

export default Authenticated;
