import React from "react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          <DropdownItem>Acer Laptop</DropdownItem>
          <DropdownItem>Asus Laptop</DropdownItem>
          <DropdownItem>Dell Laptop</DropdownItem>
          <DropdownDivider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git{" "}
          </Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
