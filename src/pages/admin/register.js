import React from 'react'
import styles from '@/styles/pages/admin/Register.module.scss'
import { Alert, Snackbar } from '@mui/material'
import cn from 'classnames'
import { NavLink } from 'react-router-dom';
import InputIcon from "@/components/common/input-icon"
import SVGEye from '@/assets/icons/eye.svg'
import SVGEyeClose from '@/assets/icons/eye-closed.svg'

export default function Register() {
    let vertical = 'top'
    let horizontal = 'center'

    const [errorMsg, setErrorMsg] = React.useState('')
    const [seePassword, setSeePassword] = React.useState(false)
    const [seeConfirmPass, setSeeConfirmPass] = React.useState(false)
    const [userAccount, setUserAccount] = React.useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirm_pass: ''
    })

    const [openToast, setOpenToast] = React.useState(false)

    const handleVisibility = () => {
        setSeePassword(!seePassword)
    }

    const handleSeeConfirmPass = () => {
        setSeeConfirmPass(!seeConfirmPass)
    }

    return(<>
        <div className={styles.wrapper}>
            <h2 className="d-flex justify-content-center mb-5">Registrasi Admin</h2>
            <form className={styles.formWrap}>
                <div className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className="form-label"><b>Email</b></label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Masukkan email anda"
                            className={cn(styles.inputField, "form-control")} 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className="form-label"><b>Name</b></label>
                        <input 
                            type="text" 
                            className={cn(styles.inputField, "form-control")} 
                            id="name" 
                            name="name" 
                            placeholder="Masukkan nama admin" 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className="form-label"><b>Username</b></label>
                        <input 
                            type="text" 
                            className={cn(styles.inputField, "form-control")} 
                            id="username" 
                            name="username" 
                            placeholder="Masukkan username admin" 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <InputIcon 
                            placeholder="Masukkan password"
                            id="password"
                            name="password"
                            type={seePassword ? "text" : "password"}
                            onClick={handleVisibility}
                            icon={seePassword ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirm_pass" className="form-label"><b>Konfirmasi Password</b></label>
                        <InputIcon 
                            placeholder="Masukkan konfirmasi password"
                            id="confirm_pass"
                            name="confirm_pass"
                            type={seeConfirmPass ? "text" : "password"}
                            onClick={handleSeeConfirmPass}
                            icon={seeConfirmPass ? <SVGEyeClose className={styles.eyeIcon} /> : <SVGEye className={styles.eyeIcon} />}
                        />
                    </div>
                    <button type="submit" className={cn(styles.registBtn, "btn btn-primary blue")}>Registrasi</button>
                    <div className="mt-2">
                        <p className={styles.loginText}>Sudah punya akun? <NavLink to="/"><span>Login</span></NavLink></p>
                    </div>
                </div>
            </form>
        </div>
        <Snackbar 
            open={openToast} 
            onClose={() => setOpenToast(false)}
            autoHideDuration={2500} 
            anchorOrigin={{vertical, horizontal}}
        >
            <Alert severity="error">{errorMsg}</Alert>
        </Snackbar>
    </>)
}