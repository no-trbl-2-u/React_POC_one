import './MyForm.css';

function MyForm() {
  return (
    <>
      <form className="my-form">
        <input type="text" id="first-name" name="firstName" placeholder="First Name" />
        <input type="text" id="last-name" name="lastName" placeholder="Last Name" />
        <button type="submit">Submit</button>
      </form>

      <div className="my-names">
        <p>Submitted First Name = ? </p>
        <p>Submitted Last Name = ? </p>
      </div>
    </>
  )
}

export default MyForm;