import React from "react";

const NonPaid = () => {
  const handleClick = () => {
    const localtoken = localStorage.getItem("logintoken");

    fetch("http://localhost:8000/paytm/payment", {
      method: "get",
      headers: { Authorization: `Bearer ${localtoken}` }
    })
      .then(response => response.json())
      .then(responseJson => {
        const form = document.createElement("form");
        form.method = "post";
        form.action = "https://securegw-stage.paytm.in/order/process";

        for (const key in responseJson) {
          if (responseJson.hasOwnProperty(key)) {
            const hiddenField = document.createElement("input");
            hiddenField.type = "hidden";
            hiddenField.name = key;
            hiddenField.value = responseJson[key];

            form.appendChild(hiddenField);
          }
        }
        document.body.appendChild(form);
        console.log("FORM", form);
        form.submit();
      });
  };
  return (
    <div className="nonpaid-page" style={{ overflowY: "hidden" }}>
      <div className="cloud1-wrap" style={{ fill: "white" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="121.023"
          height="39.45"
          viewBox="0 0 171.023 59.45"
        >
          <path
            className="a"
            d="M170.964,91.048c-.123.444-1.353.823-3.427,1.144-.583.091-1.224.176-1.936.262-14.277,1.652-53.106,1.636-68.083,2.235-18.356.727,15.5,6.374-26.387,4.919C49.037,98.844,21.6,97.972.01,97.277v-4.24l.54.016c9.453.364,6.876-4.561,10.314-6.026,3.454-1.46,9.191,1.465,11.769-8.127,2.588-9.609,25.532-3.973,25.532-3.973C37.268,58.789,53.63,34.567,82.6,41.668c14.255,3.5,16.987,12.95,16.084,21.655-.053.5-.118.989-.187,1.476.246-.027.5-.048.759-.07a68.918,68.918,0,0,1,9.165-.1c22.094,1.091,31.857,10.384,32.424,15.335s-12.908,5.62,5.459,7.063C164.655,88.481,171.825,87.952,170.964,91.048Z"
            transform="translate(-0.01 -40.396)"
          />
        </svg>
      </div>
      <div className="cloud2-wrap" style={{ fill: "#fff" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="291.975"
          height="57.591"
          viewBox="0 0 251.975 87.591"
        >
          <path
            className="a"
            d="M.111,115.023c.181.654,1.993,1.213,5.05,1.686.859.134,1.8.26,2.852.386,21.034,2.434,78.244,2.411,100.31,3.293,27.045,1.071-22.83,9.391,38.878,7.248,32.552-1.127,72.973-2.411,104.785-3.435v-6.247l-.8.024c-13.928.536-10.131-6.72-15.2-8.878-5.089-2.151-13.542,2.159-17.339-11.975-3.813-14.157-37.617-5.853-37.617-5.853,16.055-23.776-8.051-59.463-50.734-49-21,5.152-25.028,19.08-23.7,31.906.079.733.173,1.457.276,2.174-.362-.039-.741-.071-1.119-.1a101.539,101.539,0,0,0-13.5-.15C59.708,77.705,45.323,91.4,44.488,98.692c-.843,7.311,19.017,8.28-8.043,10.407C9.407,111.242-1.157,110.462.111,115.023Z"
            transform="translate(-0.01 -40.396)"
          />
        </svg>
      </div>

      <div className="containerdata">
        <div className="ill">
          <div className="logo-wrap" style={{ zIndex: "5" }}>
            <img
              className="logo"
              src="https://gs-post-images.grdp.co/2019/10/logo-img1570905617416-54.png-rs-high-webp.png"
              alt=""
            />
          </div>
        </div>
        <div className="info">
          <div className="text-center" style={{ zIndex: "10" }}>
            <button className="btn btn-primary" onClick={handleClick}>
              Pay now
            </button>
            {/* <a href="http://localhost:8000/paytm/payment">Pay Now</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonPaid;
