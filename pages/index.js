import { useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import { ThemeContext } from '../src/theme';
import Home from '../src/components/Home'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: "none",
  }
}))

export default function Index() {

  const classes = useStyles();

  const { toggleTheme, isDark } = useContext(ThemeContext)

  const trigger = useScrollTrigger({ disableHysteresis: true })
  return (
    <div className={classes.root}>
      <Head>
        <title>Murali Devan</title>
        <meta name="description" content="NextJs Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar color={!trigger ? "transparent" : "inherit"} className={classes.appBar} position="fixed" >
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            Murali Devan
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {isDark ?
              <Image
                src="/lightmode.png"
                alt="light mode"
                width={50}
                height={50}
              />
              :
              <Image
                src="/darkmode.png"
                alt="dark mode"
                width={50}
                height={50}
              />
            }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Home />
      </Container>


    </div>
  )
}
