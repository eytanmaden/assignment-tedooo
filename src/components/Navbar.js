import React, { useState } from 'react';
import { HomeOutlined, MailOutlined, BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";



export default function Navbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="navbar-complete">
      <div className="navbar-part">
        <div className="nav-element">
          <img
            className="nav-logo"
            alt="logo"
            src="https://play-lh.googleusercontent.com/eJ77zzTXINZ78BSbWECxFw_0vGVL7yp5mwluextg5V9N0BqFeu1OoiZNm5cyj2FjwLo"
          />
        </div>
        <div className="nav-element ">
          <input className="search-input" placeholder="🔍 Search"></input>
        </div>
      </div>
      <div className="navbar-part navbar-part-two">
        {selected === 1 ? (
          <div
            className="nav-element nav-element-two selected-nav"
            onClick={() => {
              setSelected(1);
            }}
          >
            <HomeOutlined className="p-2" />
            <div>Home</div>
          </div>
        ) : (
          <div
            className="nav-element nav-element-two"
            onClick={() => {
              setSelected(1);
            }}
          >
            <HomeOutlined className="p-2" />
            <div>Home</div>
          </div>
        )}
        {selected === 2 ? (
          <div
            className="nav-element nav-element-two selected-nav"
            onClick={() => {
              setSelected(2);
            }}
          >
            <MailOutlined className="p-2" />
            <div>Messaging</div>
          </div>
        ) : (
          <div
            className="nav-element nav-element-two"
            onClick={() => {
              setSelected(2);
            }}
          >
            <MailOutlined className="p-2" />
            <div>Messaging</div>
          </div>
        )}
        {selected === 3 ? (
          <div
            className="nav-element nav-element-two selected-nav"
            onClick={() => {
              setSelected(3);
            }}
          >
            <BellOutlined className="p-2" />
            <div>Notifications</div>
          </div>
        ) : (
          <div
            className="nav-element nav-element-two"
            onClick={() => {
              setSelected(3);
            }}
          >
            <BellOutlined className="p-2" />
            <div>Notifications</div>
          </div>
        )}
        <div className="nav-element nav-element-two nav-avatar">
          <Avatar
            size={30}
            className="avatar nav-avatar"
            src="https://images.tedooo.com/biz/62e984eca4ff286b57699578/01fda2c9-85c8-44f8-a1c7-f20a628c9dfb.jpg"
          />
        </div>
      </div>
    </div>
  );
}
