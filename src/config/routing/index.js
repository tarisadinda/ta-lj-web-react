import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "@/pages/login";
import LayoutAuth from "@/components/admin/layouts/auth";
import LayoutMain from "@/components/admin/layouts/main";
import Dashboard from "@/pages/admin/dashboard";

const Routing = () => {
    return (<>
        <Router>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/" exact element={<Login />} />
                </Route>
                <Route element={<LayoutMain />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    </>)
}

export default Routing