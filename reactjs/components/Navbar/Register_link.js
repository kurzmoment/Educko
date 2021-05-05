import Link from "next/link";
import classes from "./Register_link.module.css";

function Register_link() {
  return (
    <div>
      <Link href="/reg_modal">
        <div className={classes.linktoreg}>Ještě u nás nemáte učet </div>
      </Link>
    </div>
  );
}

export default Register_link;
