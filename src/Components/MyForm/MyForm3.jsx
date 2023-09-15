import { useState, useEffect } from 'react';
import './MyForm.css';
import useMyForm from './useMyForm/useMyForm';

function MyForm() {
  const { nameData } = useMyForm();
  const [formData, setFormData] = useState(nameData);

  useEffect(() => {
    setFormData(nameData);
  }, [nameData, setFormData])

  const handleFormUpdate = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const submitHandler = e => {
    e.preventDefault();
    alert(`The Submitted name is ${formData.firstName} ${formData.lastName}`);

    // Rest Form
    setFormData({ firstName: '', lastName: '' });
  }

  return (
    <>
      <form className="my-form" onSubmit={submitHandler}>
        <input type="text" id="first-name" name="firstName" placeholder="First Name" onChange={handleFormUpdate} value={formData.firstName} />
        <input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={handleFormUpdate} value={formData.lastName} />
        <button type="submit">Submit</button>
      </form>

      <div className="my-names">
        <p>Submitted First Name = {formData.firstName || '?'} </p>
        <p>Submitted Last Name = {formData.lastName || '?'}</p>
      </div>
    </>
  )
}

export default MyForm;