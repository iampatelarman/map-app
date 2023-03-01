import React from "react";
import "antd/dist/reset.css";

// COMPONENTS FROM ANTD
import { Button, Input, Select } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { regionState } from "../features/regionSlice";
const { Option } = Select;

// ============= FORM INPUT COMPONENT ==========
const FormInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div style={{ boxShadow: "2px 2px 10px grey" }}>
      <Input.Group compact>
        {/* ===== SELECT INPUT ==== */}
        <Select
          placeholder="Country"
          style={{ width: "calc(250px - 61.76px)" }}
          onSelect={(value) => setValue(value)}
        >
          <Option value="United States">United States</Option>
          <Option value="India">India</Option>
          <Option value="United Kingdom">United Kingdom</Option>
        </Select>
        {/* ====  LOAD BUTTON ====== */}
        <Button
          type="primary"
          onClick={() => {
            if (value) dispatch(regionState(value));
          }}
        >
          Load
        </Button>
      </Input.Group>
    </div>
  );
};

export default FormInput;
