import React from "react";
import { Row, Button,Col } from "reactstrap";
import { saveCustomerAnswer } from "../../services/kampanya_service";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from '../../contextAPI/store/Provider';
toast.configure();
const BagisKatil = (props) => {
  const history = useHistory();
  // eslint-disable-next-line
  const [{  user }, dispatch] = useStore('');
  const notifySuccess = (e) =>
    toast.success(e, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const saveCustomer = () => {
    saveCustomerAnswer(props.id, user.customerNo)
      .then((response) => {
        notifySuccess("Başarılı bir şekilde katılım sağlandı!");
        history.push("/anasayfa");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div >
      <Row>
          <Col
            sm={{ size: "auto", offset: 1 }}
            style={{ paddingLeft: "25px", paddingBottom: "20px" }}
          >
            {" "}
            <Button className="buttonPay">Paylaş</Button>
          </Col>
          <Col sm={{ size: "auto", offset: 1 }}>
            <Button className="buttonKatil" onClick={saveCustomer}>Katıl</Button>
          </Col>
        </Row>
    </div>
  );
};

export default BagisKatil;
