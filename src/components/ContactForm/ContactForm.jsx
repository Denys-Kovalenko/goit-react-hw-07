import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { selectContacts } from "../../selectors/contactsSelectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedName = name.toLowerCase().trim();
    const nameExists = contacts.some(
      (contact) =>
        typeof contact.name === "string" &&
        contact.name.toLowerCase() === normalizedName
    );

    if (nameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone number"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
