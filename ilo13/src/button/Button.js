import React, { useState, useEffect } from "react";

const Button = (props) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    document.title = `dacherilia ${click}`;
  });

  return (
    <button onClick={() => setClick(click + 1)}>
      {props.text} {click}
    </button>
  );
};

//default-ად მაშინ გამოისახება როცა მთავარში ღილაკი არ გვაქვს განსაზრული
Button.defaultProps = {
  text: "ღილაკი",
};

export default Button;
