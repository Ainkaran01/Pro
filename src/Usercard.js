import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import "./index.css";

function User({ user, onShowModal }) {
  return (
    <div className="card">
      <div className="root">
        <div className="card-container">
          <span className={user.online ? "pro online" : "pro offline"}>
            {user.online ? "Online " : "Offline"}
          </span>
          <img src={user.profile} className="img" alt="user" />
          <h3>{user.name}</h3>
          <h4>{user.city}</h4>
          <h5>{user.desc}</h5>
          <p className="exp">{user.exp}</p>
          <Button onClick={() => onShowModal(user)} className="primary">
            Get Info
          </Button>
        </div>
      </div>
    </div>
  );
}

export default User;
