import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import MemeList from '../MemeList/MemeList';
import getData from '../../util/Imgflip';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      memeSelected:0,
    };
    this.changeMemeSelected=this.changeMemeSelected.bind(this);
  }
  changeMemeSelected(val,memeObj){

    this.setState({
      memeSelected:val,
      memeObj:memeObj,
    });
   
    
  }
  componentDidMount() {
    getData().then(memes => {
      this.setState({
        memes,
      });
    });
  }
  render() {
    return (
      <>
        <Router>
          <div className="route-container">
            <Navbar onClick={this.changeMemeSelected}/>
            <div className="content-body">

              <Switch>
                <Route path="/home"
                  render={(props) => (
                    <h1>Hello World</h1>
                  )} />
                <Route path="/search"
                  render={(props) => {
                    if(this.state.memeSelected){
                      return <img src={this.state.memeObj.url}/>;
                    }else{
                     return  <MemeList memes={this.state.memes} onClick={this.changeMemeSelected} />;
                    }
                  }} />
              </Switch>

            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
