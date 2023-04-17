import React from "react";
import { Feed, Header, Login, Sidebar, Widgets } from "./component";
import { UseStateValue } from "./hooks/StateProvider";

const App = () => {
  // console.log("usestatevalue",useStateValue());
  const [user, dispatch] = UseStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* 1st component--- Header */}
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
