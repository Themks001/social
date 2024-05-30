import React from "react";
import PageHeader from "./layout/PageHeader.tsx";
import Sidebar from "./layout/sidebar.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Fav from "./pages/fav.tsx";
import Follow from "./pages/follow.tsx";
import Message from "./pages/messages.tsx";
import Reel from "./pages/reel.tsx";
import Shop from "./pages/shop.tsx";
import Register from "./pages/register.tsx";
import Auth from "./pages/login.tsx";
import Profile from "./pages/profile.tsx";
import Create from "./pages/create.tsx";
const App = () => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <PageHeader />
      <div className="grow relative bg-slate-950 flex overflow-hidden">
        <Sidebar />
        <div className="overflow-scroll p-2 w-full text-white">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/fav" element={<Fav />}></Route>
            <Route path="/follow" element={<Follow />}></Route>
            <Route path="/message" element={<Message />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/reel" element={<Reel />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/auth/login" element={<Auth />}></Route>
            <Route path="/auth/register" element={<Register />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
