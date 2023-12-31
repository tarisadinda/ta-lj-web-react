import styles from '@/styles/components/candidate/profile/SideMenu.module.scss'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from 'next/link'
import React from 'react'

export default function SideMenu({data}) {
    const [selectedMenuId, setSelectedMenuId] = React.useState(0)

    const selectMenu = (id) => {
        setSelectedMenuId(id)
    }

    console.log(selectedMenuId)
    return(<>
        <div className={styles.buttonWrap}>
            {data.map((item, index) => (
                <Link key={index} href={item.path ? item.path : '#'} style={{ textDecoration: 'none' }}>
                    <button className={item.value === selectedMenuId ? styles.activeBtn : styles.actionBtn} onClick={() => selectMenu(item.value)}>
                        {item.label}
                        <NavigateNextIcon />
                    </button>
                </Link>
            ))}
        </div>
    </>)
}