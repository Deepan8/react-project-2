export default function ContactList({contacts}) {
    return (
      <div>
        {contacts.map((contact) => (
          <div className="card" key={contact.phonenumber}>
            <p >{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phonenumber}</p>
            <p>{contact.age}</p>
            <p>{contact.message}</p>
          </div>
        ))}
      </div>
    );
  }