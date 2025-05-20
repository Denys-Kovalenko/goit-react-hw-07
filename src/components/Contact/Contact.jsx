import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
}
