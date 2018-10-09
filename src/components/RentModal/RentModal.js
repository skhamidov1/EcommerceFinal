import React from "react";

const rentModal = (props) => {
 
  return (
    <div className="modal-wrap">

      <form className="modal-wrap__form">
        <h2>Thank You For Choosing This Car!</h2>

        <div className="modal-wrap__name-wrap displayFlex margin-bottom">

          <div className="modal-wrap__fname-wrap">
            <label htmlFor="modal-fname">First Name</label>
            <input type="text" required name="firstName" id="modal-fname"
            className="margin-right" />
          </div>

          <div className="modal-wrap__lname-wrap">
            <label htmlFor="modal-lname">Last Name</label>
            <input type="text" required name="lastName" id="modal-lname" />
          </div>

        </div>

        <div className="modal-wrap__email-phone-wrap displayFlex margin-bottom">

          <div className="modal-wrap__email-wrap">
            <label htmlFor="modal-email">Email</label>
            <input type="email" required name="email" id="modal-email" 
            className="margin-right" />
          </div>

          <div className="modal-wrap__phone-wrap">
            <label htmlFor="modal-phone">Phone</label>
            <input type="phone" required name="phone" id="modal-phone" />
          </div>

        </div>

        <div className="modal-wrap__card-cvv-wrap displayFlex margin-bottom">

            <div className="modal-wrap__card-num-wrap">
                <label htmlFor="modal-card-num">Card Number</label>
                <input type="text" required name="card-num" id="modal-card-num" 
                className="margin-right" />
            </div>

            <div className="modal-wrap__cvv-wrap">
                <label htmlFor="modal-cvv">CVV</label>
                <input type="text" required name="cvv" id="modal-cvv" />
            </div>

        </div>

        <div className="modal-wrap__street-wrap margin-bottom">
          <label htmlFor="modal-address">Street Address</label>
          <input type="text" required name="address" id="modal-address" />
        </div>

        <div className="modal-wrap__city-state-wrap displayFlex margin-bottom">

            <div className="modal-wrap__city-wrap">
                <label htmlFor="modal-city">City</label>
                <input type="text" required name="city" id="modal-city"
                className="margin-right" />
            </div>

            <div className="modal-wrap__state-wrap">
                <label htmlFor="modal-state">State</label>
                <input type="text" required name="state" id="modal-state" />
            </div>
        </div>

        <div className="modal-wrap__zip-wrap margin-bottom">
          <label htmlFor="modal-zip">Zip Code</label>
          <input type="text" required name="zip" id="modal-zip" />
        </div>
        
        <div className="modal-wrap__button-wrap">
        <button onClick = {props.showRentModal} className="modal-wrap__cancel">
            Cancel
        </button>

        <button className="modal-wrap__submit" type="submit">
            Place Order
        </button>
        </div>
      </form>
    </div>
  );
};

export default rentModal;
