import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Item from "./Item";
import CreateProductForm from "./CreateProductForm";
import LoginAndRegisterForm from "./LoginAndRegisterForm";
import ToDoList from "./ToDoList";

function App() {
  const [count, setCount] = useState(5);

  const [isShowLeftSidebar, setIsShowLeftSidebar] = useState(false);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false);

  const [productList, setProductList] = useState([
    {
      name: "iPhone 12",
      price: 15000000,
      isNew: true,
    },
    {
      name: "iPhone 12 Mini",
      price: 12000000,
      isNew: false,
    },
    {
      name: "iPhone 12 Pro",
      price: 20000000,
      isNew: true,
    },
    {
      name: "iPhone 12 Pro Max",
      price: 22000000,
      isNew: false,
    },
    {
      name: "iPhone 13",
      price: 25000000,
      isNew: false,
    },
    {
      name: "iPhone 13 Mini",
      price: 20000000,
      isNew: false,
    },
    {
      name: "Galaxy S21",
      price: 15000000,
      isNew: false,
    },
    {
      name: "Galaxy Note 20",
      price: 20000000,
      isNew: false,
    },
    {
      name: "Xiaomi M11",
      price: 15000000,
      isNew: false,
    },
    {
      name: "Oppo Reno 5",
      price: 18000000,
      isNew: false,
    },
  ]);

  const fullName = "Thanh Tuấn";

  const handleAddProduct = (values) => {
    setProductList([...productList, values]);
  };

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          isNew={item.isNew}
        />
      );
    });
  };

  return (
    <div className="app">
      <LeftSidebar
        isShowLeftSidebar={isShowLeftSidebar}
        setIsShowLeftSidebar={setIsShowLeftSidebar}
      />
      <Header
        setIsShowLeftSidebar={setIsShowLeftSidebar}
        name={fullName}
        address="iViettech"
      />
      <div className="main-container">
        <div
          className={
            isShowRightSidebar
              ? "main-content main-show-sidebar"
              : "main-content"
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div>{count}</div>
              <button onClick={() => setCount(count + 1)}>+ Count</button>
              <button onClick={() => setCount(count - 1)}>- Count</button>
            </div>
            <button onClick={() => setIsShowRightSidebar(!isShowRightSidebar)}>
              Toggle Right Sidebar
            </button>
          </div>
          <h2>Danh sách sản phẩm</h2>
          <div className="list">{renderProductList()}</div>
          <CreateProductForm handleAddProduct={handleAddProduct} />
          <LoginAndRegisterForm />
          <ToDoList />
        </div>
        {/* <Button
          type="primary"
          htmlType="button"
          onClick={() =>
            createProductForm.setFieldsValue({ name: "Tuấn", price: 10000 })
          }
        >
          Submit
        </Button> */}
        <RightSidebar isShowRightSidebar={isShowRightSidebar} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
