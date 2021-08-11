import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textArea:{
    width:"100vw"
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  countContainer:{
    width:"100%",
    textAlign:"center",
    marginTop:"10px"
  }
}));

function App() {
  const [wordCount,setWordCount] = useState("0");
  const classes = useStyles();

  const countWords = (e) =>{
    let string = e.target.value;
    if(string[string.length-1]===" "){
      string = string.trim();
      string = string + " ";
    }
    let tempCount = string.split(" ").length;
    if(string.lastIndexOf(" ")===string.length-1){
      tempCount = tempCount - 1;
      setWordCount(tempCount);
    }
  }

  return (
    <div className="App">
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Count Words
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      <TextField
          id="filled-multiline-static"
          multiline
          className={classes.textArea}
          onChange={countWords}
          rows={8}
          placeholder="Enter Words Here"
          variant="filled"
        />
        <div className={classes.countContainer}>
          <TextField id="standard-basic" label="Word Count" value={wordCount} disabled align="center"/>
        </div>
    </div>
  );
}

export default App;
