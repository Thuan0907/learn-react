import React from "react";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

export default function ManageUser() {
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
          <div>Table users</div>
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
}
