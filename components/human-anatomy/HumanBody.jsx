import React, { useEffect, useState } from "react";

const HumanBody = () => {
  const [activePathId, setActivePathId] = useState(null);

  const handlePathEnter = (pathId) => {
    setActivePathId(pathId);
  };

  const renderInfoBox = () => {
    if (!activePathId || !pathDetails[activePathId]) return null;
    return <div className="info-box">{pathDetails[activePathId].info}</div>;
  };

  // Function to calculate opacity based on scalar quantity
  const calculateOpacity = (scalar) => {
    const maxScalarValue = 100; // Adjust based on your data's range
    return scalar / maxScalarValue;
  };
  return (
    <>
      <div
        id="anawrapper"
        className="max-w-[1920px] bg-transparent min-w-[220px] select-none cursor-default mx-auto my-0 p-0"
      >
        <div id="basea">
          <svg
            onMouseLeave={() => setActivePathId(null)}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="1360px"
            viewBox="0 0 800 1360"
            xmlSpace="preserve"
            className="max-h-full w-full m-0"
          >
            <image
              overflow="visible"
              width={800}
              height={1360}
              xlinkHref="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/modela.png"
              className="float-left p-[3px]"
            />
            <path
              id="ana1"
              className="head"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M456.334,69C454.668,37,420,18,401,18c-30.833,0-50.167,31.5-53.167,44.5c-1.915,8.295-2.833,23.5-2.5,28.167s1,12.333,0.667,16.167c2.04,7.695,6.667,23,6.667,33c0.667,5.167,1.167,12.5,3.333,18.833c3,4,22.5,23.333,44.167,23.333s36.5-8.667,45.708-23c2.625-5.625,5-15.25,4.75-18.625c-0.708-5.125,4.708-28.042,5.709-32.708C457.001,100.334,458,101,456.334,69z"
            />
            <path
              id="ana2"
              className="right-eye"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M378.5,101.25c8.561,0,15.5-4.197,15.5-9.375s-6.939-9.375-15.5-9.375c-9.75,0-15.5,4.197-15.5,9.375S369.939,101.25,378.5,101.25z"
            />
            <path
              id="ana3"
              className="left-eye"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M426.5,101.25c8.561,0,15.5-4.197,15.5-9.375s-5.5-9.375-15.5-9.375c-8.561,0-15.5,4.197-15.5,9.375S417.939,101.25,426.5,101.25z"
            />
            <path
              id="ana4"
              className="right-ear"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M337.833,105c-4,4-1.833,17-0.833,20.667s5.833,14.667,7.167,15.833s5.167,4.833,8.5-1.667c0-10-4.627-25.305-6.667-33C345,105,341.833,101,337.833,105z"
            />
            <path
              id="ana5"
              className="left-ear"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M450.625,140.375c3.75,6.375,8.875,3.25,10-1.75s7.625-7.875,6.75-23.625s-8.041-11.667-11.041-7.333C455.333,112.333,449.917,135.25,450.625,140.375z"
            />
            <path
              id="ana6"
              className="nose"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M393.375,104.25c-0.375,3.125-5,6.375-5.625,13.125c-0.438,4.731,6.25,7.5,10.25,6.5c5,2.625,6.75,0.625,9.875-0.625c5.75,0.875,8-3.25,8-7.75s-4.375-6.75-4.875-12.25s-3.375-7.625-3.125-13.5s-2.375-9.875-6.086-9.875c-5.21,0-6.289,7.875-5.914,10.625S393.75,101.125,393.375,104.25z"
            />
            <path
              id="ana7"
              className="mouth"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M412.25,132.25c-2.256-2.723-6.231-1.652-7.875-0.75c-0.882,0.484-3.5,0.875-5.125-0.375s-6.125-0.125-7.375,1.625s-11.75,5.125-12.625,8.125s8.625,3.25,11,4.125s4.5,3.75,13.125,3.75s10.966-2.787,13.25-3.25s8.125-1.125,8.5-3.5S415.875,136.625,412.25,132.25z"
            />
            <path
              id="ana8"
              className="neck"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M345.667,243.167c15.667-0.833,41.167-2.166,45.333,3.667s15.834,6,19.667,0s38.028-6.245,50.833-4.333c4.95,0.739,9.833,0.81,14.438,0.363c10.976-1.066,20.373-5.078,25.342-10.017c-8.889,0.081-18.524-5.195-31.03-10.721C454.125,215,445.625,206.25,445,203.5s0.125-34.5,0.875-44.5c-9.208,14.333-24.041,23-45.708,23S359,162.667,356,158.667c2.167,6.333,1.5,29.833,0.75,45.333c-8.5,15.25-40,24-48,27.5c2.042,1.655,10.695,6.598,20.857,9.508C334.793,242.493,340.373,243.448,345.667,243.167z"
            />
            <path
              id="ana9"
              className="chest"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M524.5,294c-2.018-20.749-37.75-48.25-48.562-51.137c-4.605,0.447-9.488,0.376-14.438-0.363c-12.805-1.911-47-1.667-50.833,4.333s-15.5,5.833-19.667,0s-29.667-4.5-45.333-3.667c-5.294,0.281-10.873-0.674-16.059-2.159c-8.004,3.48-46.033,26.426-52.127,58.308c-0.459,2.402-0.744,4.852-0.814,7.351c-1,35.667,0.003,72.11-0.165,85.722c0.383-0.096,9.666,25.111,12.166,30.778S293.75,441,297.25,447.75C305.5,455.5,344,473,370.5,466s36.5-6.244,65,0.128s52.668-2.794,73.084-27.211c1.25-3.25,4.75-11.75,5.333-15s2.667-6.999,4.084-9.749s7.455-21.675,8.005-21.176C526.678,379.65,525.667,306.001,524.5,294z"
            />
            <path
              id="ana10"
              className="abdomen"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M435.5,466.128C407,459.756,397,459,370.5,466s-65-10.5-73.25-18.25c3.5,6.75,2,12,3.75,17.75s5,21.334,0.5,41.501s-1.667,35.666-0.5,40.166c0.785,3.029,2.326,5.001,1.419,8.813C314,567.5,332.834,590.5,402.917,590.5s86.417-20.498,98.75-33.499c-1.666-4.5-0.501-12,2.499-21.167s-3.499-44.667-3.833-52.833s2.501-21.5,2.751-27.584s4.25-13.25,5.5-16.5C488.168,463.334,464,472.5,435.5,466.128z"
            />
            <path
              id="ana11"
              className="pelvis"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M402.917,590.5c-70.083,0-88.917-23-100.498-34.52c-0.44,1.852-1.458,4.137-3.419,7.188c-2.708,4.214-5.009,15.491-6.673,27.332c10.34,9.027,56.21,47.939,84.084,82.636c8.255-3.802,35.957-5.104,49.606-0.453c28.214-33.03,74.964-71.046,85.649-79.515c-1-13.666-8.334-31.667-10-36.167C489.334,570.002,473,590.5,402.917,590.5z"
            />
            <path
              id="ana12"
              className="pubis"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M376.412,673.136c7.636,9.505,13.921,18.693,17.755,26.864c1-2.167,2.75-2.833,6.833-3.167s5.75,0.834,6.917,1.584c3.8-7.69,10.229-16.519,18.101-25.734C412.368,668.031,384.667,669.334,376.412,673.136z"
            />
            <path
              id="ana13"
              className="right-shoulder"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M277.48,299.316c6.094-31.882,44.123-54.828,52.127-58.308c-10.162-2.91-18.816-7.853-20.857-9.508c-8,3.5-15.5,2-26.75,4.25S240.5,249,228.5,273.5s-9.5,57-9.25,65.75c0.034,1.202,0.012,2.258-0.058,3.222C232.058,327.083,262.9,323.345,277.48,299.316z"
            />
            <path
              id="ana14"
              className="left-shoulder"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M524.5,294c13.5,30.001,46.022,30.211,58.595,48.439c-0.768-3.438-1.004-7.947-0.345-14.439c1.931-19.007-4.875-52.125-17.875-68.5s-53.125-26.75-63.595-26.654c-4.969,4.939-14.366,8.951-25.342,10.017C486.75,245.75,522.482,273.251,524.5,294z"
            />
            <path
              id="ana15"
              className="right-arm"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M276.667,306.667c0.07-2.499,0.354-4.949,0.814-7.351c-14.58,24.029-45.423,27.768-58.288,43.156c-0.437,6.049-2.914,8.093-7.442,14.778C206.5,365,196.5,396.5,193,408.5c-0.507,1.738-0.896,3.229-1.221,4.551c-1.413,17.735,10.718,25.876,24.421,31.618c11.394,4.774,24.501,8.306,33.45,1.543c0.711-1.544,1.634-3.368,2.85-5.712c3.5-6.75,23.363-47.953,24.001-48.111C276.669,378.777,275.667,342.334,276.667,306.667z"
            />
            <path
              id="ana16"
              className="left-arm"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M587.573,444.669c14.284-5.985,25.869-14.57,23.177-33.919c-1.625-11.25-17.875-51.25-22-57.25c-2.265-3.294-4.53-6.027-5.655-11.061C570.522,324.211,538,324.001,524.5,294c1.167,12.001,2.178,85.65,1.506,98.992c0.108,0.098,20.827,42.675,23.494,48.175C558.012,454.281,574.009,450.353,587.573,444.669z"
            />
            <path
              id="ana17"
              className="right-elbow"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M216.2,444.669c-13.704-5.742-25.834-13.883-24.421-31.618c-1.917,7.803-1.51,9.506-8.779,18.699c-5.907,7.47-15.794,29.063-22.538,48.927c15.882-28.244,68.495,4.695,75.547,19.871c6.154-16.332,11.13-43.69,11.49-47.172c0.245-2.366,0.814-4.26,2.15-7.163C240.702,452.975,227.594,449.443,216.2,444.669z"
            />
            <path
              id="ana18"
              className="elbow"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M644,484.25c-2.028-7.858-4.954-16.438-9.03-24.074c-4.97-9.31-16.414-30.066-17.72-32.176c-3.25-5.25-5.336-9.194-6.5-17.25c2.692,19.349-8.893,27.934-23.177,33.919c-13.564,5.684-29.562,9.612-38.073-3.502c2.667,5.5,7,11.333,7,17.333c0,1.363,1.692,13.781,4.385,25.354c2.187,9.396,5.372,18.235,6.115,20.146C565.5,491,629.5,447,644,484.25z"
            />
            <path
              id="ana19"
              className="right-forearm"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M160.462,480.677c-2.96,8.722-5.318,17.111-6.462,23.823c-2.028,11.896-8.779,39.212-16.707,62.487c-1.735,5.094-3.563,9.992-5.337,14.495c1.722,9.015,32.508,23.476,42.632,18.606c1.457-2.714,2.764-5.01,3.745-6.587c4.667-7.5,11.917-19.251,24.917-35.251s25.5-39.75,32-55.75c0.255-0.629,0.508-1.285,0.76-1.953C228.958,485.372,176.345,452.433,160.462,480.677z"
            />
            <path
              id="ana20"
              className="left-forearm"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M670.833,580.061c-2.89-7.644-5.897-16.096-8.083-21.561c-4-10-12.75-51-18.75-74.25C629.5,447,565.5,491,567,504c7,18,35.75,60.25,40.375,65.875s16.49,23.007,19.5,28.25C633.414,608.279,672.667,589.667,670.833,580.061z"
            />
            <path
              id="ana21"
              className="right-wrist"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M131.956,581.482c-5.112,12.975-9.774,22.651-10.456,24.143c-0.886,1.939-1.456,3.337-2.977,4.62c9.057,0.416,28.988,8.686,43.015,19.44c2.127-7.809,8.37-20.88,13.05-29.598C164.464,604.958,133.678,590.497,131.956,581.482z"
            />
            <path
              id="ana22"
              className="left-wrist"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M686.75,610.25c-8.5-4-5.75-8.25-9.5-15c-1.7-3.061-4.019-8.847-6.417-15.189c1.834,9.606-37.419,28.219-43.958,18.064c1.544,2.689,5.188,10.48,8.506,17.668c3.15,6.824,6.007,13.104,6.494,13.957C656.75,617.834,678.333,609.666,686.75,610.25z"
            />
            <path
              id="ana23"
              className="right-hand"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M160.833,633.167c0.096-0.975,0.344-2.156,0.705-3.481c-14.027-10.755-33.958-19.024-43.015-19.44c-1.911,1.612-5.326,3.042-12.773,5.13c-1.854,0.52-3.833,1.291-5.874,2.231c-12.688,5.84-27.892,18.435-31.876,21.019c-4.625,3-7.75,8.375-11.875,10.5s-4.125,8.625,0,10.5s9.625,0.125,13-1.5s9.042-8.457,15.5-10.5c3.788-1.198,7.625-1.5,7.625,0.125s-8.5,22.375-9.125,25.5s-3.875,13.875-5.875,21.125s-5.5,21.25-6.75,29.25s0.875,11.75,5.125,12.625s7.875-7.625,8.646-10.625s2.854-12.75,3.979-15.5s6.625-18.75,8-22s2.375-8.625,4.375-7.75s-0.375,5.875-1.75,9.75S91.75,714.875,91,718.75s-5,19.75-5.25,22.5s-1.875,8.75,2.75,10.5s7.75-1.875,9.5-5.625s5.375-17.625,7.375-26.125s5.75-19.5,7.125-24s2.125-8,3.875-7.875s1.5,2.5,0.75,4.75S111,713.5,110,718.5s-4.25,16.125-5.375,20.375s-1.75,9.25,2.5,10.75s6.875-1.5,8.75-4.75s7.875-21.5,9.369-27.125s4.756-18.5,6.131-22.375s2.5-5.625,3.625-5.5s0.25,2.625-1.125,7s-5.375,18.5-7.125,25s-2.25,9.625,0,12s7.083-0.541,8.25-2.541s3-11,5.667-16.333c1.676-3.352,3.669-11.246,6.53-19.381c1.691-4.808,4.336-9.699,5.636-13.786c0.352-1.106,0.67-2.172,0.973-3.219c2.707-9.367,3.628-16.586,6.027-25.281C162.5,643.667,160,641.667,160.833,633.167z"
            />
            <path
              id="ana24"
              className="left-hand"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M740.25,640.25c-2.75-3.75-17.5-11.5-21.75-14.5c-2.125-1.5-7.938-4.375-14.281-7.375S691,612.25,686.75,610.25c-8.417-0.584-30,7.584-44.875,19.5c1,1.75-0.875,7.125,0.125,16.25s4.125,23.25,6.375,32.125s7,18.375,8.5,22.875s9.403,29.364,12.625,32c2.75,2.25,7.5,0.75,8.25-2.75s-1.625-10.875-2.5-14.125s-5.625-19.25-6.5-21.75s-2-5.125-0.25-5.125s2.125,2.75,3.25,5.625s5.875,19.5,6.875,24.125s4.5,17,6.25,21.75s5,10,9,9.75s4.875-4.75,5.125-8.375s-5.875-23.5-6.375-27.625s-5.375-19.25-6.125-21.25s-1.375-5,0.625-5.125s2.875,5.625,3.75,8.625s9.75,31.875,10.25,35.5s2.625,14.5,6,17.75c2.744,2.643,5.625,3.875,8.625,0.875s2.25-10,0.875-15.25s-4.625-21.125-5.5-25s-6.375-20.875-7.25-24s-2.125-5.375-1.125-5.75s2.25,1.125,3.5,5.25s6.625,20.5,8.375,25.5s1.5,11.625,4.125,17.375s7,7.625,10.625,7.125s4.277-7.391,4.375-10.125s-4.75-20.5-6.25-27.375s-5.25-16.625-6.5-23s-7.375-23.375-8.625-26s-0.625-4.75,2.5-3.875s9.25,2.625,13,7.625s10.875,6.75,13.375,7s8.5,0.375,9.25-6.375S743,644,740.25,640.25z"
            />
            <path
              id="ana25"
              className="right-thigh"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M292.327,590.5c-2.021,14.389-3.102,29.611-2.827,34c0.5,8-6.5,46-11.5,70c-3.981,19.107-12.131,56.915-14.375,92.478c-0.575,9.105,0.172,18.063,0.375,26.522c0.845,35.062,9.541,55.489,16.139,69.427c35.654,13.2,53.799,56.767,88.484,34.358c2.478-11.204,8.03-39.965,9.627-52.285c1.75-13.5,10.083-66.333,11.815-88.167s1.269-38.833,0.435-43.166s-0.167-12.667-0.417-21.334s3.083-10.166,4.083-12.333c-3.834-8.171-10.12-17.359-17.755-26.864C348.538,638.439,302.667,599.527,292.327,590.5z"
            />
            <path
              id="ana26"
              className="left-thigh"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M426.018,672.683c-7.872,9.216-14.301,18.044-18.101,25.734c1.167,0.75,3.083,5.083,4.333,8.083s1,20.75-0.25,31.5s1.5,59.75,3.75,71s8.417,55.334,10.084,67.001s5.166,31.5,7.166,39.833c36.334,25.833,52.479-20.023,89.334-33.168c5.667-10,13.999-27.333,15.999-52.333c0.874-10.926,1.603-27.168,0.824-43.078c-1.002-20.493-3.844-40.436-5.157-47.754c-2.333-13-14.834-82.834-17-92.667s-4.333-40-5.333-53.666C500.981,601.637,454.231,639.652,426.018,672.683z"
            />
            <path
              id="ana27"
              className="right-knee"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M280.139,882.927c1.212,2.56,2.353,4.901,3.361,7.073c6.5,14,6,37.5,6.5,61c0.078,3.657,0.262,7.679,0.348,11.921c10.591,44.449,51.024,21.223,68.904,3.938c0.325-1.35,0.929-2.658,1.373-3.483c0.875-1.625,2.125-10.625,3.375-16.625s2-18.5,4-26.75c0.175-0.721,0.386-1.643,0.623-2.715C333.938,939.693,315.793,896.127,280.139,882.927z"
            />
            <path
              id="ana28"
              className="left-knee"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M433,915.834c2,8.333,4.333,14.167,4.333,24s4,22.167,5.167,25c17.417,18.167,61,46.833,69.25-8.834c0-11.5,3.25-39.334,3.584-50.334s1.333-13,7-23C485.479,895.811,469.334,941.667,433,915.834z"
            />
            <path
              id="ana29"
              className="right-leg"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M290.348,962.921c0.085,4.202,0.072,8.622-0.239,13.122c-1.393,20.15-4.799,41.913-4.109,52.957c1,16,4.5,62,7.5,83s6.875,83,7.125,87.5c0.06,1.082,0.008,2.26-0.107,3.478c6.992-11.484,36.463-9.869,44.754-6.101c-1.079-3.858-2.297-10.522-2.438-15.043c-0.167-5.333,7.5-47.167,8.333-58.333s3.667-29.5,4.333-33.333s5.75-17.168,9.5-25.918s3.5-20,2.5-27.25s-3.75-45.75-4.5-51.375s-2.25-13.125-3.5-15.125c-0.615-0.984-0.563-2.333-0.248-3.642C341.372,984.144,300.939,1007.37,290.348,962.921z"
            />
            <path
              id="ana30"
              className="left-leg"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M442.5,964.834c1.167,2.833-1.25,16.416-4.25,33.916s-4.083,48.751-3.083,56.751s9.667,28.833,11.833,35s0.667,8.833,2,20.833s7.167,47.334,9,59s1.5,21-0.667,27.167C464,1193,500,1190.5,503.5,1206c-0.75-4.25-1.75-10-1-22.25s5-60.25,8.25-87.75s6.75-82,4.5-96.5s-3.5-32-3.5-43.5C503.5,1011.667,459.917,983.001,442.5,964.834z"
            />
            <path
              id="ana31"
              className="right-ankle"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M300.518,1202.978c-0.363,3.847-1.388,8.108-1.768,11.147c-0.5,4,2.125,8.625,1.375,15.875c-0.034,0.332-0.091,0.67-0.146,1.008c12.665-4.423,40.242,8.668,48.998,21.075c1.177-7.814,1.063-15.23-0.478-19.082c-1.667-4.166-2.167-7.167-0.833-12.5s-0.667-18.667-1.833-21.834c-0.178-0.482-0.368-1.097-0.562-1.79C336.981,1193.108,307.51,1191.493,300.518,1202.978z"
            />
            <path
              id="ana32"
              className="left-ankle"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M457.333,1197.501c-2.167,6.167-3.166,21-2.666,22.667s0.833,9.333-1,13.499s-1.667,13.334-0.667,21.5c6-13.583,37-29.917,50-23.667c-2-5.5-2.25-5.75-1-9.25s2.25-12,1.5-16.25C500,1190.5,464,1193,457.333,1197.501z"
            />
            <path
              id="ana33"
              className="right-foot"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M299.979,1231.008c-1.15,7.047-6.68,15.393-10.854,23.742c-4.375,8.75-13,19.375-21,28.25c-2.286,2.536-4.111,5.777-5.548,9.185c-3.593,8.519-4.755,18.083-4.577,20.315c0.25,3.125,3.125,5.875,6.125,5.5c0,1.125,1,2.875,4.25,2.5c0.25,2,0,6.25,8.25,5c4,4.875,7.875,4.625,10.75,1.75c5.292,6.314,10.383,6.492,15.75,5.809c4.375-0.558,11.125-7.809,12.25-10.559s2.25-3.875,5.875-6.75c1.972-1.563,3.795-4.086,5.156-8.824c0.683-2.376,1.247-5.519,1.657-8.232c0.275-1.824,0.481-3.456,0.604-4.525c0.667-5.833,0.667-10.834,4.5-21.334c8.667-3.667,14-10.333,15.5-18.833c0.113-0.642,0.215-1.28,0.311-1.918C340.221,1239.676,312.645,1226.585,299.979,1231.008z"
            />
            <path
              id="ana34"
              className="left-foot"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M541.166,1292.167c-1.167-4.167-9.666-14.833-16.333-21.833s-7.833-11.333-12.5-18.667S505,1237,503,1231.5c-13-6.25-44,10.084-50,23.667c1,8.166,12,15,15,16.5s3,4.167,3.833,7s2.834,10.667,3.834,21s6.25,15.749,8.666,17.666s2.834,3,3.667,4.667s3.417,6.083,11.167,9.75s14.999-1.167,16.749-4.75c4.5,4.5,11.084,0.416,12.25-2.084c4.916,1.416,7.834-3.25,7.917-5.166c1.583,0.334,3.584-1.082,4.25-2.582c0.833,0.334,2.5,0.666,5-3.334S542.333,1296.334,541.166,1292.167z"
            />
            <rect
              className="gob"
              x="573.5"
              y="1036.5"
              fill="#72B8FC"
              stroke="#6a6a6a"
              vectorEffect="non-scaling-stroke"
              width={204}
              height={292}
            />
            <g id="anaspotsa" />
          </svg>
        </div>

        <div id="baseb">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="1360px"
            viewBox="0 0 800 1360"
            xmlSpace="preserve"
          >
            <image
              overflow="visible"
              width={800}
              height={1360}
              xlinkHref="https://raw.githubusercontent.com/ksachikonye/preface-hezvo/main/modela.png"
            />
            <path
              id="ana35"
              className="brain"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M400.583,57.882c3.502,0-0.583-35.132,2.417-36.132s11,3.75,15,3.75s12.5,6.75,15,7.5s15.5,17.371,15.5,23.5c0,3.612,3.419,6.083,2.085,11s2.166,4.084,1.083,7.917s0.999,8-0.417,10.833s-4.278,3.171-3.5,5.583c2.583,8-6.417,8.583-4.667,11.333c0.825,1.296-0.75,5-0.083,6.167s0,5.583-11.25,7.583s-20.082,0.583-21.166,2.583s-3.917,6.167-9.334,6.167c-5.417,0-9.417-4.167-10.417-5.25s-9.417-1.833-12.667-2s-8.334-2.25-12.417-2.417s-9.833-4.833-8.417-7.5s-1.521-3.417-0.219-5.167s0.219-1.917-1.781-4.083s-3.667-5.583-2.667-7.583s-4.333-4.333-3-8.583s-1.75-7.167,0.417-10.5s-1.5-5.083,0.667-12.167s2.25-8.583,4.917-13.333s13.416-14.833,17.333-16.667s5.417-4.25,9.667-4.75s10.31-3.982,13.417-4.055c3-0.07,2.77,1.581,2.861,3.713C399.418,36.417,398.168,57.882,400.583,57.882z"
            />
            <path
              id="ana36"
              className="larynx"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M401,195c3.834,0.167,6.638-5.791,7.834-12c-1.5-1.833-1.5-1.333-0.5-3.5s5-5.833,0-6s-2.335,3.557-7.751,3.667c-4.084,0.083-2.333-2.833-6.333-2.5c-2.327,0.194-4.667-1.667-4.417,1.417s2.167,5.25,1.833,7.667C393.167,190.833,397.166,194.833,401,195z"
            />
            <path
              id="ana37"
              className="thyroid"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M400.25,197.5c2.083,0,3.961,2.833,5.439,4c11.855-8.667,4.645-16.667,3.145-18.5c-1.196,6.209-4,12.167-7.834,12s-7.833-4.167-9.333-11.25c-8.417,14.333,2.583,16.333,3.583,17.167C397.5,198.667,398.167,197.5,400.25,197.5z"
            />
            <path
              id="ana38"
              className="trachea"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M410.669,288.191c-0.226-3.2-0.657-6.723-1.419-10.608c-1.667-1-4.166-2.75-2.77-5.083s-2.563-3.917-0.813-6.083s-1.344-3.841,0.083-5.667c2.084-2.667-0.833-3.75,0.73-6.5s-1.98-3-0.563-6c1.688-3.574-2.25-1.583-0.25-4.417s-1.583-3.333-0.083-6.25s-1.75-3.167-0.167-5.167s-1.5-2.5,0.333-4.5s-1.583-2.333-0.166-4.083s-1.417-1.167,0.166-3.583s-1.75-1.25,0.167-4s-1.25-1.75,0.083-5.083s-1.695-2.961-0.166-5.083c2.583-3.583-0.334,0.917-0.145-4.583c-1.478-1.167-3.355-4-5.439-4s-2.75,1.167-5,3.417c1,0.833-1.583,3.583-0.25,4.917s-1.333,3.417,0.167,5.333s-2.083,1.833-0.5,4.667s-2,1.5,0.083,4.167s-1.75,2.417-0.417,4s-1,2.5,0.25,4.5s-0.417,3,0.667,4.333s-1.75,3.667-0.167,5.417s-1.5,3.167,0.333,5.25s-1.75,3-0.083,5s-1.917,3.25,0.25,6.083s-1.5,3.667,0.917,6.917c1.452,1.953-1.083,3.75,0.25,5.75s-0.917,5.25-0.417,6.25s2.25,2.833-1.75,5.083c0.024,2.448,0.188,6.577,0.361,11.233C397.833,286.167,407.671,286.216,410.669,288.191z"
            />
            <path
              id="ana39"
              className="lungs"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M394.583,316.5c-1.75,2.333,0.713,2.333,0.398,5s-1.916,11.167-1.032,14.667s-0.616,16.667-2.616,19s-6.083,8.24-6.167,11.833c-0.073,3.127-1.383,5.715-3.593,7.822c-2.854,2.723-7.21,4.644-12.339,5.892c-12.216,2.973-30.484,4.036-60.067,7.452c-9,0-18,3-18.833-6c-0.695-7.514,0-21-1-26.5S293,328,293.333,320s3.833-22.667,11.5-37.167s19.5-26,24.333-30.167s7.833-11,16.167-17.5s13.167-5.667,17-6.667s14,0.667,15.333,4.167s11.5,7.333,12.5,17.167S393.5,263,393.5,267.167s1,9,1.083,11.417c0.024,2.448,0.188,6.577,0.361,11.233C395.355,300.854,395.814,314.859,394.583,316.5z M510.25,334.375c0.25-6.875-2-17.875-2.25-24.25s-4.375-19.625-14.125-33.5s-24.25-28.375-26.25-32.25s-11.459-11.375-15.75-13.25s-17.25-5.375-23-1.5s1.75,4.75-8.375,9.125s-10.916,33.75-11.25,38.833c0.762,3.885,1.193,7.408,1.419,10.608c1.231,17.464-3.665,25.324,5.498,29.975c11.166,5.667,27.114,10.278,27.833,18c1.334,14.333-13.333,19-15.333,26.333c-1.075,3.942-5,12.833,16.333,17.667c1.312,0.297,2.567,0.727,3.789,1.245c8.385,3.559,15.027,11.853,24.731,18.522c3.393,2.331,7.165,4.457,11.514,6.115c4.088,1.559,8.681,2.706,13.966,3.202c3.5-0.75,7.25,1.375,8.875-1.5s0.25-24.125,2.395-37.25S510,341.25,510.25,334.375z"
            />
            <path
              id="ana40"
              className="stomach"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M485.034,406.048c-0.284-6.124-2.81-10.875-6.736-14.499c-7.038-6.494-18.526-9.383-29.509-10.138c-3.841-0.264-7.621-0.273-11.122-0.078c-20.792,1.159-22.834-33.667-23.5-40.167c-3,0.167-8.334,0-11.5,0c0.394,5.019,2.854,21.371,7.403,35.706c0.389,1.224,0.809,2.433,1.249,3.62c3.136,8.448,7.338,15.729,9.014,18.841c4.667,8.667,11,13.333,1,16s-14.999,13.333-29,11c-12.298-2.05-51.6-1.521-49.674,33.435c0.267,4.836,1.315,10.326,3.341,16.565c3.75-2.833,5-2.833,8.5-3.083c-0.825-2.889-2.564-14.301,3.797-20.451c1.792-1.732,4.507-2.917,7.451-3.649c4.156,0.296,4.541,1.392,7.418,2.017c2.522,0.548,10.551,6.796,17.004,9.885c3.711,5.943,8.557,11.751,23.662,13.199c20.572,1.972,49.334-19.75,54.792-26.113c1.625-1.488,2.5-3.262,4.875-6.262c1.838-2.493,4.606-3.408,7.643-13.657c1.148-3.875,2.335-9.084,3.524-16.218C485.021,409.88,485.12,407.907,485.034,406.048z"
            />
            <path
              id="ana41"
              className="heart"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M447,331.833c-2.834-1.833,2.666-3,0.167-8.667c-1.619-3.672,5.499-2.5,3.421-6.167s-3.401,0.163-5.089-0.16c-2.251-0.43-4.713-2.811-3.731-3.788c3.398-3.386-1.846-6.111-2.934-5.386c-1.001,0.667-2.135,3.144-9.5-3.833c-6.334-6-23.102-4.113-21.5-5.333c2.65-2.02,4.042-1.183,6.149-2.672c2.35-1.661,2.984-16.759-0.65-17.244c-7.5-1-12.333,0-19.667,1.25c-2.962,0.505-0.167-3.667-1.167-6.5s-10.333-11.167-10.833-8.667s-1,3.667-1.833,2.333s-7.167,0-10.5,0s-7.667,40.333-8.5,43s-24,6-28,5.5s-1,3.333,1.167,5.667s14.667-0.5,18.273-1s5.56-1.333,3.894,2.833s-11.333,0.667-13.002,5.167s10.002,0.667,10.168,4.333s-10.333,0.333-10.167,4.833s5.5,3.167,9.833,2.833c-1.5,5.5,5.167,10.333,11.167,19s19.167,0.167,21.453,5.534s16.88,11.965,26.047,15.799c6.875,2.875,21.015,8.098,31.628,7.785c3.538-0.104,6.685-0.824,9.039-2.451C478.482,367.77,449.834,333.667,447,331.833z M380.833,305.167c-5-1.667,2.833-22.706,2.833-20.167C383.667,291,385.833,306.833,380.833,305.167z"
            />
            <path
              id="ana42"
              className="spleen"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M499,409.25c-2.912-8.063-11.902-24.176-20.702-17.7c-1.021,0.752-2.041,1.791-3.048,3.2c-1.083,1.517-1.6,3.276-1.729,5.184c-0.619,9.1,7.76,21.66,7.622,28.285c-3.036,10.249-5.805,11.164-7.643,13.657c1.25,2.625,2.853,4.885,7,5.25c8.596,0.757,13.25-8.5,15.5-14.125S501.375,414.625,499,409.25z"
            />
            <path
              id="ana43"
              className="liver"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M443.295,388.285c-5.205-3.465-21.295-7.785-31.628-7.785c-0.115,0-0.232-0.007-0.348-0.008c-10.229-0.085-20.943-3.904-29.746-5.67C342.584,367,320,374.333,309.167,388.167c-4,7.167-9.667,18.333-7.833,29.5s9.667,22.958,12.792,31.708s8.375,18.125,9.875,20s11.25-3.125,15.875-6.625c0.934-1.085,1.86-2.069,2.784-2.981c5.687-5.616,11.25-8.194,17.47-10.603c8.597-3.328,18.449-6.346,31.621-16.666c38.75-0.75,54.5-17.5,58.5-25.75S448.5,391.75,443.295,388.285z"
            />
            <path
              id="ana44"
              className="large-intestine"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M499,523.25c0.875-5.625-6-7.875-6-13.25c0-6.333-6.275-6.876-6.375-11.875c-0.125-6.292-5.25-7.75-4.5-11.625s-5.375-10.5-4.25-16.125s-4.5-14-4.5-16.25s-1.375-4.625-4.75-5.988c-3.521-2.512-7.292-1.803-11.458-4.137s-26.501,9-28.667,13.333s-6.438,3.719-8.167,5.417c-4.666,4.583-9.583,1.888-12,2.632c-6.333,1.951-6.166-3.049-12.167-2.632c-1.581,0.11-3.688-0.594-5.996-1.699c-6.453-3.088-14.482-9.336-17.004-9.885c-2.877-0.625-3.262-1.721-7.418-2.017c-1.381-0.098-3.177-0.108-5.619,0.017c-6.22,2.408-11.783,4.987-17.47,10.603c-0.924,0.912-1.851,1.896-2.784,2.981c-4.125,4.75-6.375,10.5-7.5,13.375s-11.25,15.125-12,18.125s-4.542,4.083-5.125,9c-0.4,3.372-5.875,10.625-5.875,13.625s-2.875,7.625-2.5,10.375s-4.542,6.583-2.125,12.875c1.184,3.083,0.75,4.25-1.375,11.375s6.75,12.375,5.625,15s0.625,8.875,2.25,11.375s4.5,3.25,4,9.625s10.75,19.75,15.75,25c10.667,18.167,15,10.167,26.333,4.125s2-12.958,1.917-20.625s-3.917-5.333-7.5-9.333s-10.75-15.333-13.417-16.792s-8.667-6.542-10-11.598s0.333-7.277-2.667-11.737s5.667-4.541,4.313-10.494c-0.857-3.767,0.738-5.28,1.587-7.683c0.012-0.033,0.021-0.069,0.033-0.103c0.469-1.375,0.689-3.045,0.067-5.594c-3.333-13.667,10.333-9,9-19.667s11.083-6.667,11.083-19.667c4.361,0.118,9.527-5.348,12.871-8.901c0.963-1.022,1.783-1.896,2.379-2.42c1.432-1.26,3.923,2.578,7.985,6.66c3.503,3.52,8.174,7.222,14.348,7.994c4.495,0.562,8.396-3.54,13.337,0.436c4.94,3.976,15.972-1.331,20.329-0.436c6.573,1.35,10.66-5.008,16.638-4.452s11.487-3.437,15.737-7.548c0.625,4.667-1.041,13,3.958,14.183s-1.569,10.072,4,12.817c10.146,5-3.666,13.333,5.334,20.333c12.7,9.878,2.667,14.046,3,22.417c0.475,11.926-10,7.25-11.667,14.583c-0.9,3.962-3.283,4.521-5.653,6.147c-1.01,0.693-2.017,1.585-2.905,3.015c-0.886,1.423-1.655,3.375-2.191,6.213c-1.409,7.457-7.916,0-8.583,9.938c-0.788,11.737-14.279,6.57-15.334,13.688c-1.333,9-9.666,8.667-8.777,18.625s-4.403,3.19-8.181,8.625S399.333,631,399,634c-5.25,3-3.75,6-7.5,10.875s-3,20.125-0.875,27.625s-1.5,11.875,1.25,16.125s4.125,2.625,10.375,5.125s7.375-0.375,9.375-1.875s0.25-3,2.125-6.75s0.125-18.25,0.375-21.625s2-12.25,5.875-12.25s5.875-4.625,8.125-4.875s4.375-1.875,6.75-3.375c6.459-7.333,2.816-12.187,7.125-14.75c7.25-4.313-0.666-9.625,8.25-13.917c6.011-2.894-3.583-6.333,7.125-12c7.685-4.066,3.625-8.667,8.75-10.708C478,586.25,472,581,478.375,578.125S486.75,564.75,490,561.25s4.125-9.375,6.375-12.625s1.292-10.458,3.875-14.125C502.736,530.97,498.125,528.875,499,523.25z"
            />
            <path
              id="ana45"
              className="small-intestine"
              fill="transparent"
              stroke="#8c8c8c"
              vectorEffect="non-scaling-stroke"
              d="M476.167,541.167C478.834,533.5,480,522.5,467,519c5.167-4,4.501-10.333-0.166-21.167c3.166-9.667-1.668-19-4.834-21.5s-13.166-10.5-25.333,4.833c-5.5,0.5-3.5,1.666-12.667,3s-12.501,2.334-16.667,0.667s-13.833-2.5-23-1.167c-3.188-1.503-6.183-3.31-9.348-4.994c-3.158-1.681-6.497-3.229-10.364-4.24c-2.998-0.784-6.307-1.252-10.121-1.183c-3.5,0.25-4.75,0.25-8.5,3.083c-2.75,4.667-4.25,8.667-9,14.417s-21.25,22-21.25,28.25c0,6.158,6.801,9.638,15.849,9.261c0.135-0.006,0.265-0.004,0.401-0.011c-0.144,0.036-0.289,0.076-0.434,0.114C322.69,530.695,313.262,536.62,314,544c0.75,7.5,7,9.833,9.667,10.333c-6.167,2.667-7.833,9.5-2.5,15.833s19.833,12.141,19.833,17c0,12.667-16.686,13.946-10,25.333c1.125,4.5,0.25,8.5,6.625,17.75s21.875,11,25.625,9.375c0.25,2.25,0.125,8.125,6.625,8.625s14.625-6.125,15.875-10.125C388.25,636.5,395.875,634,399,634c17,2.333,11,13,35.875,9c19-1.375,19.25-7.125,20.999-12.875s2.501-10-0.999-13.625c0.375-1.375-0.125-2,0.999-6.5c4.874-5.375,10.876-11.75,10.251-18.375c3.146-1.253-0.291-7.458-5.958-8.458c6.5-1.667,11.334-6.667,14-15S481.5,553.833,476.167,541.167z M354.5,587.875c-1.625-1.5-2-5.625-2.75-7.125c3.75,1.5,7.25,4,8.5,4.625C357.5,586.625,356.5,586.25,354.5,587.875z M369.636,574.375c-2.761,0-7.761-5.375-10.386-6.875c3.25-3,4.25-1.5,6.625,0S371.022,570.75,369.636,574.375z M374.5,546.5c-1.625,0.5-2.125-3.745-3.5-5.248s-6.716-3.614-6.5-4.252c0.603-1.78,4.125-0.875,6.375,1.125S375.625,542.375,374.5,546.5z M408.375,616.625c3,3.75,3.875,3.125,5.625,3.5C412.75,622.5,408.875,624.25,408.375,616.625z M387.5,625.25c-0.375-2.75,1-6.75,0.75-8.625c2.5,2.25,4,4.125,5.25,4.75C391.125,623,389.5,624.5,387.5,625.25z M453.125,569.875c-0.504-0.504-1.085-1.109-1.684-1.713c-0.737-0.743-1.502-1.485-2.191-2.037c1.509-0.447,3.25-0.696,5.097-0.978c2.284-0.349,4.734-0.749,7.153-1.647C460.75,565.5,456.5,568.5,453.125,569.875z"
            />
            <rect
              className="goa"
              x="573.5"
              y="1036.5"
              fill="#72B8FC"
              stroke="#6a6a6a"
              vectorEffect="non-scaling-stroke"
              width={204}
              height={292}
            />
            <g id="anaspotsb" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default HumanBody;
