import { Routes, Route } from "react-router-dom";

import { Home } from "pages/home";

import { Finances } from "pages/finances";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finances" element={<Finances />} />
    </Routes>
  );
};
