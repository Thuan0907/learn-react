import React from "react";
import ModalCreateUser from "./ModalCreateUser";

export default function ManageUser() {
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
          <div>
            Table users
            <ModalCreateUser />
          </div>
        </div>
      </div>
    </div>
  );
}
