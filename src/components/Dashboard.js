import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems } from './listItems'

import Projects from './projects/Projects'
import TasksTable from './TasksTable'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const [currentTasks, setCurrentTasks] = useState([])

  const projects = [
    {
      uid: 1,
      img: 'https://saber3d.com/wp-content/uploads/2020/06/CrysisRemastered_icon.jpg',
      title: 'Crysis'
    },
    {
      uid: 2,
      img: 'https://saber3d.com/wp-content/uploads/2019/12/Witcher3Switch_icon.jpg',
      title: 'Witcher 3'
    },
    {
      uid: 3,
      img: 'https://saber3d.com/wp-content/uploads/2019/12/Vampyr_icon_.jpg',
      title: 'Vampyr Switch'
    },
    {
      uid: 4,
      img: 'https://saber3d.com/wp-content/uploads/2016/07/GodMode_Screens_8-800x600.jpg',
      title: 'God Mode'
    }
  ]
  const tasks = [
    {
      uid: 1,
      taskType: 'AddItem',
      desc: 'Add item to the player',
      properties: {
        itemName: 'gold',
        amount: 100
      },
      state: 'inProgress'
    },
    {
      uid: 2,
      taskType: 'AddItem',
      desc: 'Add item to the player',
      properties: {
        itemName: 'silver',
        amount: 200
      },
      state: 'Done'
    },
    {
      uid: 2,
      taskType: 'RemoveItem',
      desc: 'Remove player',
      state: 'Failed'
    }
  ]

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const setCurrentProject = (uid) => {
    getTasks(uid)
  }

  const getTasks = (uid) => {
    setCurrentTasks(tasks.filter(task => task.uid === uid))
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Mass Tasks
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={3}>
              <Projects
                projects={projects}
                setCurrent={setCurrentProject}
              />
            </Grid>
            <Grid item xs={12}>
              <TasksTable
                tasks={currentTasks}
                getTasks={getTasks}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
