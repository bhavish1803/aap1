import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Action/addData";
import shortid from "shortid";
import { updateData } from "../Action/updateData";
const AddEditForm = (props) => {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("Mail");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  let btn_Name = "Add Data";

  if (props.id) {
    btn_Name = "Update Data"

    console.log(props.d1);
    setName(props.d1);

  }

  const onAddDataHandeller = (e) => {
    e.preventDefault();

    if (props.id) {
      dispatch(
        updateData({
          Name: Name,
          Gender: Gender,
          Mobile: Mobile,
          Email: Email,
          ID: props.id,
        })
      );
    } else {
      dispatch(
        addData({
          Name: Name,
          Gender: Gender,
          Mobile: Mobile,
          Email: Email,
          ID: shortid.generate(),
        })
      );
    }
  };

  return (
    <div>
      <form>
        Name :{" "}
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Gender :
        <input
          type="radio"
          name="option"
          value="Male"
          checked={Gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
        <input
          type="radio"
          name="option"
          value="Female"
          checked={Gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
        <br />
        Mobile NO :{" "}
        <input
          type="number"
          value={Mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        Email :{" "}
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <button onClick={onAddDataHandeller}>{buttonName}</button>
    </div>
  );
};

export default AddEditForm;
