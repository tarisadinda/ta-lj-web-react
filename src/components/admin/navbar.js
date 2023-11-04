import * as React from 'react'
import styles from '@/styles/components/admin/Navbar.module.scss'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogoutIcon from '@mui/icons-material/Logout'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

export default function Navbar() {
  const navigate = useNavigate()
  const [openCompanyList, setOpenCompanyList] = React.useState(false)
  const [openSkillList, setOpenSkillList] = React.useState(false)

  const handleCompanyList = () => {
    setOpenCompanyList(!openCompanyList)
  }

  const handleSkillList = () => {
    setOpenSkillList(!openSkillList)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user_token')
    navigate('/')
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className='justify-content-end'>
          <NavLink to='/' className={styles.NavLink}>
            <div className={styles.profileBtn}>
              <AccountCircleIcon sx={{ fontSize: 40 }} />
              <p className={styles.name}>Admin</p>
            </div>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }} className={styles.menuWrap}>
          <List>
            <NavLink to='/dashboard' className={styles.NavLink}>
                <ListItemButton>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </NavLink>
            <NavLink to='/job-categories' className={styles.NavLink}>
                <ListItemButton>
                    <ListItemText primary="Kategori Pekerjaan" />
                </ListItemButton>
            </NavLink>
            <NavLink to='/payroll' className={styles.NavLink}>
                <ListItemButton>
                    <ListItemText primary="Penghasilan" />
                </ListItemButton>
            </NavLink>
            <ListItemButton onClick={handleCompanyList}>
                <ListItemText primary="Perusahaan" />
                {openCompanyList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCompanyList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to='/new-submission-company' className={styles.NavLink}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Pengajuan Baru" />
                  </ListItemButton>
                </NavLink>
                <NavLink to='/all-company' className={styles.NavLink}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Semua Perusahaan" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
            <NavLink to='/employee/all' className={styles.NavLink}>
                <ListItemButton>
                    <ListItemText primary="Semua Pekerja" />
                </ListItemButton>
            </NavLink>
            <ListItemButton onClick={handleSkillList}>
                <ListItemText primary="Pengajuan Keahlian" />
                {openSkillList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSkillList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to='/admin/skills/skill-submission' className={styles.NavLink}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Pengajuan Baru" />
                  </ListItemButton>
                </NavLink>
                <NavLink to='#' className={styles.NavLink}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Proses Sertifikasi" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </List>
          <List>
            <ListItem disablePadding onClick={handleLogout}>
              <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}