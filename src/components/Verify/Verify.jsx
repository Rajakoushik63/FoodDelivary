import axios from "axios";
import { useContext, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import "./Verify.css";

const Verify = () => {
  const { url } = useContext(StoreContext);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const navigate = useNavigate();

  const verifyPayment = useCallback(async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  }, [success, orderId, navigate, url]);

  useEffect(() => {
    verifyPayment();
  }, [verifyPayment]); // Adding verifyPayment to dependencies

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
