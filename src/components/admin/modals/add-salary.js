import { DialogContent } from '@mui/material'
import CustomDialog from '@/components/common/dialog'
import styles from '@/styles/components/admin/modals/AddSalaryModal.module.scss'
import cn from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setMessage, setOpenAlert } from '../../../redux/common/alertSlice';

export default function AddSalaryModal({ open, onClose }) {
    const dispatch = useDispatch()
    const [dataSalary, setDataSalary] = React.useState({
        category: 'min',
        salary: ''
    })

    const handleChange = (e) => {
        setDataSalary({
            ...dataSalary,
            [e.target.name]: e.target.value
        })
    }

    const saveSalary = () => {
        onClose()

        dispatch(setMessage('Data berhasil ditambahkan'))
        dispatch(setOpenAlert(true))
    }

    return(<>
        <CustomDialog 
            title='Tambah Penghasilan'
            open={open} 
            handleClose={onClose} 
            maxWidth='md'
        >
            <DialogContent dividers>
                <div>
                    <label style={{ fontWeight: 600, marginBottom: '6px' }}>Kategori Penghasilan</label>
                    <select value={dataSalary.category} name='category' className='form-select' onChange={handleChange}>
                        <option value="min">Penghasilan Minimal</option>
                        <option value="max">Penghasilan Maksimal</option>
                    </select>
                </div>
                <div className={styles.nominalSection}>
                    <label style={{ fontWeight: 600, marginBottom: '6px' }}>Nominal</label>
                    <input type='text' 
                        name='salary' 
                        onChange={handleChange} 
                        className='form-control' 
                        placeholder='Masukkan nominal gaji' 
                    />
                </div>
                <div className={styles.actionBtn}>
                    <button onClick={onClose} className={cn(styles.cancelBtn, 'btn btn-ghost')}>Batal</button>
                    <button onClick={saveSalary} className={cn(styles.saveBtn, 'btn btn-primary blue')}>Simpan</button>
                </div>
            </DialogContent>
        </CustomDialog>
    </>)
}