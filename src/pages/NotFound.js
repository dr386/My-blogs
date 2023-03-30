import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
  }, [navigate]);

  return <h1>Page Not Found!</h1>;
};

export default NotFound;
