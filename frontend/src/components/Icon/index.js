import React from "react";
import AntIcon from "@ant-design/icons";

const Icon = ({ component, ...rest }) => {
  return <AntIcon component={component} {...rest} />;
};

Icon.propTypes = {};

export default Icon;

export const IconCustom = {
  EyeOpen: () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <g
        id="02.-Icons🎈"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icons"
          transform="translate(-216.000000, -216.000000)"
          fill="currentColor"
        >
          <g
            id="Icons-/-Basic-/-Line-/-Eye-/-Open"
            transform="translate(216.000000, 216.000000)"
          >
            <path
              d="M12,5 C17,5 21.27,8.11 23,12.5 C21.27,16.89 17,20 12,20 C7,20 2.73,16.89 1,12.5 C2.73,8.11 7,5 12,5 Z M12,7 C8.22274649,7 4.8479073,9.15746073 3.207812,12.453019 L3.185,12.5 L3.207812,12.546981 C4.80585357,15.7580378 8.05081834,17.8886127 11.7102582,17.9957618 L12,18 C15.6723298,18 18.9642911,15.9607335 20.6515263,12.8189545 L20.814,12.5 L20.792188,12.453019 C19.1941464,9.24196222 15.9491817,7.11138727 12.2897418,7.00423816 L12,7 Z M12,8.5 C14.2133333,8.5 16,10.2866667 16,12.5 C16,14.7133333 14.2133333,16.5 12,16.5 C9.78666667,16.5 8,14.7133333 8,12.5 C8,10.2866667 9.78666667,8.5 12,8.5 Z M12,10.5 C10.8912362,10.5 10,11.3912362 10,12.5 C10,13.6087638 10.8912362,14.5 12,14.5 C13.1087638,14.5 14,13.6087638 14,12.5 C14,11.3912362 13.1087638,10.5 12,10.5 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  MoreHorizontal: () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <g
        id="02.-Icons🎈"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icons"
          transform="translate(-24.000000, -408.000000)"
          fill="currentColor"
        >
          <g
            id="Icons-/-Basic-/-Line-/-More-/-Horizontal"
            transform="translate(24.000000, 408.000000)"
          >
            <path
              d="M6,10 C4.9,10 4,10.9 4,12 C4,13.1 4.9,14 6,14 C7.1,14 8,13.1 8,12 C8,10.9 7.1,10 6,10 L6,10 Z M18,10 C16.9,10 16,10.9 16,12 C16,13.1 16.9,14 18,14 C19.1,14 20,13.1 20,12 C20,10.9 19.1,10 18,10 L18,10 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 L12,10 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  Edit: () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <g
        id="02.-Icons🎈"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icons"
          transform="translate(-72.000000, -216.000000)"
          fill="currentColor"
        >
          <g
            id="Icons-/-Basic-/-Line-/-Edit"
            transform="translate(72.000000, 216.000000)"
          >
            <path
              d="M14.06,6.1925 L17.81,9.9425 L6.75,21.0025 L3,21.0025 L3,17.2525 L14.06,6.1925 Z M14.06,9.0215 L5,18.0815 L5,19.0025 L5.921,19.0025 L14.981,9.9425 L14.06,9.0215 Z M16.96,3.2925 C17.35,2.9025 17.98,2.9025 18.37,3.2925 L18.37,3.2925 L20.71,5.6325 C21.1,6.0225 21.1,6.6525 20.71,7.0425 L20.71,7.0425 L18.88,8.8725 L15.13,5.1225 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  Trash: () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24">
      <g
        id="02.-Icons🎈"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icons"
          transform="translate(-168.000000, -168.000000)"
          fill="currentColor"
        >
          <g
            id="Icons-/-Basic-/-Line-/-Delete"
            transform="translate(168.000000, 168.000000)"
          >
            <path
              d="M18,7 L18,19 C18,20.1045695 17.1045695,21 16,21 L8,21 C6.8954305,21 6,20.1045695 6,19 L6,7 L18,7 Z M16,9 L8,9 L8,19 L16,19 L16,9 Z M14.5,3 L15.5,4 L19,4 L19,6 L5,6 L5,4 L8.5,4 L9.5,3 L14.5,3 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  ),
  abc: () => (
    <svg version="1.1" width="16" height="16" viewBox="0 0 1024 1024">
    <title>check</title>
    <g id="icomoon-ignore">
    </g>
    <path fill="#3bb54a" d="M512.001 0.002c282.768 0 511.999 229.23 511.999 511.999s-229.23 511.999-511.999 511.999-511.999-229.23-511.999-511.999v0c-0.805-281.966 227.12-511.194 509.084-511.999 0.972-0.003 1.943-0.003 2.915 0z"></path>
    <path fill="#d4e1f4" d="M795.636 370.909l-363.635 363.635-203.636-202.18 82.91-81.454 120.726 119.273 280.728-280.728z"></path>
    </svg>
    
  ),
};
