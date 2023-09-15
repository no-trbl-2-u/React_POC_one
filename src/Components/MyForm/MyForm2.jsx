import { useState } from "react";
import './MyForm.css';

function MyForm() {
  // State
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  // Handlers
  const handleFormChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  }

  const submitHandler = e => {
    e.preventDefault();

    // Alert User
    alert(`The Submitted name is ${formData.firstName} ${formData.lastName}`);

    // Reset Form
    setFormData({ firstName: '', lastName: '' });
  }

  return (
    <>
      {/* Form Container */}
      <form className="my-form" onSubmit={submitHandler}>
        <input type="text" id="first-name" name="firstName" placeholder="First Name" onChange={handleFormChange} value={formData.firstName} />
        <input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={handleFormChange} value={formData.lastName} />
        <button type="submit">Submit</button>
      </form>

      {/* Name Container */}
      <div className="my-names">
        <p>Submitted First Name = {formData.firstName || '?'} </p>
        <p>Submitted Last Name = {formData.lastName || '?'} </p>
      </div>
    </>
  )
}

export default MyForm;