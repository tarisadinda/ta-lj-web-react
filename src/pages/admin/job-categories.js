import React, { useRef } from 'react'
import styles from '@/styles/pages/admin/JobCategories.module.scss'
import SVGAdd from '@/assets/icons/add.svg'
import CustomTable from '@/components/common/table'
import LayoutMain from '@/components/admin/layouts/main'
import IconBtn from '@/components/common/icon-button'
import AddCategoryModal from '@/components/admin/modals/add-category'
import { convertDate } from '../../utils/convert-date'
import ConfirmDeleteModal from '@/components/common/confirm-delete'
import EditCategoryModal from '@/components/admin/modals/edit-category'

const colList = [
    {
        id: 'category_name',
        label: 'Kategori',
        render: (data) => <span>{data.category_name}</span>
    },
    {
        id: 'create_date',
        label: 'Tanggal Dibuat',
        render: (data) => <span>{convertDate(data.create_date)}</span>
    },
]

export default function JobCategories() {
    const [openCatModal, setOpenCatModal] = React.useState(false)
    const [openEditModal, setOpenEditModal] = React.useState(false)
    const [askDelete, setAskDelete] = React.useState(false)
    const [deleteId, setDeleteId] = React.useState('')
    const [editCatId, setEditCatId] = React.useState('')
    const [categoryList, setCategoryList] = React.useState([])

    const deleteItem = () => {
        setAskDelete(false)
    }

    const modalDelete = () => {
        setAskDelete(true)
    }

    const editItem = () => {
        setOpenEditModal(false)
    }
    
    return(<>
        <h4><b>Kategori Pekerjaan</b></h4>
        <div className={styles.addBtn}>
            <IconBtn 
                title='Tambah Kategori' 
                startIcon={<SVGAdd />}
                onClick={() => setOpenCatModal(!openCatModal)}
                className="btn btn-primary blue" 
            />
        </div>        
        <CustomTable 
            columns={colList}
            data={categoryList}
            idKey='category_id'
            deleteData
            deleteFunc={modalDelete}
            editData
            editFunc={editItem}
        />
        <AddCategoryModal open={openCatModal} onClose={() => setOpenCatModal(false)} />
        <ConfirmDeleteModal open={askDelete} 
            delFunc={deleteItem} 
            onClose={() => { setAskDelete(false), setDeleteId('') }} 
        />
        <EditCategoryModal id={editCatId} 
            open={openEditModal} 
            onClose={() => setOpenEditModal(false)} 
        />
    </>)
}

JobCategories.getLayout = function getLayout(page) {
    return (
        <LayoutMain>
            {page}
        </LayoutMain>
    )
}