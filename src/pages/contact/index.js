import emailjs from "emailjs-com";
import styles from "./contact.module.css";
import { TiLocation } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";

function testInputs(inputs) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  var errors = {};
  if (inputs.name.length > 30) {
    errors.name = "Nombre debe ser menor a 30 caracteres";
  } else if (!inputs.name) {
    errors.name = "Por favor ingrese el nombre";
  } else if (inputs.email.length > 50) {
    errors.email = "El email debe ser menor de 50 caracteres";
  } else if (!inputs.email) {
    errors.email = "Por favor ingrese el email";
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = "Ingrese un email correcto por favor";
  } else if (inputs.message.length > 500) {
    errors.message = "El email debe ser menor de 500 caracteres";
  } else if (!inputs.message) {
    errors.message = "Por favor ingrese el mensaje";
  }
  return errors;
}

export default function Contact() {
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
            "service_ju9sxsj",
            "template_s7jon5u",
            event.target,
            "cYFOn0nKnAeGEMwqj"
          )
          .then((response) => alert("Su mensaje fue enviado exitosamente"))
          .catch((error) => {
            console.log(error)
            alert("No fue posible enviar el mensaje", error);
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