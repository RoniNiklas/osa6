import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Button from "@material-ui/core/Button"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Toolbar from "@material-ui/core/Toolbar"
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    secondary: {
      main: '#e91e63',
    }
  },
});


const styles = {
};

class Menu extends React.Component {
  
  render() {
    return (
      < div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Button component={NavLink} exact to="/" color="inherit" aria-label="Anecdotes">Anecdotes</Button>
            <Button component={NavLink} to="/create" color="inherit" aria-label="New">Create new</Button>
            <Button component={NavLink} to="/about" color="inherit" aria-label="About">About</Button>
          </Toolbar>
        </AppBar>
      </div >
    )
  }

}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <Table className="anekdootit">
      <TableHead>
        <TableRow>
          <TableCell>
            Anecdote
          </TableCell>
          <TableCell>
            Likes
          </TableCell>
          <TableCell>
            Author
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {anecdotes
          .map(anecdote =>
            <TableRow key={anecdote.id} >

              <TableCell>
                <ExpansionPanel>
                  <ExpansionPanelSummary>
                    <Link to={"/anecdotes/" + anecdote.id}>{anecdote.content}</Link>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    more info at {anecdote.info}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </TableCell>
              <TableCell>
                {anecdote.votes} likes
              </TableCell>
              <TableCell>
                {anecdote.author}
              </TableCell>
            </TableRow>
          )
        }
      </TableBody>
    </Table>
  </div>
)

const About = () => (
  <Grid container className={"about-container"}>
    <Grid item xs={6}>
      <div>
        <h2>About anecdote app</h2>
        <p>According to Wikipedia:</p>

        <em>An anecdote is a brief, revealing account of an individual person or an incident.
          Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
          such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>

        <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div>
          <figure>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Bundesarchiv_B_145_Bild-F038812-0022%2C_Wolfsburg%2C_VW_Autowerk%2C_EDV.jpg" alt="tän pitäis hakea wikipediasta kuvan"/>
            <figcaption> random jantteri käsittelemässä tietoja saksassa </figcaption>
          </figure>
      </div>
    </Grid>

  </Grid>

)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
  </div>
)

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h2>"{anecdote.content}" by {anecdote.author}</h2>
      <p>has {anecdote.votes} votes</p>
    </div>
  )
}

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div>
          <h2>create a new anecdote</h2>
          <TextField
            id="dote"
            label="Anecdote"
            className="emt"
            multiline
            rows="2"
            value={this.state.content}
            onChange={this.handleChange('content')}
            margin="normal"
          />
          <TextField
            id="author"
            label="Author"
            className="emt"
            multiline
            rows="2"
            value={this.state.author}
            onChange={this.handleChange("author")}
            margin="normal"
          />
          <TextField
            id="linkki"
            label="Link"
            className="emt"
            multiline
            rows="2"
            value={this.state.info}
            onChange={this.handleChange("info")}
            margin="normal"
          />
        </div>
        <div>
          <Button onClick={this.handleSubmit}> Create </Button>
        </div>
      </div>
    )

  }
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    }
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({
      anecdotes: this.state.anecdotes.concat(anecdote),
      notification: "Anecdote \"" + anecdote.content + "\" added to the list."
    })
    setTimeout(() => { this.setState({ notification: "" }) }, 10000)
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    const notificationStyle = {
      color: 'green',
      fontSize: 24,
      borderStyle: "solid",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <div>
              <h1>Software anecdotes</h1>
              <Menu />
              <div>
                {this.state.notification
                  ? <p style={notificationStyle}> {this.state.notification} </p>
                  : null
                }
              </div>
              <Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/create" render={({ history }) => <CreateNew history={history} addNew={this.addNew} />} />
              <Route exact path="/anecdotes/:id" render={({ match }) =>
                <Anecdote anecdote={this.anecdoteById(match.params.id)} />}
              />
            </div>
          </Router>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
