import React, { useState, useEffect } from "react";

function validateEmail(email: string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const CheckEmailValidity = (email: string) => {
  const [isEmailValid, setEmailValid] = useState<boolean>(false);

  useEffect(() => {
    setEmailValid(validateEmail(email));
    console.log("CheckEmailValidity -> email", email);
  }, [email]);

  return isEmailValid;
};
