import React, { forwardRef, useState } from "react";
import classNames from "classnames";
import "../App.css";

export const Modal = forwardRef(({ children, open = false }: any, ref) => {
  const classes = classNames({
    modal: true,
    "modal--open": open,
  });

  return (
    <div className={classes}>
      <div className="modal-inner">{children}</div>
    </div>
  );
});
