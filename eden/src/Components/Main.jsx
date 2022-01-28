import React, { useState } from "react";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import logo from "../images/Edenlogo.PNG";
function Main() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    wName: "",
    wUrl: "",
    mySelf: "",
    team: "",
  });

  const PageDisplay = () => {
    if (page === 1) {
      return <FirstStep formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <ThirdStep formData={formData} setFormData={setFormData} />;
    } else {
      return <FourthStep formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="main_div">
      <div className="logo_div">
        <img src={logo} alt="logo" />
        <h2>Eden</h2>
      </div>
      <div class="progress-container">
        <div
          class="progress"
          id="progress"
          style={{
            width:
              page === 1
                ? "25%"
                : page === 2
                ? "50%"
                : page === 3
                ? "75%"
                : "100%",
          }}
        ></div>
        <div className={`circle ${page >= 1 ? "active" : ""}`}>1</div>
        <div className={`circle ${page >= 2 ? "active" : ""}`}>2</div>
        <div className={`circle ${page >= 3 ? "active" : ""}`}>3</div>
        <div className={`circle ${page >= 4 ? "active" : ""}`}>4</div>
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="button_container">
          <button
            onClick={() => {
              if (page === 4) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page < 4 ? "Create Workspace" : "Launch Eden"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
