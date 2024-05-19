// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
export const LinkButton = ({linkBtn,linkText,linkType,isDisabled}) => {
    return (
        <Link to={linkBtn}>
  <button type={linkType} disabled={isDisabled} id={isDisabled}>
              {linkText}
            </button>
        </Link>
    );
};