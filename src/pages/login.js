import styles from "@/styles/pages/Login.module.scss"
import cn from 'classnames'
import { NavLink, useNavigate } from "react-router-dom"
import React from "react"
import InputIcon from "@/components/common/input-icon"
import SVGEye from '@/assets/icons/eye.svg'
import SVGEyeClose from '@/assets/icons/eye-closed.svg'
import CustomAlert from "@/components/common/alert"

export default function Login() {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = React.useState('')
    const [severity, setSeverity] = React.useState('success')
    const [openAlert, setOpenAlert] = React.useState(false)
    const [seePassword, setSeePassword] = React.useState(false)
    const [userAccount, setUserAccount] = React.useState({
        username: 'min',
        password: ''
    })

    const handleVisibility = () => {
        setSeePassword(!seePassword)
    }

    const handleChange = (e) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/dashboard')
    }

    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-5">Login Admin</h2>
            <form onSubmit={handleSubmit} className={styles.formWrap}>
                <div className={styles.form}>
                    <div className={cn(styles.inputGroup, "mb-3")}>
                        <label htmlFor="username" className="form-label"><b>Username</b></label>
                        <input type="text" 
                            onChange={handleChange} 
                            className={cn(styles.inputField, "form-control")} 
                            id="username" 
                            name="username" 
                            placeholder="Masukkan username admin" 
                        />
                    </div>
                    <div className={cn(styles.inputGroup, "mb-1")}>
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <InputIcon 
                            placeholder="Masukkan password"
                            id="password"
                            name="password"
                            type={seePassword ? "text" : "password"}
                            onChange={handleChange}
                            onClick={handleVisibility}
                            icon={seePassword ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                        />
                    </div>
                    <div className="mb-4">
                        <span className={styles.forgetText}>
                            <NavLink to='#'>Lupa password?</NavLink>
                        </span>
                    </div>
                    <button type="submit" className={cn(styles.loginBtn, "btn btn-primary blue")}>Login</button>
                    <div className="mt-2">
                        <p className={styles.registText}>Belum punya akun? <NavLink to="/register"><span>Daftar</span></NavLink></p>
                    </div>
                </div>
            </form>
        </div>
        <CustomAlert
            open={openAlert}
            onClose={() => { setOpenAlert(false); setErrorMsg('')}}
            severity={severity}
            duration={2500}
            text={errorMsg}
        />
    </>)
}