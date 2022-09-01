import person from "../images/person-circle.svg";
import trash from "../images/trash.svg";
import { Link } from "react-router-dom";
import edit from "../images/edit.svg";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="contactCard">
      <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
        <img src={person} alt="" className="person" />
        <div className="name-and-email">
          <div className="name-in-contact-card">{name}</div>
          <div>{email}</div>
        </div>
      </Link>

      <Link to={`/delete/${id}`} state={{ contact: props.contact }}>
        <img src={trash} alt="" className="trash" />
      </Link>

      <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
        <img src={edit} alt="" className="edit" />
      </Link>
    </div>
  );
}

export default ContactCard;
