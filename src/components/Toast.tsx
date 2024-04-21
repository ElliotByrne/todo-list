import React, { useEffect, useState } from "react";
import "../App.css";

export const Toast = ({ error }: { error?: any }) => {
  useEffect(() => {}, [error]);

  return (
    <div className="toast">
      <a> Dismiss </a>
      {error && <p>{error}</p>}
    </div>
  );
};

export default { Toast };
