import React, { useState } from "react";

const Admin = () => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    address: "",
    dob: "",
  });
  const [people, setPeople] = useState([]);
  const obj = [
    "email",
    "firstName",
    "lastName",
    "gender",
    "phoneNumber",
    "address",
    "dob",
  ];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.lastName &&
      user.firstName &&
      user.email &&
      user.gender &&
      user.phoneNumber &&
      user.dob &&
      user.address
    ) {
      const newPerson = { ...user, id: user.email };
      setPeople([...people, newPerson]);
      setUser({
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        phoneNumber: "",
        address: "",
        dob: "",
      });
    }
  };

  return (
    <div>
      <h1>hello admin</h1>
      <>
        <h3>Add User</h3>
        <article className="form">
          <form>
            {obj.map((a) => {
              return (
                <div className="form-control">
                  <label htmlFor="a">{a} : </label>
                  <input
                    type="text"
                    id={a}
                    name={a}
                    value={user.a}
                    onChange={handleChange}
                  />
                </div>
              );
            })}
            <button type="submit" className="btn" onClick={handleSubmit}>
              add person
            </button>
          </form>
        </article>
      </>
      <article>
        {people.map((user1) => {
          const { id, firstName, lastName, email, phoneNumber, dob, address } =
            user1;
          return (
            <div key={id} className="item1">
              <h4>
                {firstName} {lastName}
              </h4>
              <p>{email}</p>
              <p>{phoneNumber}</p>
              <p>{dob}</p>
              <p>{address}</p>
              <button className="btn">Remove</button> 
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Admin;
