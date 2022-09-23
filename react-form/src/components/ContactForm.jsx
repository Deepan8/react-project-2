import { useState } from "react";
 import form1 from "./formscript";
export default function UserForm({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    age:"",
    message:"",
  });
  const [errcontactInfo, seterrContactInfo] = useState(false)


  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    seterrContactInfo(form1(contactInfo));
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "",age:"" ,message:""});
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
        
            type="text"
           
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
          />
            <br></br>
          <span>{errcontactInfo.name}</span>
         
        </div>
        <div>
          <input
            type="email"
         
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}
          
          /> 
           <br></br>
             <span>{errcontactInfo.email}</span> 
        </div>
        <div>
          <input
            type="number"
           
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
            onChange={handleChange}
          />
            <br></br>
           <span >{errcontactInfo.phonenumber}</span>
        </div>
        <div>
          <input
            type="number"
           
            name="age"
            placeholder="age"
            value={contactInfo.age}
            onChange={handleChange}
          />
            <br></br>
           <span >{errcontactInfo.age}</span>
        </div>

        <div>
          <input
        
            type="text"
           
            name="message"
            placeholder="message"
            value={contactInfo.message}
            onChange={handleChange}
          />
            <br></br>
          <span>{errcontactInfo.message}</span>
         
        </div>
        <div>
          <button>Submit Contact</button>
        </div>
        <div>
          {/* <input type="reset" value="clear"/> */}
        </div>
      </form>
    </div>
  );
}

