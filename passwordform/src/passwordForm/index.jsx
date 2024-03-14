import React from "react";
import "./style.css";
import Logo from "../Assets/image/logo.JPG";
const PasswordForm = () => {
  return (
    <>
      <div className="main">
        {/* <!-- section first start --> */}
        <div className="passport_Header">
          <div className="image_Passport">
            <img src={Logo} alt="logo" />
          </div>
          <div className="Header_mid_Section">
            <h3 className="heading-third">PASSPORT APPLICATION FORM</h3>
            <h4 className="heading-forth">
              Government of India, Ministry of External Affairs
            </h4>
            <h3 className="Passport_details_header">
              Please read the Passport Instruction Booklet carefully before
              filling the form. Furnishing of incorrect information/ suppression
              of information would lead to rejection of application and would
              attract penal provisions as prescribed under the Passports Act,
              1967. Please produce your original documents at the time of
              submission of the form. All fields marked with (*) are mandatory
              to fill
            </h3>
          </div>
        </div>
        {/* </section> */}
        {/* <!-- section first end --> */}
        {/* <section> */}
        <h4 className="Ser_Reqd">Service Required</h4>
        {/* <form> */}
        <div className="ApplyFor">
          <label className="label first-label">
            Applying for <span>*</span>
          </label>
          <select id="nameSection" className="select-0 inputField">
            <option value=""></option>
            <option id="Fresh-Passport" value="Fresh Passport">
              Fresh Passport
            </option>
            <option id="Re-Issue-Passport" value="Re-Issue-Passport">
              Re Issue Passport
            </option>
          </select>
        </div>
        <div className="nameSectionForm ">
          <label className="label">
            Type of Application <span>*</span>
          </label>
          <div className="normalTatkaal ">
            <input
              className="radioBtn"
              type="radio"
              id="normal"
              name="Type-of-Application"
              required
            />
            <label className="normal radioBtn">Normal</label>
            <input
              className="radioBtn"
              type="radio"
              id="tatkal"
              name="Type-of-Application"
              required
            />
            <label className="radioBtn">Tatkaal</label>
          </div>
        </div>
        <div className="nameSectionForm ">
          <label className="label">
            Type of Passport Booklet <span>*</span>
          </label>
          <div className="normalTatkaal">
            <input
              className="radioBtn"
              type="radio"
              id="passportBooklet"
              name="Pages"
              required
            />

            <label className="radioBtn">36 Pages</label>
            <input
              className="radioBtn"
              type="radio"
              id="passportBooklet"
              name="Pages"
              required
            />

            <label className="radioBtn">60 Pages</label>
          </div>
        </div>
        <h4 className="heading-four">Applicant Details</h4>
        <label className="label">
          Applicant's Given Name (Given Name means First Name followed by middle
          Name (if any))
          <span>*</span>
        </label>
        <br />
        <input id="details" type="text" required className="width" />
        <br />
        <label className="label">
          Surname
          <span>*</span>
        </label>
        <br />
        <input id="surname" type="text" className="width" required />
        <br />
        <label className="label">
          Gender<span>*</span>
        </label>
        <select className=" gender" id="genders">
          <option value=""></option>
          <option id="1" value="male">
            Male
          </option>
          <option id="2" value="female">
            Female
          </option>
          <option id="3" value="transgender">
            Transgender
          </option>
        </select>
        <br />
        <div className="labelAlignMent">
          <label className=" labelInput ">
            Are you known by any other names(aliases)? <span>*</span>
          </label>
          <div>
            <input
              className="radioBtn"
              type="radio"
              id="yes"
              name="othersName"
              required
            />
            <label className="radioBtn">Yes</label>
            <input
              className="radioBtn"
              type="radio"
              id="no"
              name="othersName"
              required
            />
            <label className="radioBtn">No</label>
          </div>
        </div>
        <div className="labelAlignMent">
          <label className="labelInput">
            Have you ever changed your name ? <span>*</span>
          </label>
          <div>
            <input
              className="radioBtn"
              type="radio"
              id=""
              name="changeName"
              required
            />
            <label className="radioBtn">Yes</label>
            <input
              className="radioBtn"
              type="radio"
              id="no"
              name="changeName"
              required
            />
            <label className="radioBtn">No</label>
          </div>
        </div>
        <label className="label ">
          Date of Birth (DD/MM/YYYY) <span>*</span>
        </label>
        <input type="text" className="dateOfBirth" id="sixth" name="sixth" required />
        <br />
        <h4 className="heading-3">Place Of Birth</h4>
        <label className="label">
          Is your Place of Birth out of India?<span>*</span>
        </label>
        <input
          className="radioBtn"
          type="radio"
          id="yes"
          name="yesNo"
          required
        />
        <label className="radioBtn">Yes</label>
        <input
          className="radioBtn"
          type="radio"
          id="no"
          name="yesNo"
          required
        />
        <label className="radioBtn">No</label>
        <br />
        <label className="label">
          Village or Town or City <span>*</span>
        </label>
        <input type="text" required size="50" className="inputReq" />
        <br />
        <label className="label">
          Marital Status<span>*</span>
        </label>
        <select className="Marital" id="Status">
          <option value=""></option>
          <option id="1" value="Single">
            Single
          </option>
          <option id="2" value="Married">
            Married
          </option>
          <option id="3" value="Divorced">
            Divorced
          </option>
          <option id="4" value="Widow/Windower">
            Widow/Windower
          </option>
          <option id="5" value="Separated">
            Separated
          </option>
        </select>
        <label className="label">
          Citizenship of India by<span>*</span>
        </label>
        <select className="Citizenship  " id="Citizenship">
          <option value=""></option>
          <option id="1" value="Birth">
            Birth
          </option>
          <option id="2" value="Descent">
            Descent
          </option>
          <option id="3" value="Registration/Naturallization">
            Registration/Naturallization
          </option>
        </select>
        <br />
        <label className="label">PAN (If available)</label>
        <input
          className="inputReqPan"
          type="text"
          id="pan"
          required
          pattern=""
          minLength="10"
          maxLength="10"
        />
        <label className="label" for="Voter">
          Voter ID (If available)
        </label>
        <input
          className="inputReqVoter"
          type="text"
          id="Voter"
          required
          minLength="10"
          maxLength="10"
        />
        <br />
        <label className="label">
          Employment Type <span>*</span>
        </label>
        <select
          className="emp label inputReqEmp"
          id="Employment"
          required
          name="option"
        >
          <option value=""></option>
          <option id="gov" value="Government">
            Government
          </option>
          <option id="notemp" value="Not employed">
            Not employed
          </option>
          <option id="Homemaker" value="Homemaker">
            Homemaker
          </option>
          <option id="other" value="other ">
            {" "}
            other
          </option>
          <option
            id="owners"
            value="Owners, Partners & Directors of companies which are members of CII, FICCI & ASSOCHAM "
          >
            Owners, Partners & Directors of companies which are members of CII,
            FICCI & ASSOCHAM{" "}
          </option>
          <option id="Private" value="Private">
            Private
          </option>
          <option id="PSU" value="PSU ">
            {" "}
            PSU
          </option>
          <option
            id="Retired- Private Service"
            value="Retired- Private Service"
          >
            Retired- Private Service
          </option>
          <option
            id="Retired Government Servant"
            value=" Retired Government Servant"
          >
            {" "}
            Retired Government Servant
          </option>
          <option id="Self Employed" value="Self Employed">
            Self Employed
          </option>
        </select>
        <br />
        <label className="label">
          Is either of your parent (in case of minor)/ spouse, a government
          servant?<span>*</span>
        </label>
        <select className="Citizenship1" id="Citizenship">
          <option value=""></option>
          <option id="1" value="Yes">
            Yes
          </option>
          <option id="2" value="No">
            No
          </option>
        </select>
        <br />
        <label className="label">
          Educational Qualification<span>*</span>
        </label>
        <select className="Educational" id="Educational">
          <option value=""></option>
          <option id="1" value="7th pass or less">
            7th pass or less{" "}
          </option>
          <option id="2" value="Between 8th and 9th standard">
            Between 8th and 9th standard
          </option>
          <option id="3" value="10th pass and above">
            10th pass and above
          </option>
          <option id="4" value="Graduate and above">
            Graduate and above
          </option>
        </select>
        <label className="label ">
          Are you eligible for Non-ECR category?<span>*</span>
        </label>
        <select className="eligible label" id="eligible">
          <option value=""></option>
          <option id="1" value="Yes">
            Yes{" "}
          </option>
          <option id="2" value="No">
            No
          </option>
        </select>
        <br />
        <label className="label">
          Visible Distinguishing Mark <span>*</span>
        </label>
        <input type="text" id="Visible" required className="inputReqVisible" />
        <br />
        <label className="label">
          Aadhaar Number<span>*</span>
        </label>
        <input
          type="text"
          id="Aadhaar"
          required
          maxLength="12"
          className="inputReqAdhar"
        />
        <div className="border-part">
          <p>
            I, the holder of above mentioned Aadhaar Number , hereby give my
            consent to Passport Seva to obtain my Aadhaar Number, Name and
            Fingerprint/Iris for authentication with UIDAI. I have no objection
            using my identity and biometric information for validation with
            Aadhaar (CIDR) database only for the purpose of authentication.
          </p>
          I agree
          <input type="checkbox" /> Yes <input type="checkbox" />
          No
        </div>
        <h4 className="heading-3 ">
          Family Details (Father/Mother/Legal Guardian details; at least one is
          mandatory.) *
        </h4>
        <label className="label">
          Father's Given Name (Given Name means First Name followed by Middle
          Name (If any))
          <span>*</span>
          <br />
        </label>
        <input type="text" id="details" required className="width" />
        <br />
        <label className="label">Surname</label>
        <br />
        <input type="text" id="details" required className="width" />
        <br />
        <label className="label">
          Legal Guardian's Given Name (if applicable){" "}
        </label>
        <br />
        <input type="text" id="details" required className="width" />
        <br />
        <label className="label">Surname</label>
        <br />
        <input type="text" id="details" required className="width" />
        <br />
        <label className="label">
          Mother's Given Name (Given Name means First Name followed by Middle
          Name (If any))
          <span>*</span>
          <br />
        </label>
        <input type="text" id="details" required className="width" />
        <br />
        <label className="label">Surname</label>
        <br />
        <input type="text" id="details" required className="width" />
        <br />
        <h4 className="heading-3">
          Present Residential Address Details (where applicant presently
          resides){" "}
        </h4>
        <label className="label">
          Is your present address out of India? <span>*</span>
        </label>
        <input
          className="radioBtn"
          type="radio"
          id="present-address"
          name="present-address"
          required
        />
        <label className="radioBtn">Yes</label>
        <input
          className="radioBtn"
          type="radio"
          id="present-address"
          name="present-address"
          required
        />
        <label className="radioBtn">No</label>
        <br />
        <label>
          House No. and Street Name <span>*</span>
        </label>
        <input type="text" id="Address" required size="90" />
        <br />
        <label>
          Village or Town or City <span>*</span>
        </label>
        <input type="text" id="Town-city" required />
        <label>
          Region/Country <span>*</span>
        </label>
        <input type="text" className="Region" id="Region/Country " required />
        <br />
        <label>
          State/ Province <span>*</span>
        </label>
        <input type="text" className="state" id="State/ Province" required />
        <label>
          District/ County <span>*</span>
        </label>
        <input type="text"className="District" id="District/ County " required />
        <br />
        <label>
          Zip Code <span>*</span>
        </label>
        <input
          type="text"
          className="Zip"
          id="Zip CodeState/ Province"
          size="10"
          maxLength="6"
          required
        />
        <label>
          Mobile Number <span>*</span>
        </label>
        <input
          type="text"
          id="Mobile Number "
          maxLength="10"
          required
          className="numberMB"
        />
        <label>
          {" "}
          Telephone Number <span>*</span>
        </label>
        <input
          className="numberMB"
          type="text"
          id="Telephone-Number "
          required
          minLength="12"
          maxLength="12"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
        />
        <br />
        <label>
          E-mail ID <span>*</span>
        </label>
        <input
          type="text"
          id="E-mail-ID "
          className="email"
          size="90"
          required
        />
        <br />
        <label className="label">
          {" "}
          Do you have a Permanent Address? <span>*</span>
        </label>
        <input
          className="radioBtn"
          type="radio"
          id="Permanent-address"
          name="Permanent-address"
          required
        />
        <label className="radioBtn">Yes</label>
        <input
          className="radioBtn"
          type="radio"
          id="Permanent-address"
          name="Permanent-address"
          required
        />
        <label className="radioBtn">No</label>
        <br />
        <h4 className="heading-3">Emergency Contact Details *</h4>
        <label>
          {" "}
          Name and Address<span>*</span>
        </label>{" "}
        <br />
        <input type="text" id="Name-and-Address " className="width" />
        <br />
        <label>
          Mobile Number <span>*</span>
        </label>
        <input type="text" className="mb" id="Mobile Number " maxLength="10" required />
        <label>
          {" "}
          Telephone Number <span>*</span>
        </label>
        <input className="mb"
          type="text"
          id="Telephone-Number "
          required
          minLength="12"
          maxLength="12"
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
        />
        <br />
        <label>
          E-mail ID <span>*</span>
        </label>
        <input type="text" className="email" id="E-mail-ID " size="90" required />
        <br />
        <h4 className="heading-3">Identity Certificate /Passport Details</h4>
        <label className="label">
          Have you ever held/hold any Identity Certificate?<span>*</span>
        </label>
        <input
          className="radioBtn"
          type="radio"
          id="Identity-Certificate"
          name="Identity-Certificate"
          required
        />
        <label className="radioBtn">Yes</label>
        <input
          className="radioBtn"
          type="radio"
          id="Identity-Certificate"
          name="Identity-Certificate"
          required
        />
        <label className="radioBtn">No</label>
        <br />
   
        <label className="label">
          (Identity Certificate(IC) is normally issued to Tibetan/other
          stateless people residing in India) Details of Previous/Current
          Diplomatic/Official Passport<span>*</span>
        </label>
        <div className="details">
          <div className="detailsSection">
        <input type="radio" id="IC" name="IC" required />
        <label className="margin-between">Details Available</label></div>
        <div className="detailsSection">
        <input type="radio" id="IC" name="IC" required />
        <label>
          Details Not Available/Never Held Diplomatic/Official Passport
        </label></div>
        </div>
        <label className="label">
          Have you ever applied for passport, but not issued?<span>*</span>
        </label>
        <input
          className="radioBtn"
          type="radio"
          id="ICNot"
          name="ICNot"
          required
        />
        <label className="radioBtn">Yes</label>
        <input
          className="radioBtn"
          type="radio"
          id="ICNot"
          name="ICNot"
          required
        />
        <label className="radioBtn">No</label>
        <br />
        <div>
          <h4 className="heading-3">Other Details</h4>
          <div
            className="condition"
            style={{ display: "inline-block", width: "100%" }}
          >
            <h4 className="">
              1 Provide the following details if there are any criminal
              proceedings pending against the applicant.
            </h4>

            <div className="condition">
              <div className="para1">
                <p className="con-Para">
                  Are any proceedings in respect of an offence alleged to have
                  been committed by you pending before a criminal court in
                  India?<span>*</span>
                </p>
              </div>
              <div className="radio">
                <input type="radio" name="1" required />
                Yes
                <input type="radio" name="1" required />
                No
              </div>
            </div>
            <div className="condition">
              <div className="para1">
                <p className="con-Para">
                  Has any warrant or summons for your appearance been issued and
                  pending before a court under any law for the time being in
                  force?<span>*</span>
                </p>
              </div>
              <div className="radio">
                <input type="radio" name="2" required />
                Yes
                <input type="radio" name="2" required /> No
              </div>
            </div>
            <div className="condition">
              <div className="para1">
                <p className="con-Para-1">
                  Has a warrant for your arrest been issued by a court under any
                  law for the time being in force?<span>*</span>
                </p>
              </div>
              <div className="radio-1">
                <input type="radio" name="0point" required />
                Yes
                <input type="radio" name="0point" required />
                No
              </div>
            </div>
            <div className="condition">
              <div className="para1">
                <p className="con-Para-2">
                  Has an order prohibiting your departure from India been made
                  by any court?<span>*</span>
                </p>
              </div>
              <div className="radio-2">
                <input type="radio" name="1point" required />
                Yes
                <input type="radio" name="1point" required />
                No
              </div>
            </div>
          </div>
          <div
            className="condition"
            style={{ display: "inline-block", width: "100%" }}
          >
            <h4 className="">
              2 Provide the following details if the applicant has been
              convicted by a court in India.
            </h4>

            <div className="condition">
              <div className="para1">
                <p className="con-Para">
                  Have you, at any time during the period of five years
                  immediately preceding the date of this application, been
                  convicted by a court in India for any offence involving moral
                  turpitude and sentenced in respect thereof to imprisonment for
                  not less than two years?<span>*</span>
                </p>
              </div>
              <div className="radio">
                <input type="radio" name="2point" required />
                Yes
                <input type="radio" name="2point" required />
                No
              </div>
            </div>
          </div>
          <div
            className="condition"
            style={{ display: "inline-block", width: "100%" }}
          >
            <h4 className="">
              3 Provide the following details if the applicant has been
              refused/denied passport.
            </h4>

            <div className="">
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever been refused/denied passport?<span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="3point" required />
                Yes
                <input type="radio" name="3point" required />
                No
              </div>
            </div>
            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Has your passport ever been impounded?<span>*</span>
                </p>
              </div>
              <div className="radio-3" id="radio-4">
                <input type="radio" name="2point" required />
                Yes
                <input type="radio" name="2point" required />
                No
              </div>
            </div>
            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Has your passport ever been revoked?<span>*</span>
                </p>
              </div>
              <div className="radio-3" id="radio-5">
                <input type="radio" name="3point" required />
                Yes
                <input type="radio" name="3point" required />
                No
              </div>
            </div>
          </div>
          <div
            className="condition"
            style={{ display: "inline-block", width: "100%" }}
          >
            <h4 className="">
              4 Provide the following details if applicant has applied for or
              been granted foreign citizenship.
            </h4>

            <div className="">
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever been granted citizenship by any other
                  region/country?<span>*</span>
                </p>
              </div>
              <div className="radio-3" id="radio-6">
                <input type="radio" name="4point" required />
                Yes
                <input type="radio" name="4point" required />
                No
              </div>
            </div>
            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever held the passport of any other region/country at
                  any time?<span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="5point" required />
                Yes
                <input type="radio" name="5point" required />
                No
              </div>
            </div>
            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever surrendered your Indian passport?
                  <span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="6point" required />
                Yes
                <input type="radio" name="6point" required />
                No
              </div>
            </div>
            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever applied for renunciation of Indian citizenship?
                  <span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="7point" required />
                Yes
                <input type="radio" name="7point" required />
                No
              </div>
            </div>
          </div>
          <div
            className="condition"
            style={{ display: "inline-block", width: "100%" }}
          >
            <h4 className="">
              5 Provide the following details if applicant has returned to India
              on Emergency Certificate.
            </h4>

            <div className="">
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever returned to India on Emergency Certificate (EC)
                  ?<span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="7point" required />
                Yes
                <input type="radio" name="7point" required />
                No
              </div>
            </div>

            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever been deported from any country?<span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="9point" required />
                Yes
                <input type="radio" name="9point" required />
                No
              </div>
            </div>
            <div
              className=""
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className="para1">
                <p className="con-Para-3">
                  Have you ever been repatriated from any country back to India?
                  <span>*</span>
                </p>
              </div>
              <div className="radio-3">
                <input type="radio" name="10point" required />
                Yes
                <input type="radio" name="10point" required />
                No
              </div>
            </div>
          </div>
        </div>
        <div className="last-div">
          <h4 className="heading-3">Self Declaration</h4>
          <p>
            I owe allegiance to the sovereignty, unity & integrity of India, and
            have not voluntarily acquired citizenship or travel document of any
            other country. I have not lost, surrendered or been deprived of the
            citizenship of India. I have not contravened any of the conditions
            relating to the possession and use of an Indian passport
          </p>
          <p>
            I affirm that the information and particulars given by me in this
            form are true and correct. I further state that I am not suppressing
            any material information in this regard. I further affirm that the
            enclosures and documentary proof submitted in support of my
            application for an Indian passport are authentic and solely pertain
            to me and I am fully responsible for the accuracy of the same. I am
            liable to be penalized or prosecuted if found otherwise. I am aware
            that under the Passports Act, 1967 it is a criminal offence to
            furnish any false information or to suppress any material
            information with a view to obtaining passport or travel document.
          </p>
          <p>
            I have read and understood the contents of the above and by
            submitting this form certify that all the information submitted by
            me in the form is bonafide.{" "}
          </p>
          <input type="checkbox" required />I Agree
        </div>
        <label for=" place">
          {" "}
          Place <span>*</span>
        </label>
        <input type="text" id="place " required name="place" />
        <label for=" Date ">
          {" "}
          Date (DD/MM/YYYY) <span>*</span>
        </label>
        <input type="Date" id="Date " required name="Date" />
        <br />
        <h4 className="heading-3">NOTE : </h4>
        <p>
          Applicants are required to submit the proof of address of the present
          address only, irrespective of the date from which he/she has been
          residing at the given address.
        </p>
        <button className="btn">Validate and Save</button>
      </div>
    </>
  );
};
export default PasswordForm;
