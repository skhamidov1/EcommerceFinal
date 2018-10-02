import React from "react";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import { Link } from "react-router-dom";

const contactInfo = props => {
  const {contactInfo} = props

  const toggleUserComments = (id) => {
    let commentOverlay = document.getElementById(id)
    commentOverlay.style.display = commentOverlay.style.display === "flex" ? "none" : "flex";
     
  }
  const contactCard = contactInfo.map(info => {
    return <ContactInfoCard toggleComments={toggleUserComments}
    cardInfo={info} />;
  });

  return (
    <div className="contact-info">
      <div className="contact-info__heading-wrap">
        <h1>Manage Submissions</h1>
        <div className="contact-info__back-link-wrap">
          <Link to="/admin" role="button" className="contact-info__back-link">
            Go Back
          </Link>
        </div>
      </div>
      <div className="info-card">
        <ul className="info-card__unord-list">
          <li>First Name</li>
          <li>Last Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Comments</li>
        </ul>
      </div>
      <div>{contactCard}</div>
    </div>
  );
};

export default contactInfo;
