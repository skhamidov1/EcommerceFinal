import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <main>
        <div className="contact-hero">
          <div className="contact-hero__overlay">
            <h1>Contact Us</h1>
            <p>For General Inquiries, Please Call Us At 704.444.7833</p>
          </div>
        </div>

        <div className="form-wrap">
          <h2>Contact Us By Email</h2>

          <form
            method="post"
            action="https://sk-sqlapi.herokuapp.com/form_submission"
            className="form-wrap__form"
          >
            <div className="form-wrap__name-wrap">
              <div className="form-wrap__firstName-wrap">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required />
              </div>

              <div className="form-wrap__lastName-wrap">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" required />
              </div>
            </div>

            <div className="form-wrap__input-wrap">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>

            <div className="form-wrap__input-wrap">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" required />
            </div>

            <div className="form-wrap__input-wrap">
              <label htmlFor="comments">Comments</label>
              <textarea id="comments" name="comments" required />
            </div>
            <input aria-label="submit form" type="submit" className="submit" value="Submit" />
          </form>
        </div>
        <div className="contact-bottom-caption">
          <p>We Respond In Less Than 24 Hours!</p>
        </div>
      </main>
    );
  }
}

export default Contact;
