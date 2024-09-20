import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/Home";
import AgentList from './pages/AgentList';
import AddAgent from "./pages/AddAgent";
import Profile from './pages/Profile';
import AdminList from "./pages/AdminList";
import AddAdmin from "./pages/AddAdmin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="/dashboard/agents" element={<AgentList />} />
            <Route path="/dashboard/add-agent" element={<AddAgent />} />
            <Route path="/dashboard/admins" element={<AdminList />} />
            <Route path="/dashboard/add-admin" element={<AddAdmin />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
