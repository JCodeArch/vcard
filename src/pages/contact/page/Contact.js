import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactInfoBlock = ({ icon, title, value }) => {
   // Verifica se o ícone é 'lnr lnr-envelope'
   const isEmailIcon = icon === 'lnr lnr-envelope';

   // Se for um ícone de e-mail, adicione um link <a> em torno do valor
   const renderedValue = isEmailIcon ? <a href={`mailto:${title}`}>{title}</a> : title;
 

  return (
    <div className="lm-info-block gray-default">
      <i className={icon}></i>
      <h4>{renderedValue}</h4>
      <span className="lm-info-block-value"></span>
      <span className="lm-info-block-text"></span>
    </div>
  );
};

const TextInputField = ({ name, label, value, onChange, error, placeholder, required }) => (
  <div className={`form-group form-group-with-icon ${error && "has-error"}`}>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      placeholder={placeholder}
      required={required}
      aria-label={label}
    />
    <label>{label}</label>
    <div className="form-control-border"></div>
    {error && (
      <div className="help-block with-errors">
        {error}
      </div>
    )}
  </div>
);

const TextAreaField = ({ name, label, value, onChange, error, placeholder, required }) => (
  <div className={`form-group form-group-with-icon ${error && "has-error"}`}>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      placeholder={placeholder}
      rows="7"
      required={required}
      aria-label={label}
    ></textarea>
    <label>{label}</label>
    <div className="form-control-border"></div>
    {error && (
      <div className="help-block with-errors">
        {error}
      </div>
    )}
  </div>
);
const Map = () => (
  <div id="map" className="map">
    <div className="lmpixels-map">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.642075308593!2d-46.74352653196191!3d-23.63442180205203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5146a99a1379%3A0xfcfd4cd0daa00975!2sVila%20Andrade%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712963528521!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default function Contact({classSectionIsActive}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState('');

  const handleRecaptchaChange = (value) => {
    if (value) {
      setIsVerified(true);
      setRecaptchaError('');
    } else {
      setIsVerified(false);
      setRecaptchaError('Please verify the reCAPTCHA.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsVerified(false);
    } else {
      setFormErrors(errors);
    }
  };

  const contactInfo = {
    city: "São Paulo, SP — Brasil",
    zipCode: "+55 (11) 99190-4628",
    email: "jonathas.js@gmail.com",
    isAvailable: "Disponível para Oportunidades",
  };

  return (
    <section data-id="contact" className={`animated-section ${classSectionIsActive}`}>
      <div className="page-title">
        <h2>Contato</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <ContactInfoBlock icon="lnr lnr-map-marker" title={contactInfo.city} value="" />
            <ContactInfoBlock icon="lnr lnr-phone-handset" title={contactInfo.zipCode} value="" />
            <ContactInfoBlock icon="lnr lnr-envelope" title={contactInfo.email} value="" />
            <ContactInfoBlock icon="lnr lnr-checkmark-circle" title={contactInfo.isAvailable} value="" />
          </div>
          
          <div className="col-xs-12 col-sm-8">
            <Map />
            <div className="block-title">
              <h3>Como posso <span>ajudar?</span></h3>
            </div>

            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="messages"></div>

              <div className="controls two-columns">
                <div className="fields clearfix">
                  <div className="left-column">
                    <TextInputField
                      name="name"
                      label="Nome Completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      error={formErrors.name}
                      placeholder=""
                      required
                    />

                    <TextInputField
                      name="email"
                      label="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={formErrors.email}
                      placeholder=""
                      required
                    />

                    <TextInputField
                      name="subject"
                      label="Assunto"
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={formErrors.subject}
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="right-column">
                    <TextAreaField
                      name="message"
                      label="Mensagem"
                      value={formData.message}
                      onChange={handleInputChange}
                      error={formErrors.message}
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className="g-recaptcha">
                  <ReCAPTCHA
                    sitekey="6Lfvnc0pAAAAAJo4RnAtFQ6bOV8tsQC5F8KFDZ65"
                    onChange={handleRecaptchaChange}
                    theme="dark"
                    aria-label="reCAPTCHA"
                  />
                  {recaptchaError && <div className="help-block with-errors">{recaptchaError}</div>}
                  {isVerified && <p>Recaptcha verified!</p>}
                </div>

                <input
                  type="submit"
                  className="button btn-send"
                  value="Enviar mensagem"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
