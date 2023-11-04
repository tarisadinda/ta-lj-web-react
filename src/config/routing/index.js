import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "@/pages/login";
import LayoutAuth from "@/components/admin/layouts/auth";
import LayoutMain from "@/components/admin/layouts/main";
import Dashboard from "@/pages/admin/dashboard";
import JobCategory from "@/pages/admin/job-categories"
import Register from "@/pages/admin/register";
import Payroll from "@/pages/admin/payroll"
import NewSubmission from "@/pages/admin/company/new-submission";
import AllCompany from "@/pages/admin/company/all";
import DetailCompany from "@/pages/admin/company/detail-company";
import DetailVerification from "@/pages/admin/company/detail-verification";

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
                    <Route path="/payroll" element={<Payroll />} />
                    <Route path="/new-submission-company" element={<NewSubmission />} />
                    <Route path="/admin-detail-verification" element={<DetailVerification />} />
                    <Route path="/all-company" element={<AllCompany />} />
                    <Route path="/admin-detail-company" element={<DetailCompany />} />
                </Route>
            </Routes>
        </Router>
    </>)
}

export default Routing