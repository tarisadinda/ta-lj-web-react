import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../../pages/login";
import LayoutAuth from "../../components/layouts/auth";
import LayoutMain from "../../components/layouts/main";
import Dashboard from "../../pages/dashboard";
import AllCompany from "../../pages/company/all";

const Routing = () => {
    return (<>
        <Router>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/" exact element={<Login />} />
                </Route>
                <Route element={<LayoutMain />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/company/all" element={<AllCompany />} />
                </Route>
            </Routes>
        </Router>
    </>)
}

export default Routing