import "./newuser.css";

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newuserTitle">New User</h1>
      <form className="newuserForm">
        <div className="newuserItem">
          <label>Username</label>
          <input type="text" placeholder="Ripon" />
        </div>
        <div className="newuserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Mohiuddin Saifullah" />
        </div>
        <div className="newuserItem">
          <label>Email</label>
          <input type="email" placeholder="ripon@gmail.com" />
        </div>
        <div className="newuserItem">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="newuserItem">
          <label>Phone</label>
          <input type="password" placeholder="12345678" />
        </div>
        <div className="newuserItem">
          <label>Address</label>
          <input type="password" placeholder="Dhaka  | Bangladesh" />
        </div>
        <div className="newuserItem">
          <label>Gender</label>
          <div className="newuserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newuserItem">
          <label>Active</label>
          <select name="active" id="active" className="newuserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newuserButton">Create</button>
      </form>
    </div>
  );
}

export default NewUser;
