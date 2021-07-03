import React from "react";
import "./ApplyForm.scss";

export default function ApplyForm() {
  return (
    <form id="formapply">
      <h4 className="title">
        Next club call is scheduled for{" "}
        <span className="date-underline">
          Tuesday 29th of June 2021 <br /> at 16:00 (UK)
        </span>
      </h4>
      <div className="form-group">
        <div>
          <label htmlFor="name">First and Last Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="organization">Organization</label>
          <input type="text" id="organization" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="agreebox">
          <span>in agreement with Chatham House Rule</span>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            value="agree"
          />
          <label for="agreement"> I agree</label>
        </div>
        <input
          type="submit"
          value="Apply to participate"
          className="submitbtn"
        />
      </div>
    </form>
  );
}
