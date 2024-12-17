import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ROUTES from "../../Rountes";

const LogOut = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem("authToken");
  
    useEffect(() => {
      if (token) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userID");
        navigate(ROUTES.LOGIN);
      }
    }, [token, navigate]);

};

export default LogOut;