import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "@/pages/login";
import LayoutAuth from "@/components/admin/layouts/auth";
import LayoutMain from "@/components/admin/layouts/main";
import Dashboard from "@/pages/admin/dashboard";
import JobCategory from "@/pages/admin/job-categories"
import Register from "@/pages/admin/register";

const Routing = () => {
    return (<>
        <Router>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/register" exact element={<Register />} />
                </Route>
                <Route element={<LayoutMain />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/job-categories" element={<JobCategory />} />
                </Route>
            </Routes>
        </Router>
    </>)
}

export default Routing