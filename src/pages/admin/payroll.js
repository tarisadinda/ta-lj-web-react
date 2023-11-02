import React, { useRef, useState } from 'react'
import styles from '@/styles/pages/admin/Payroll.module.scss'
import IconBtn from "@/components/common/icon-button"
import LayoutMain from "@/components/admin/layouts/main"
import SVGAdd from '@/assets/icons/add.svg'
import CustomTable from '@/components/common/table'
import AddSalaryModal from '@/components/admin/modals/add-salary'
import { API_SALARY } from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { alertMessage, openAlert, setOpenAlert } from '../../redux/common/alertSlice'
import CustomAlert from '@/components/common/alert'

const colList = [
    {
        id: 'salary_nominal',
        label: 'Nominal Gaji',
        render: (data) => <span>{data.salary_nominal}</span>
    },
    {
        id: 'salary_flag',
        label: 'Flag Item',
        render: (data) => <span>{data.salary_flag}</span>
    },
    {
        id: 'createdAt',
        label: 'Tanggal Dibuat',
        render: (data) => <span>{data.createdAt}</span>
    },
]

export default function Payroll() {
    const dispatch = useDispatch()

    const effectRan = useRef(false)

    const isOpenAlert = useSelector(openAlert)
    const alertMsg = useSelector(alertMessage)

    const [isAddSalary, setIsAddSalary] = useState(false)
    const [salaryList, setSalaryList] = useState([])

    const deleteSalary = (id) => {
        console.log(id)
        // axiosInstance.get()
    }

    return(<>
        <h4><b>Penghasilan</b></h4>
        <div style={{ margin: '20px 0px'}}>
            <IconBtn 
                title='Tambah Penghasilan' 
                startIcon={<SVGAdd />}
                onClick={() => setIsAddSalary(!isAddSalary)}
                className="btn btn-primary blue" 
            />
        </div>
        <div>
            <p className={styles.tableName}>Daftar Penghasilan Minimal</p>
            <CustomTable
                columns={colList}
                data={salaryList}
                idKey='salary_id'
                deleteData={true}
                editData={true}
                deleteFunc={deleteSalary}
            />
        </div>
        <AddSalaryModal open={isAddSalary} onClose={() => setIsAddSalary(false)} />
        <CustomAlert 
            open={isOpenAlert} 
            severity="success" 
            text={alertMsg}
            duration={3500} 
            onClose={() => dispatch(setOpenAlert(false))} 
        />
    </>)
}

Payroll.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}