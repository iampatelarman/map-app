import "./App.css";
import React from "react";

// antd css
import "antd/dist/reset.css";
// antd components
import { Layout, Menu, Dropdown, Space } from "antd";

// react icons for nav and profile
import { BiMap, BiHistory, BiBookmarks, BiCog, BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

// icons for collapsable nav
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";

import { useState } from "react";
import FormInput from "./Components/FormInput";
import RegionInfo from "./Components/RegionInfo";
import Map from "./Components/Map";

const { Header, Content, Footer, Sider } = Layout;

// header - profile items
const items = [
  {
    label: "Profile",
    icon: <CgProfile />,
    key: "0",
  },
  {
    label: "setting",
    key: "1",
    icon: <BiCog />,
  },
  {
    type: "divider",
  },
  {
    label: "Logout",
    key: "3",
    icon: <BiLogOut />,
    danger: true,
  },
];

// ========== App Component =============

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      {/* ======= Sidbar ======== */}
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: "relative",
          boxShadow: "2px 0px 10px rgb(185, 184, 184)",
        }}
      >
        {/* === SIDEBAR COLLAPSE TRIGGER ICONS */}
        <div className="sidebarCollapse">
          {React.createElement(
            collapsed ? TbLayoutSidebarLeftCollapse : TbLayoutSidebarLeftExpand,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>

        {/* =======  sidebar menu ========== */}
        <Menu
          style={{ paddingTop: "4rem" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <BiMap />,
              label: "Home",
            },
            {
              key: "2",
              icon: <BiHistory />,
              label: "Recent",
            },
            {
              key: "3",
              icon: <BiBookmarks />,
              label: "Bookmarks",
            },
          ]}
        />
        {/* sidebar menu end */}
      </Sider>

      {/* ===== sidebar end ==== */}
      <Layout>
        {/* =====  header  ===== */}
        <Header className="header">
          <h1>Map Up</h1>
          <div style={{ display: "flex" }}>
            {/* ===== Dropdown profile icon ===== */}
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              overlayStyle={{ fontSize: "1.5rem" }}
            >
              <CgProfile className="icon" />
            </Dropdown>
            {/* === DROPDOWN END */}
          </div>
        </Header>

        {/* === HADER END ==== */}

        {/* ==========  CONTENT  ============ */}

        <Content style={{ width: "100%" }}>
          <div className="content">
            <Space direction="vertical" size="middle">
              {/* ========= FLOATING INPUT FORM ======== */}
              <FormInput />

              {/* ========== REGION INFO ========== */}
              <RegionInfo />
            </Space>
          </div>

          {/* =============== MAP COMPONENT ============== */}

          <div style={{ width: "100%", height: "100%" }}>
            <Map />
          </div>
        </Content>

        {/* CONTENT END */}

        {/* ===== FOOTER ====== */}
        <Footer style={{ textAlign: "center" }}>
          <p>Made by Arman Copy right &copy; 2023</p>
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
