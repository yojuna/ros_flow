import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// import SetUpData from './utils/backend/CPU/ModelSetup/setUpData';
import SelectModel from './components/SelectionBar/usableModels';
import NavBar from './components/NavBar/NavBar';
// import WebGPUChecker from './components/Warnings/WebGPUChecker';
import FlowGraph from './components/ReactFlow/FlowGraph';
import Flow from './App';
// import styles from './styles/styles.css';
// import './styles/styles.css';
import * as styles from './styles/styles.css'

import { Provider } from 'react-redux';
import store from './store/index';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Analytics } from '@vercel/analytics/react';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const text = 'NodeWeaver';
const colors = [
  { r: 26, g: 132, b: 184 }, // blue darker
  { r: 26, g: 132, b: 184 }, 
  { r: 26, g: 140, b: 184 },
  { r: 26, g: 140, b: 184 },
  { r: 26, g: 148, b: 184 },
  { r: 26, g: 148, b: 184 },
  { r: 26, g: 156, b: 184 },
  { r: 26, g: 156, b: 184 },
  { r: 26, g: 164, b: 184 },
  { r: 26, g: 164, b: 184 }, // light blue
];

const characters = text.split('').map((char, i) => {
  const color = colors[i];
  const style = {
    color: `rgb(${color.r}, ${color.g}, ${color.b})`,
  };

  return (
    <span key={i} style={style}>
      {char}
    </span>
  );
});

function FlowMain() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Provider store={store} class={styles} sx={{ fontSize: '10px' }}>
        <ThemeProvider theme={darkTheme}>
          <Box sx={{ display: 'flex', bgcolor: 'rgb(40,40,40)' }}>
            <AppBar
              position="fixed"
              open={open}
              sx={{ border: '0px', color: 'white', bgcolor: 'rgb(40,40,40)' }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 1, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon sx={{ color: 'rgb(230,230,230)' }} />
                </IconButton>
                <Typography
                  variant="h7"
                  component="div"
                  noWrap
                  sx={{
                    width: '100%',
                    fontSize: 24,
                  }}
                >
                  {characters}
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,

                flexShrink: 1,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  height: '100vh',
                  boxSizing: 'border-box',
                  color: 'white',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader
                sx={{ bgcolor: 'rgb(40,40,40)', padding: 0, margin: 0 }}
              >
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{ color: 'rgb(200,200,200)', margin: '10px' }}
                >
                  {theme.direction === 'ltr' ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              {/* <SelectModel /> */}
              <NavBar />
            </Drawer>
            <Main open={open} style={{ height: '100vh' }}>
              {/* <Flow /> */}
              <FlowGraph />
              {/* <SetUpData /> */}
            </Main>
          </Box>
        </ThemeProvider>
      </Provider>
      <Analytics />
    </>
  );
}

export default FlowMain;