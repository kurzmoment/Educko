import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./Register_form.module.css";

function RegisterForm(props) {
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredUname = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const UData = {
      name: enteredUname,
      password: enteredPassword,
      email: enteredEmail,
    };

    props.onAddMeetup(UData);
  }

  return (
    
      <form  onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="uname">Uživatelské jméno</label>
          <input type="text" required id="uname" ref={usernameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Heslo</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Vytvořit účet</button>
        </div>
      </form>
    
  );
}

export default RegisterForm;
