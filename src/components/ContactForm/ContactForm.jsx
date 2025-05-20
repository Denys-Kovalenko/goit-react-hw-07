import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();

    if (
      contacts.some(
        (contact) =>
          typeof contact.name === "string" &&
          contact.name.toLowerCase() === normalizedName
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={css.input}
        />
      </label>

      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className={css.input}
        />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
