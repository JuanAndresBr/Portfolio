import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import { TiLocation } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import { testInputs } from "./validation";

export default function contact() {
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sendEmail = (event) => {
    event.preventDefault();
    try {
      if (Object.keys(testInputs(data)).length === 0) {
        emailjs
          .sendForm(
            "service_8pc8u24",
            "template_s7jon5u",
            event.target,
            "cYFOn0nKnAeGEMwqj"
          )
          .then((response) => alert("Su mensaje fue enviado exitosamente"))
          .catch((error) => {
            alert("No fue posible enviar el mensaje");
          });
        setData({ name: "", email: "", message: "" });
      } else {
        alert("Ingrese todos los campos por favor");
      }
    } catch (error) {
      alert("No fue posible enviar el mensaje");
    }
  };

  function handleInputs(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(
      testInputs({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  }
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <div className={styles.boxes}>
        <div className={styles.boxForm}>
          <h2>Enviame un mensaje</h2>
          <form className={styles.form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input
              type="text"
              className={errors.name && styles.warning}
              name="name"
              onChange={handleInputs}
              value={data.name}
            />
            <p className={styles.error}>{errors.name}</p>
            <label>Email</label>
            <input
              type="text"
              className={errors.email && styles.warning}
              name="email"
              onChange={handleInputs}
              value={data.email}
            />
            <p className={styles.error}>{errors.email}</p>
            <label>Mensaje</label>
            <textarea
              className={errors.message && styles.warning}
              name="message"
              maxLength={500}
              onChange={handleInputs}
              value={data.message}
            />
            <p>{data.message.length} / 500</p>
            <p className={styles.error}>{errors.message}</p>
            <button type="submit">Enviar</button>
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
