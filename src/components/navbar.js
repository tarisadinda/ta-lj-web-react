import * as React from 'react'
import styles from '../styles/components/Navbar.module.scss'
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
import PersonIcon from '@mui/icons-material/Person'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const bottomMenu = [
    {
        label: 'Profil Saya',
        link: '#'
    },
    {
        label: 'Logout',
        link: '/'
    }
]

export default function Navbar() {
  const [open, setOpen] = React.useState(true)
  const [openEmployeeList, setOpenEmployeeList] = React.useState(false)

  const handleEmployeList = () => {
    setOpenEmployeeList(!openEmployeeList)
  }

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
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
            <Link to='/dashboard' className={styles.link}>
                <ListItemButton>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Perusahaan" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to='/company/new-submission' className={styles.link}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Pengajuan Baru" />
                    </ListItemButton>
                  </Link>
                  <Link to='/company/all' className={styles.link}>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Semua Perusahaan" />
                    </ListItemButton>
                  </Link>
                </List>
            </Collapse>
            <ListItemButton onClick={handleEmployeList}>
                <ListItemText primary="Pekerja" />
                {openEmployeeList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openEmployeeList} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link href='/employee/new-account-list' className={styles.link}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Pengguna Baru" />
                    </ListItemButton>
                  </Link>
                  <Link href='/company/all' className={styles.link}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Semua Pekerja" />
                    </ListItemButton>
                  </Link>
                </List>
            </Collapse>
          </List>
          <List>
            {bottomMenu.map((text, index) => (
              <ListItem key={index} disablePadding>
                <Link to={text.link} className={styles.link}>
                    <ListItemButton>
                        <ListItemIcon>
                            {text.label === 'Logout' ? <LogoutIcon fontSize="small" /> : <PersonIcon fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText primary={text.label} />
                    </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}