import React from "react";

const contact = () => {

  return (
    <div>
      <div className="contact-hero">
        <div className="contact-hero__overlay">
          <h2>Contact Us</h2>
          <p>For General Inquiries, Please Call Us At 704.444.7833</p>
        </div>
      </div>

      <div className="form-wrap">
        <h2>Contact Us By Email</h2>

        <form className="form-wrap__form">
          <div className="form-wrap__name-wrap">
            <div className="form-wrap__firstName-wrap">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>

            <div className="form-wrap__lastName-wrap">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
          </div>

          <div className="form-wrap__input-wrap">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="form-wrap__input-wrap">
            <label htmlFor="phone">Phone</label>
            <input type="phone" name="phone" id="phone" />
          </div>

          <div className="form-wrap__input-wrap">
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" name="comments" />
          </div>
          <input type="submit" className="submit" />
        </form>
      </div>
      <div className="contact-bottom-caption">
          <p>We Respond In Less Than 24 Hours!</p>
        </div>
    </div>
  );
};

export default contact;
