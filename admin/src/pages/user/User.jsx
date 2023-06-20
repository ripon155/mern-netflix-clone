import "./user.css";
import { Link } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import PublishIcon from "@mui/icons-material/Publish";

function User() {
  return (
    <div className="user">
      <div className="userTitlrContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="usercontainer">
        <div className="usershow">
          <div className="usershowTop">
            <img
              src="https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="usershowImg"
            />
            <div className="usershowTopTitle">
              <span className="userShowUserName">John Doe</span>
              <span className="userShowUserJobT">Software Engineer</span>
            </div>
          </div>
          <div className="usershowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Mohiuddin Saifullah</span>
            </div>
            <div className="userShowInfo">
              <DateRangeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.2023</span>
            </div>
            <div className="userShowInfo">
              <PhoneInTalkIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+1 23456</span>
            </div>
            <div className="userShowInfo">
              <MailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                MohiuddinSaifullah@email.com
              </span>
            </div>
            <div className="userShowInfo">
              <HomeIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Dhaka | Bangladesh</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userupdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userupdateLeft">
              <div className="userupdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Mohiuddin Saifullah"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="MohiuddinSaifullah@email.com"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 23456"
                  className="userupdateInput"
                />
              </div>
              <div className="userupdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Dhaka | Bangladesh"
                  className="userupdateInput"
                />
              </div>
            </div>
            <div className="userupdateRight">
              <div className="userupdateUpload">
                <img
                  src="https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                  className="userupdateImage"
                />
                <label htmlFor="file">
                  <PublishIcon className="userupdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userupdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
