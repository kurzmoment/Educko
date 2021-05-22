import Card from "../ui/Card";
import { useRef, useState } from "react";
import classes from "./lecture-form.module.css";

function LectureForm(props) {
  const datumInputRef = useRef();
  const hodinaInputRef = useRef();
  const popisInputRef = useRef();
  const [selected, setSelected] = useState();
  const addSubject = (predmet) => {
    setSelected(predmet);
  };

  function submitHandler(event) {
    event.preventDefault();
    const enteredHodina = hodinaInputRef.current.value;
    const enteredPredmet = selected;
    const enteredDatum = datumInputRef.current.value;
    const eneterPopis = popisInputRef.current.value;
    console.log(enteredHodina, enteredPredmet, enteredDatum, eneterPopis);
    const RData = {
      predmet: enteredPredmet,
      datum: enteredDatum,
      popis: eneterPopis,
      hodina: enteredHodina,
    };
    props.onAddReserve(RData);
  }

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="hodina">Nazev hodiny</label>
          <input type="text" required id="hodina" ref={hodinaInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="datum">Datum</label>
          <input type="text" required id="datum" ref={datumInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="popis">Popis</label>
          <textarea required id="popis" rows="4" ref={popisInputRef} />
        </div>

        <div>
          {props.predmet.map((sub, i) => (
            <div key={sub._id}>
              <input
                name="predmet"
                type="radio"
                id={sub._id}
                value={sub.predmet}
                onChange={() => addSubject(sub.predmet)}
              />
              <label htmlFor={sub._id}>{sub.predmet}</label>
            </div>
          ))}
        </div>

        <div className={classes.actions}>
          <button>Vytvorit hodinu</button>
        </div>
      </form>
    </Card>
  );
}

export default LectureForm;
