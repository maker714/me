import { Box, IconButton, Typography } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Box display="flex" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IconButton color="primary">
          <Typography>AAAAA</Typography>
        </IconButton>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Box>
  );
}

export default App;
