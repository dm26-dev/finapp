import { UserState } from "context/UserState";
import { Routes, Route, Navigate } from "react-router-dom";

// PAGES
import { Home } from "pages/home/Home";
import { Finances } from "pages/finances/Finances";
import { Statistics } from "pages/statistics/Statistics";

export const App = () => {
  return (
    <UserState>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </UserState>
  );
};
