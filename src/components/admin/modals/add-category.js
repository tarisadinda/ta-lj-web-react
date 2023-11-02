import styles from '@/styles/components/admin/modals/AddCategoryModal.module.scss'
import cn from 'classnames'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React, { useState } from 'react'

export default function AddCategoryModal({ open, onClose }) {
    const [catName, setCatName] = useState('')
    
    const saveCategory = (e) => {
        e.preventDefault()

    }

    return(<>
        <Dialog open={open} fullWidth={true} maxWidth='xs'>
            <DialogTitle sx={{ padding: '10px 15px' }}>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                    <span>Tambah Kategori Pekerjaan</span>
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <div>
                    <label className={styles.inputLabel}>Nama Kategori</label>
                    <input type='text' className='form-control' name='category_name' onChange={(e) => setCatName(e.target.value)} />
                </div>
                <div className={styles.actionBtn}>
                    <button onClick={onClose} className={cn(styles.cancelBtn, 'btn btn-ghost')}>Batal</button>
                    <button onClick={saveCategory} className={cn(styles.saveBtn, 'btn btn-primary blue')}>Simpan</button>
                </div>
            </DialogContent>
        </Dialog>
    </>)
}