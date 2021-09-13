import React from "react";
import { Row, Button } from "reactstrap";
import "./page.css";
import { saveCustomerAnswer } from "../../services/kampanya_service";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from '../../contextAPI/store/Provider';
toast.configure();
const Katil = (props) => {
  // eslint-disable-next-line
  const [{  user }, dispatch] = useStore('');
  const history = useHistory();
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
    <div className="myDiv">
      <Row>
        <Button
          className="button"
          color="danger"
          style={{ borderRadius: "30px" }}
          onClick={saveCustomer}
        >
          İlgileniyorum
        </Button>
      </Row>
      <Row>
        <a className="link" href={`/anasayfa`}>
          İlgilenmiyorum
        </a>
      </Row>
    </div>
  );
};

export default Katil;
