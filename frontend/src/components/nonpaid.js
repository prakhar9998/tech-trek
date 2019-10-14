import React from "react";

const NonPaid = () => {
  const handleClick = () => {
    const localtoken = localStorage.getItem("logintoken");

    fetch(`${process.env.REACT_APP_URL}/paytm/payment`, {
      method: "get",
      headers: { Authorization: `Bearer ${localtoken}` }
    })
      .then(response => response.json())
      .then(responseJson => {
        const form = document.createElement("form");
        form.method = "post";
        form.action = "https://securegw.paytm.in/order/process";

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
      <div className="web-pumpkin2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250.16"
          height="150.614"
          viewBox="0 0 368.16 223.614"
        >
          <g transform="translate(0.889 -0.003)">
            <g className="aa" transform="translate(105 -245)">
              <path
                className="bb"
                d="M159.748,380.079c-2.077.891-4.335-.312-6.425-.565a2.337,2.337,0,0,0-1.44.3,2.826,2.826,0,0,0-1.022,2.59,10.974,10.974,0,0,0,1.154,4.681l-2.541-3.177a7.814,7.814,0,0,0-2.184-2.1,5.3,5.3,0,0,0-5.441.647,15.591,15.591,0,0,0-3.74,4.355,14.532,14.532,0,0,0-.979-5.9,2.1,2.1,0,0,0-.927-1.08,2.362,2.362,0,0,0-1.094-.125,33.724,33.724,0,0,0-8.461,1.526,52.955,52.955,0,0,1,5.323-4.716c2.571-1.989,3.3-4.482,1.88-7.494-1.361-2.883-2.47-5.322-2.583-8.582-.1-2.918-.265-5.2,1.907-7.443,2.712-2.8,6.92-4.963,10.883-4.859a7.423,7.423,0,0,1,6.368,4.5c.915,1.9,2.181,6.412-.01,7.88a3.829,3.829,0,0,1-2.41.369c-.293-.432.132-.967.412-1.407,1.9-2.991-2.122-6.286-4.542-7.189a5.3,5.3,0,0,0-4.837.4c-4.066,2.862-3.449,9.1-.544,12.54,5.737,6.792,14.581,8.809,21.639,13.752a.713.713,0,0,1,.273.283c.122.3-.185.59-.473.732C159.872,380.024,159.81,380.053,159.748,380.079Z"
              />
              <path
                className="cc"
                d="M135.9,374.457a5.706,5.706,0,0,0,.944-3.942,13.148,13.148,0,0,0-1.179-3.957,21.654,21.654,0,0,1-.838-2.056,13.76,13.76,0,0,1,1.1-10.085,7.222,7.222,0,0,1,1.773-2.368,5.745,5.745,0,0,1,4.066-1.184,8.7,8.7,0,0,1,4.034,1.471c.892.582,1.786,1.5,1.6,2.547-.138.787-.84,1.337-1.222,2.039a4.594,4.594,0,0,0-.163,3.215,15.223,15.223,0,0,0,7.795,9.982c1.175.6,2.429,1.045,3.553,1.735a5.238,5.238,0,0,1,2.472,2.963,4.635,4.635,0,0,1-.848,3.764,10.337,10.337,0,0,1-2.976,2.612c-6.81,4.342-15.28,5.511-23.311,4.654-1.675-.178-3.544-.564-4.461-1.976a4,4,0,0,1,.043-3.973,5.681,5.681,0,0,1,3.479-2.96A7.625,7.625,0,0,0,135.9,374.457Z"
              />
              <path
                className="cc"
                d="M138.877,367.888a22.055,22.055,0,0,1-2.457-5.136,7.1,7.1,0,0,1,.506-5.53c4.363,3.693,7.786,8.469,12.5,11.7,4.2,2.882,9.2,4.386,13.5,7.121a6.321,6.321,0,0,1,2.949,3.247,4.547,4.547,0,0,1-1.315,4.321,9.524,9.524,0,0,1-4.129,2.221,35.67,35.67,0,0,1-7.841,1.219c-4.969.332-10.188.245-14.6-2.057-.7-.366-1.456-.908-1.5-1.7a1.974,1.974,0,0,1,.379-1.153,15.672,15.672,0,0,1,2.039-2.154,6.621,6.621,0,0,0,1.378-2.614,12.208,12.208,0,0,0,.61-5.243C140.711,370.5,139.7,369.291,138.877,367.888Z"
              />
              <path
                className="dd"
                d="M159.748,380.079c-2.077.891-4.335-.312-6.425-.565a2.337,2.337,0,0,0-1.44.3,2.826,2.826,0,0,0-1.022,2.59,10.974,10.974,0,0,0,1.154,4.681l-2.541-3.177a7.814,7.814,0,0,0-2.184-2.1,5.3,5.3,0,0,0-5.441.647,15.591,15.591,0,0,0-3.74,4.355,14.532,14.532,0,0,0-.979-5.9,2.1,2.1,0,0,0-.927-1.08,2.362,2.362,0,0,0-1.094-.125,33.724,33.724,0,0,0-8.461,1.526,52.955,52.955,0,0,1,5.323-4.716c2.571-1.989,3.3-4.482,1.88-7.494-1.361-2.883-2.47-5.322-2.583-8.582-.1-2.918-.265-5.2,1.907-7.443,2.712-2.8,6.92-4.963,10.883-4.859a7.423,7.423,0,0,1,6.368,4.5c.915,1.9,2.181,6.412-.01,7.88a3.829,3.829,0,0,1-2.41.369c-.293-.432.132-.967.412-1.407,1.9-2.991-2.122-6.286-4.542-7.189a5.3,5.3,0,0,0-4.837.4c-4.066,2.862-3.449,9.1-.544,12.54,5.737,6.792,14.581,8.809,21.639,13.752a.713.713,0,0,1,.273.283c.122.3-.185.59-.473.732C159.872,380.024,159.81,380.053,159.748,380.079Z"
              />
              <path
                className="ee"
                d="M133.037,375.716c2.893,1.817,4.077,3.731,2.955,7.328-1.8,5.752-3.6,11.17-4.505,17.188-.987,6.591-1.37,13.26-2.007,19.9-.5,5.242-.651,10.514-.674,15.781-.039,8.74,2.878,24.3-7.672,27.886-4.941,1.68-10.405-.348-14.983-2.365-12.994-5.723-23.182-17.738-24.372-33.168-.949-12.312,4.494-23.7,11.686-32.883,6.572-8.392,15.6-16.7,25.2-20.666A15.268,15.268,0,0,1,133.037,375.716Z"
              />
              <path
                className="ff"
                d="M124.2,459.142c-4.941,1.681-10.4-.347-14.984-2.364C96.22,451.054,86.032,439.04,84.842,423.61c-.72-9.335,2.238-18.135,6.844-25.849-6.283,8.74-10.776,19.229-9.907,30.5,1.19,15.43,11.378,27.444,24.371,33.168,4.579,2.017,10.043,4.045,14.984,2.365a10.454,10.454,0,0,0,6.586-6.676A10.163,10.163,0,0,1,124.2,459.142Z"
              />
              <path
                className="ee"
                d="M153.446,375.716c-2.893,1.817-4.078,3.731-2.955,7.328,1.795,5.752,3.6,11.17,4.5,17.188.988,6.591,1.371,13.26,2.007,19.9.5,5.242.651,10.514.675,15.781.039,8.74-2.879,24.3,7.671,27.886,4.941,1.68,10.4-.348,14.984-2.365,12.993-5.723,23.181-17.738,24.371-33.168.95-12.312-4.493-23.7-11.686-32.883-6.572-8.392-15.594-16.7-25.195-20.666A15.266,15.266,0,0,0,153.446,375.716Z"
              />
              <path
                className="ff"
                d="M162.285,459.142c4.941,1.681,10.406-.347,14.984-2.364,12.993-5.724,23.182-17.738,24.372-33.168.719-9.335-2.239-18.135-6.844-25.849,6.282,8.74,10.775,19.229,9.906,30.5-1.19,15.43-11.378,27.444-24.371,33.168-4.579,2.017-10.043,4.045-14.984,2.365a10.454,10.454,0,0,1-6.586-6.676A10.172,10.172,0,0,0,162.285,459.142Z"
              />
              <path
                className="gg"
                d="M181.814,404.124a120.006,120.006,0,0,0-6.834-10.961c-4.371-6.252-11.427-15.144-18.839-16.76a7.268,7.268,0,0,0-7.363,2.365c-2.229,2.918-2.152,7.075-1.486,10.658a79.642,79.642,0,0,0,2.779,9.483c4.9,15.417,4.914,31.025,2.036,46.872-.882,4.855-7.336,12.747-3.476,17.582a6.347,6.347,0,0,0,3.351,1.968c10.275,2.908,22.908-.753,30.795-7.772,7.12-6.336,9.788-16.408,8.644-25.657C190.209,422.11,186.438,412.544,181.814,404.124Z"
              />
              <path
                className="ff"
                d="M149.439,458.456c10.275,2.908,22.907-.753,30.795-7.772,7.12-6.336,9.788-16.408,8.644-25.657a65.4,65.4,0,0,0-2.641-11.778,71,71,0,0,1,5.184,18.653c1.144,9.249-1.524,19.321-8.644,25.657-7.887,7.019-20.52,10.68-30.795,7.772a6.347,6.347,0,0,1-3.351-1.968,6.528,6.528,0,0,1-1.009-5.621A8.864,8.864,0,0,0,149.439,458.456Z"
              />
              <path
                className="hh"
                d="M158.163,377.04c6.657,2.6,12.846,10.443,16.817,16.123,1.084,1.551,2.158,3.171,3.212,4.839a10.466,10.466,0,0,1-7.913,2.327c-8.16-.944-12.372-10.694-12.919-17.911A12.365,12.365,0,0,1,158.163,377.04Z"
              />
              <path
                className="hh"
                d="M189.648,391.369a10.544,10.544,0,0,1-3.02,1.364c-7.928,2.148-15.455-5.344-18.639-11.844a12.262,12.262,0,0,1-1.195-6.556c.337.117.672.241,1.006.379C175.862,378.039,183.51,384.435,189.648,391.369Z"
              />
              <path
                className="gg"
                d="M104.668,404.124a120.227,120.227,0,0,1,6.834-10.961c4.371-6.252,11.427-15.144,18.84-16.76a7.266,7.266,0,0,1,7.362,2.365c2.23,2.918,2.153,7.075,1.486,10.658a79.641,79.641,0,0,1-2.778,9.483c-4.9,15.417-4.915,31.025-2.036,46.872.882,4.855,7.335,12.747,3.476,17.582a6.347,6.347,0,0,1-3.351,1.968c-10.276,2.908-22.908-.753-30.8-7.772-7.121-6.336-9.789-16.408-8.644-25.657C96.273,422.11,100.044,412.544,104.668,404.124Z"
              />
              <path
                className="ff"
                d="M137.044,458.456c-10.276,2.908-22.908-.753-30.8-7.772-7.121-6.336-9.789-16.408-8.644-25.657a65.308,65.308,0,0,1,2.641-11.778A70.956,70.956,0,0,0,95.062,431.9c-1.145,9.249,1.523,19.321,8.644,25.657,7.887,7.019,20.519,10.68,30.8,7.772a6.347,6.347,0,0,0,3.351-1.968,6.528,6.528,0,0,0,1.008-5.621A8.856,8.856,0,0,1,137.044,458.456Z"
              />
              <path
                className="ii"
                d="M165.128,452.131c4.025-10.546,2.468-22.1.954-33.039a116.728,116.728,0,0,0-5.173-22.817c-2.759-7.825-6.685-16.39-14.733-18.538a13.272,13.272,0,0,0-13.01,3.312c-3.931,4.046-5.476,9.635-7.175,15.116-3.828,12.347-6.556,25.7-6.9,38.783-.212,8.028.088,17.377,4.935,23.89,7.006,9.415,22.724,12.04,32.008,5.348A25.815,25.815,0,0,0,165.128,452.131Z"
              />
              <path
                className="hh"
                d="M131.48,386.365a21.062,21.062,0,0,0-3.69,11.415c-.063,6.741,5.377,12.864,12.413,12.049,8.16-.944,12.372-10.694,12.919-17.911.344-4.527-1.874-9.4-6.3-11.117C140.412,378.309,134.9,381.4,131.48,386.365Z"
              />
              <path
                className="hh"
                d="M128.319,377.04c-6.657,2.6-12.845,10.443-16.816,16.123-1.084,1.551-2.158,3.171-3.212,4.839a10.465,10.465,0,0,0,7.913,2.327c8.16-.944,12.371-10.694,12.919-17.911A12.381,12.381,0,0,0,128.319,377.04Z"
              />
              <path
                className="hh"
                d="M96.834,391.369a10.556,10.556,0,0,0,3.02,1.364c7.929,2.148,15.455-5.344,18.64-11.844a12.261,12.261,0,0,0,1.194-6.556c-.336.117-.672.241-1.006.379C110.621,378.039,102.972,384.435,96.834,391.369Z"
              />
              <path className="jj" d="M142.711,405.658l-3.156,7.011h9.018Z" />
              <path
                className="kk"
                d="M135.3,404.518l-15.172-15.547-6.491,18.149Z"
              />
              <path
                className="jj"
                d="M118.29,403.974l4.335-12.446-2.5-2.558-6.491,18.149,21.663-2.6-1.2-1.234Z"
              />
              <path
                className="ll"
                d="M151.178,402.956l16.867-13.69,4.351,18.777Z"
              />
              <path
                className="jj"
                d="M168.137,404.38l-2.868-12.863,2.775-2.252,4.351,18.778-21.218-5.087,1.339-1.087Z"
              />
              <path
                className="kk"
                d="M168.908,420.086l-4.889,7.041-7.214-9.188-5.107,8.326-9.231-10.135-4.286,6.224-9.2-8.62-2.364,8.573-8.645-7.534s-5.054,7.688-3.481,14.751a47.325,47.325,0,0,0,5.186,12.922l3.92-5.3,4.092,9.735,4.02-5.44,5.558,6.054,5.386-6.581,7.616,8.643,2.742-9.368,8.627,6.144a21.947,21.947,0,0,0,8.572-12.449C172.361,425.453,168.908,420.086,168.908,420.086Z"
              />
              <path
                className="mm"
                d="M170.212,429.409a21.947,21.947,0,0,1-8.572,12.449l-8.627-6.144-2.742,9.368-7.616-8.643-5.386,6.581-5.558-6.054-4.02,5.44-4.092-9.735-3.92,5.3a47.31,47.31,0,0,1-5.186-12.921c-.056-.253-.086-.507-.126-.76a14.538,14.538,0,0,0,.126,5.23,47.325,47.325,0,0,0,5.186,12.922l3.92-5.3,4.092,9.735,4.02-5.44,5.558,6.054,5.386-6.581,7.616,8.643,2.742-9.368,8.627,6.144a21.947,21.947,0,0,0,8.572-12.449,21.177,21.177,0,0,0,.576-7.655A22.657,22.657,0,0,1,170.212,429.409Z"
              />
            </g>
            <g transform="translate(389.359 21.35)">
              <path
                className="nn"
                d="M-35.109,192.6c43.072-16.828,70.257-34.614,108.643-60.4,17.179-11.542,31.267-26.159,46.729-39.959a616.225,616.225,0,0,0,47.228-47.452c23.967-26.6,36.93-38.372,51.951-71.4,3.262-7.169-2.545,8.234,0,0"
                transform="translate(-353.159 8.964)"
              />
              <path
                className="nn"
                d="M-29.857,73.822C-13.231,88.555,10.219,92.36,32.37,94.053c59.891,4.578,120.953-1.926,177.475-22.25S299.1,29.7,337.226-16.706"
                transform="translate(-359.894 -3.197)"
              />
              <path
                className="nn"
                d="M31.442-1c.466.65-5.1-5.852-4.222-4.672C39.205,10.486,60.847,31.6,74.1,47.309c18.652,22.11,38.21,38.345,64.567,50.007"
                transform="translate(-355.987 -11.114)"
              />
              <path
                className="nn"
                d="M131.74-20.732c1.3,21.911-.124,25.254,0,47.209.11,19.365,2.3,42.2-5.971,60.295"
                transform="translate(-343.09 -0.57)"
              />
              <path
                className="nn"
                d="M87.9,129.463A44.08,44.08,0,0,0,76.607,95.446c10.57-6.61,15.761-20.73,11.989-32.613,11.043,1.827,23.466-.116,33.712-4.743,6.555-2.961,12.48-8.068,14.767-14.887.1,5.363,3.645,10.188,8.068,13.224,5.169,3.547,11.6,4.547,16.97.541-2.9,9.7,6.485,18.665,15.441,19.686,4.934.564,10.711-1.985,15.59-2.906-.72,5.709,2.123,13.046,7.216,15.723s11.3,2.644,16.8.953c8.583-2.639,15.646-9.009,20.7-16.429s8.323-15.894,11.368-24.342"
                transform="translate(-348.398 -3.315)"
              />
              <path
                className="nn"
                d="M55.635,157.008C60.8,151.467,65.859,145.464,68,138.2c3-10.225,2.594-22.136-1.826-31.913-1.56-3.449-4.493-6.5-8.215-7.2a52.189,52.189,0,0,0,17.391-50.2c3.2,2.258,7.286,2.826,11.2,2.9,22.489.41,44.392-14.927,51.7-36.2a32.155,32.155,0,0,0,13.38,23.659c9.249,6.5,22.086,8.511,30.748.289.723,6.472,5.393,12.022,11.079,15.195s12.292,4.279,18.787,4.743a77.508,77.508,0,0,0,44.008-10.089"
                transform="translate(-350.663 -6.296)"
              />
              <path
                className="nn"
                d="M110.2,104.087a4.766,4.766,0,0,0,1-2.477,11.063,11.063,0,0,0-6.7-11.589c7.986-3.429,4.81-12.347-.2-16.463,4.69.963,9.433,1.931,14.218,1.759s9.688-1.6,13.188-4.861c1.143-1.067,2.179-2.676,1.548-4.106.579,2.264,1.639,5.47,3.978,6.408A7.176,7.176,0,0,0,143.884,72c.542,5.1,0,10.993,3.677,14.578,2.967,2.894,7.877,3.047,11.6,1.227s6.616-6.047,8.664-9.65"
                transform="translate(-345.409 -0.815)"
              />
              <path
                className="nn"
                d="M16.171,90.567c10.155.247,19.981-4.9,26.8-12.428S53.839,60.908,56.055,51s2.71-20.119,3.191-30.264c3.2,1.92,6.995,2.563,10.713,2.866,23.1,1.88,52.68-8.5,66.519-27.09,17.425-21.782,3.476,3.619,5.6-5.6,1.025,7.314-3.088-6.184,3.111-3,.282.127-4.067-.762-3.111,0,3.949,3.147,12.53,9.568,17.186,11.52,13.883,7.181,26.782,4.517,35.291,2.794,9.888-2,17.441-8.169,25.163-14.314a52.61,52.61,0,0,0-.1,15.251c2.784,13.471,12.246,25.884,25.519,30.264,13.178,4.348,28.057,1.508,40.106-4.816"
                transform="translate(-354.924 -1.007)"
              />
            </g>
          </g>
        </svg>
      </div>
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
        <div className="ill2">
          <div className="logo-wrap" style={{ zIndex: "5" }}>
            <img
              className="logo"
              src="https://gs-post-images.grdp.co/2019/10/logo-img1570905617416-54.png-rs-high-webp.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="info">
          <div className="text-center" style={{ zIndex: "4" }}>
            <img
              src="https://gs-post-images.grdp.co/2019/10/paytm-web-img1571004302793-79.png-rs-high-webp.png"
              onClick={handleClick}
              width="70%"
              className="paytm"
              alt="paytm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonPaid;
