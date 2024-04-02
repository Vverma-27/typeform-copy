import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showAcceptedError, setShowAcceptedError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [activeLang, setActiveLang] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordValidationErrors, setPasswordValidationErrors] = useState<
    string[]
  >(["", ""]);
  console.log(" hhh ", passwordValidationErrors);
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const { value } = e.target;
    if (value.trim() === "") return;
    if (!/^\S+@\S+\.\S+$/.test(value))
      setEmailError("Enter a valid email address");
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const { value } = e.target;
    if (value.trim() === "")
      setPasswordError("This field cannot be left blank");
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    if (value.trim() !== "") setPasswordError("");
    if (value.length < 8 || /(?=.*\d)(?=.*[^a-zA-Z0-9\s])/.test(value))
      setPasswordValidationErrors((pe) => [
        "Use 8 or more characters with a mix of letters, numbers and symbols",
        pe[1] || "",
      ]);
    else setPasswordValidationErrors((p) => ["", p[1]]);
    if (value.includes(email) && email.trim() !== "")
      setPasswordValidationErrors((pe) => [
        pe[0] || "",
        "The password should not contain parts of the username",
      ]);
    else setPasswordValidationErrors((p) => [p[0], ""]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) setEmailError("Enter a valid email address");
    if (!password) setPasswordError("This field cannot be left blank");
    if (!acceptedTerms) setShowAcceptedError(true);
    if (
      !email ||
      !password ||
      passwordValidationErrors.length !== 0 ||
      !acceptedTerms
    )
      return;
  };

  return (
    <>
      <div className="flex-1 overflow-auto bg-white rounded-l-[16px] basis-[10%] lg:ml-[-16px] h-full">
        <div className="w-full min-h-full grid grid-rows-[[first]_52px_[second]_auto_[third]_52px] grid-cols-[[first]_0px_[second]_auto]">
          <div className="relative pl-[24px] pt-[16px] xs:row-[first] row-[third] col-[first]">
            <div className="relative">
              <div
                role="menu"
                className={`sc-a9e82213-8  ${
                  showLangMenu ? "cEMsbE" : "iVeRCb"
                }`}
              >
                <button
                  role="menuitem"
                  onClick={() => setActiveLang(0)}
                  data-testid="language-item"
                  className={`sc-a9e82213-0 sc-a9e82213-5 ikAZaU ${
                    activeLang === 0 ? "active" : "inactive"
                  }`}
                >
                  <span className="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS">
                    English
                  </span>
                </button>
                <button
                  onClick={() => setActiveLang(1)}
                  role="menuitem"
                  data-testid="language-item"
                  className={`sc-a9e82213-0 sc-a9e82213-5 ikAZaU ${
                    activeLang === 1 ? "active" : "inactive"
                  }`}
                >
                  <span className="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS">
                    Español
                  </span>
                </button>
              </div>
              <button
                className="flex justify-center items-center cursor-pointer"
                onClick={() => setShowLangMenu((lm) => !lm)}
              >
                <div className="mr-[8px]">
                  <svg
                    height="17"
                    viewBox="0 0 20 20"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
                      fill="#5E5E5E"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-[#5e5e5e] text-[14px] font-normal leading-[1.5]">
                  {activeLang === 0 ? "English" : "Español"}
                </span>
                <div className="ml-[4px]">
                  <svg
                    fill="none"
                    height="5"
                    viewBox="0 0 9 5"
                    width="9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
                      fill="#5E5E5E"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="items-center flex justify-end col-[second] text-[#3d3d3c] py-[8px] px-[24px]">
            <p className="m-0 mr-[8px] text-[14px]">Already have an account?</p>
            <div className="inline-flex flex-col items-stretch gap-[16px] w-full bg-transparent min-w-[64px] max-w-full xs:w-auto md:gap-[8px]">
              <a
                href="#"
                className="inline-block border-[1px] border-[rgb(25,25,25)] border-solid cursor-pointer bg-transparent text-center py-[3px] px-[10px] rounded-[6px] font-medium text-[rgb(25,25,25)] text-[12px]"
              >
                Log in
              </a>
            </div>
          </div>
          <div className="md:max-w-[542px] flex-col flex justify-center items-center m-w-[256px] col-[second] row-[second] justify-self-center">
            <div className="flex h-[80px] items-center justify-center">
              <a href="#" className="leading-0">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="22"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-[10.21px] overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="108"
                      height="24"
                      fill="none"
                      className="sc-da9128ae-1 bOQHzD"
                    >
                      <path
                        fill="currentColor"
                        d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
            <h2 className=" font-extralight text-[24px] leading-[36px] text-[#5e5e5e] mb-[24px] text-center max-w-full">
              Get better data with conversational forms, surveys, quizzes &amp;
              more.
            </h2>
            <div className="md:max-w-[256px]">
              <main>
                <div></div>
                <div className="auth-content">
                  <div className="auth-content-inner">
                    <div className="registration">
                      <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="o-form-content o-form-theme clearfix mb-[15px]">
                          <div
                            className="o-form-error-container"
                            data-se="o-form-error-container"
                          ></div>
                          <div
                            className="o-form-fieldset-container"
                            data-se="o-form-fieldset-container"
                          >
                            <div
                              data-se="o-form-fieldset"
                              className="o-form-fieldset o-form-label-top mb-[15px]"
                            >
                              <div
                                data-se="o-form-input-container"
                                className="o-form-input o-form-has-errors"
                              >
                                <span
                                  data-se="o-form-input-email"
                                  className="o-form-input-name-email o-form-control okta-form-input-field input-fix border-[rgb(194, 194, 193)]"
                                >
                                  <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    id="input38"
                                    aria-label="Email"
                                    autoComplete="off"
                                    data-qa="field-email"
                                    value={email}
                                    onBlur={handleEmailBlur}
                                    onChange={handleEmailChange}
                                    className=""
                                  />
                                </span>
                                {emailError ? (
                                  <p
                                    id="input-container-error61"
                                    className="okta-form-input-error o-form-input-error o-form-explain"
                                    role="alert"
                                  >
                                    <span
                                      className="icon icon-16 error-16-small"
                                      role="img"
                                      aria-label="Error"
                                    ></span>
                                    {emailError}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div
                              data-se="o-form-fieldset"
                              className="o-form-fieldset o-form-label-top mb-[15px]"
                            >
                              <div
                                data-se="o-form-input-container"
                                className="o-form-input o-form-has-errors"
                              >
                                <span
                                  data-se="o-form-input-password"
                                  className="o-form-input-name-password relative o-form-control okta-form-input-field input-fix border-[rgb(194, 194, 193)]"
                                >
                                  <input
                                    type={hidden ? "password" : "text"}
                                    placeholder="Password"
                                    className="pr-[35px]"
                                    name="password"
                                    id="input45"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onBlur={handlePasswordBlur}
                                    aria-label="Password"
                                    autoComplete="off"
                                    data-qa="field-password"
                                    min-length="10"
                                    max-length="72"
                                    // @ts-ignore
                                    passwordrules="minlength: 10; maxlength: 72; required: lower; required: upper; required: digit; required: [!&quot;#$%&amp;'()*+,-./:;<=>?@[\]^_`{|}~];"
                                  />
                                  <button
                                    type="button"
                                    className="o-form-input-password-toggle bg-none border-none text-inherit outline-inherit h-0 w-0 p-0"
                                  >
                                    <span
                                      onClick={() => setHidden(false)}
                                      className={`o-form-input-eyeicon o-form-input-eyeicon-show ${
                                        hidden === true ? "block" : "hidden"
                                      }`}
                                      data-qa="reveal-password-button"
                                    >
                                      Reveal password
                                    </span>
                                    <span
                                      onClick={() => setHidden(true)}
                                      className={`o-form-input-eyeicon o-form-input-eyeicon-hide ${
                                        hidden !== true ? "block" : "hidden"
                                      }`}
                                      data-qa="hide-password-button"
                                    >
                                      Hide password
                                    </span>
                                  </button>
                                </span>
                                {passwordError ? (
                                  <p
                                    id="input-container-error62"
                                    className="okta-form-input-error o-form-input-error o-form-explain"
                                    role="alert"
                                  >
                                    <span
                                      className="icon icon-16 error-16-small"
                                      role="img"
                                      aria-label="Error"
                                    ></span>
                                    {passwordError}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div id="subschemas-password" className="subschema">
                              <div className="subschema-unsatisfied subschema-0">
                                <p className="default-schema">
                                  <span className="icon icon-16"></span>At least
                                  8 character(s)
                                </p>
                              </div>
                              <div className="subschema-unsatisfied subschema-1">
                                <p className="default-schema">
                                  <span className="icon icon-16"></span>At least
                                  1 number(s)
                                </p>
                              </div>
                              <div className="subschema-unsatisfied subschema-2">
                                <p className="default-schema">
                                  <span className="icon icon-16"></span>At least
                                  1 symbol(s)
                                </p>
                              </div>
                              <div className="subschema-unsatisfied subschema-3">
                                <p className="default-schema">
                                  <span className="icon icon-16"></span>Does not
                                  contain part of username
                                </p>
                              </div>
                            </div>
                            <div id="custom-password-validation">
                              {passwordValidationErrors
                                .filter((e) => e !== "")
                                .map((e: string) => {
                                  return (
                                    <div className="subschema-unsatisfied visible">
                                      <p>
                                        <span
                                          role="presentation"
                                          aria-label="Error"
                                        ></span>
                                        {e}
                                      </p>
                                    </div>
                                    // <div className="subschema-unsatisfied visible">
                                    //   <p
                                    //     className="okta-form-input-error o-form-input-error o-form-explain"
                                    //     role="alert"
                                    //   >
                                    //     <span
                                    //       className="icon icon-16 error-16-small"
                                    //       role="img"
                                    //       aria-label="Error"
                                    //     ></span>
                                    //     {e}
                                    //   </p>
                                    // </div>
                                  );
                                })}
                            </div>
                            <span className="required-fields-label hidden">
                              * indicates required field
                            </span>
                          </div>
                        </div>
                        <div>
                          <label
                            className="block text-[14px] text-[#191919] leading-[18px] mb-[16px] pl-[30px] relative"
                            id="label-terms_and_consents"
                          >
                            <input
                              id="terms_and_consents"
                              className="absolute top-0 left-0 w-[20px] h-[20px] m-0 appearance-none rounded-[3px] shadow-[#cfcfce_0px_0px_0px_1px_inset]"
                              aria-labelledby="label-terms_and_consents"
                              // data-checked="false"
                              checked={acceptedTerms}
                              onChange={() => {
                                if (showAcceptedError)
                                  setShowAcceptedError(false);
                                setAcceptedTerms((at) => !at);
                              }}
                              data-field-id="terms_and_consents"
                              data-testid="terms_and_consents"
                              data-qa="field-terms_and_consents"
                              type="checkbox"
                            />
                            I agree to Typeform’s{" "}
                            <a
                              rel="noopener"
                              target="_blank"
                              href="https://www.typeform.com/terms-service/"
                              className="underline"
                            >
                              Terms of Service
                            </a>
                            ,{" "}
                            <a
                              rel="noopener"
                              target="_blank"
                              href="https://www.typeform.com/privacy-policy/"
                              className="underline"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              rel="noopener"
                              target="_blank"
                              href="https://www.typeform.com/privacy-policy/"
                              className="underline"
                            >
                              Data Processing Agreement
                            </a>
                            .
                          </label>
                          {showAcceptedError ? (
                            <div className="subschema-unsatisfied visible">
                              <p>
                                <span
                                  role="presentation"
                                  aria-label="Error"
                                ></span>
                                Please accept the terms and conditions to finish
                                the signup
                              </p>
                            </div>
                          ) : null}
                          <div className="pl-[30px] pb-[15px] pt-[8px]">
                            <div
                              onClick={() => setShowOptions((so) => !so)}
                              className="flex items-baseline cursor-pointer text-[14px] justify-between leading-[32px] m-0"
                            >
                              <p className="text-[14px] m-0">See Options</p>
                              <span className=" rotate-180">
                                <svg
                                  width="12"
                                  height="7"
                                  viewBox="0 0 12 7"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div
                              aria-hidden="false"
                              className={`sc-8a3f566d-0 ${
                                showOptions ? "SEhcp" : "cXVBDv"
                              }`}
                            >
                              <div className="sc-8a3f566d-1 hmDPMZ">
                                <div className="radio-toggle-group">
                                  <div className="sc-39ef67a9-3 jHYAji">
                                    <label
                                      id="marketing"
                                      className="sc-39ef67a9-4 suRJf"
                                    >
                                      Get useful tips, inspiration, and offers
                                      via e-communication.
                                    </label>
                                  </div>
                                  <div className="sc-39ef67a9-6 bFIJrf">
                                    <div className="sc-747caa34-0 hYbokD">
                                      <label className="sc-747caa34-1 lcIIfk">
                                        <input
                                          readOnly={false}
                                          aria-labelledby="marketing-Yes"
                                          data-testid="marketing"
                                          className="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc"
                                          aria-label=""
                                          type="radio"
                                          name="marketing"
                                          value=""
                                        />
                                        <div className="sc-747caa34-2 kHWehz">
                                          <p className="sc-39ef67a9-7 eIWats">
                                            Yes
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="sc-747caa34-0 hYbokD">
                                      <label className="sc-747caa34-1 lcIIfk">
                                        <input
                                          readOnly={false}
                                          aria-labelledby="marketing-No"
                                          data-testid="marketing"
                                          name="marketing"
                                          className="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc"
                                          aria-label=""
                                          type="radio"
                                          value=""
                                        />
                                        <div className="sc-747caa34-2 kHWehz">
                                          <p className="sc-39ef67a9-7 kORYub">
                                            No
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="radio-toggle-group">
                                  <div className="sc-39ef67a9-3 jHYAji">
                                    <label
                                      id="tailor_to_needs_agreed"
                                      className="sc-39ef67a9-4 suRJf"
                                    >
                                      Tailor Typeform to my needs based on my
                                      activity.
                                    </label>
                                    <a
                                      id="tailor_to_needs_agreed"
                                      href="/privacy-policy/"
                                      target="_blank"
                                      rel="noopener"
                                      className="sc-39ef67a9-5 cloxAA"
                                    >
                                      See Privacy Policy
                                    </a>
                                  </div>
                                  <div className="sc-39ef67a9-6 bFIJrf">
                                    <div className="sc-747caa34-0 hYbokD">
                                      <label className="sc-747caa34-1 lcIIfk">
                                        <input
                                          readOnly={false}
                                          aria-labelledby="tailor_to_needs_agreed-Yes"
                                          data-testid="tailor_to_needs_agreed"
                                          className="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc"
                                          aria-label=""
                                          type="radio"
                                          name="tailored"
                                          value=""
                                        />
                                        <div className="sc-747caa34-2 kHWehz">
                                          <p className="sc-39ef67a9-7 eIWats">
                                            Yes
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="sc-747caa34-0 hYbokD">
                                      <label className="sc-747caa34-1 lcIIfk">
                                        <input
                                          readOnly={false}
                                          aria-labelledby="tailor_to_needs_agreed-No"
                                          data-testid="tailor_to_needs_agreed"
                                          className="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc"
                                          aria-label=""
                                          name="tailored"
                                          type="radio"
                                          value=""
                                        />
                                        <div className="sc-747caa34-2 kHWehz">
                                          <p className="sc-39ef67a9-7 kORYub">
                                            No
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="radio-toggle-group">
                                  <div className="sc-39ef67a9-3 jHYAji">
                                    <label
                                      id="third_parties_agreed"
                                      className="sc-39ef67a9-4 suRJf"
                                    >
                                      Enrich my data with select third parties
                                      for more relevant content.
                                    </label>
                                    <a
                                      id="third_parties_agreed"
                                      href="/privacy-policy/"
                                      target="_blank"
                                      rel="noopener"
                                      className="sc-39ef67a9-5 cloxAA"
                                    >
                                      See Privacy Policy
                                    </a>
                                  </div>
                                  <div className="sc-39ef67a9-6 bFIJrf">
                                    <div className="sc-747caa34-0 hYbokD">
                                      <label className="sc-747caa34-1 lcIIfk">
                                        <input
                                          readOnly={false}
                                          aria-labelledby="third_parties_agreed-Yes"
                                          data-testid="third_parties_agreed"
                                          className="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc"
                                          aria-label=""
                                          type="radio"
                                          name="third_parties"
                                          value=""
                                        />
                                        <div className="sc-747caa34-2 kHWehz">
                                          <p className="sc-39ef67a9-7 eIWats">
                                            Yes
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="sc-747caa34-0 hYbokD">
                                      <label className="sc-747caa34-1 lcIIfk">
                                        <input
                                          readOnly={false}
                                          aria-labelledby="third_parties_agreed-No"
                                          data-testid="third_parties_agreed"
                                          className="sc-747caa34-3 ldYTNE sc-39ef67a9-8 kUETNc"
                                          aria-label=""
                                          type="radio"
                                          name="third_parties"
                                          value=""
                                        />
                                        <div className="sc-747caa34-2 kHWehz">
                                          <p className="sc-39ef67a9-7 kORYub">
                                            No
                                          </p>
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <p
                                  color="#7F7F7F"
                                  className="sc-446aec8b-1 dEXZxc"
                                >
                                  You can update your preferences in your
                                  Profile at any time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="o-form-button-bar sm:max-w-full flex justify-center ">
                          <input
                            className="button button-primary bg-[#191919] sm:max-w-[230px] rounded-[3px] border-none text-white cursor-pointer text-[16px] h-[40px] leading-[1.4] w-full appearance-none"
                            type="submit"
                            // onSubmit={handleSubmit}
                            value="Create my free account"
                            data-type="save"
                            data-qa="button-submit"
                          />
                          {/* border-radius: 3px; border: none; color: rgb(255, 255,
    255); cursor: pointer; font-size: 16px; font-family:
    apercu-pro, -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", sans-serif; height: 40px; line-height:
    1.4; padding: 0px; width: 100%; appearance: none; */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <style></style>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
