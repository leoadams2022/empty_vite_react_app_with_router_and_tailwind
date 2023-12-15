import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h1 className="text-center text-2xl">header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center text-2xl">footer</footer>
    </>
  );
}
