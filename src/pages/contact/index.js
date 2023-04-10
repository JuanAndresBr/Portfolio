import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import { TiLocation } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export default function contact() {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_8pc8u24",
        "template_s7jon5u",
        event.target,
        "cYFOn0nKnAeGEMwqj"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <div className={styles.boxes}>
        <div className={styles.boxForm}>
          <h2>Enviame un mensaje</h2>
          <form className={styles.form} onSubmit={sendEmail}>
            <label htmlFor="name">Nombre</label>
            <input type="text" className="form-control" name="name" />
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" name="Email" />
            <label htmlFor="message">Mensaje</label>
            <textarea className="form-control" name="message" />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
        <div className={styles.info}>
          <h2>Información</h2>

          <span>
            <TiLocation style={{ color: "white" }} size={30} /> Medellín -
            Colombia
          </span>
          <span>
            <BsFillTelephoneFill size={30} /> +57 310 595 59 45
          </span>
          <span>
            <MdAlternateEmail size={30} /> bravobenitezjuanandres@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}
