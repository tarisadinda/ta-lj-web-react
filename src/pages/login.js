import styles from "@/styles/pages/Login.module.scss"
import cn from 'classnames'
import { Link, NavLink } from "react-router-dom"

export default function Login() {
    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-5">Login</h2>
            <div className={styles.form}>
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label"><b>Username</b></label>
                    <input type="email" className={cn(styles.inputField, "form-control")} id="uname" placeholder="Masukkan username admin" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input type="password" className={cn(styles.inputField, "form-control")} id="password" placeholder="Masukkan password" />
                </div>
                <div className="my-3">
                    <span className={styles.forgetText}>
                        <Link href='#'>Lupa password?</Link>
                    </span>
                </div>
                <NavLink to='/dashboard'>
                    <button className={cn(styles.loginBtn, "btn btn-primary blue")}>Login</button>
                </NavLink>
            </div>
        </div>
    </>)
}