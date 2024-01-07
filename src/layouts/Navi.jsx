import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartSummary from "./CartSummary";
import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  function handleSignOut(params) {
    setIsAuthenticated(false);
    navigate("/");
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted size="large">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
