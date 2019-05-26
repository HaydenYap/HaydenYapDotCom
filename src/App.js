import React from 'react';
//import Hero from './Content/Hero';
import Section from './Section/Section'
import Nav from './Nav/Nav';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: 'appBody',
      title: 'Hayden Yap',
      subTitle:  'Web Developer & Designer',
      command: 'HaydenYap.com'
    }

    this.changeState = this.changeState.bind(this);
  }


  changeState(newState){
    setTimeout(function() {document.getElementById("command").classList.remove("commandType");},10);
    setTimeout(function() {
      document.getElementById("command").classList.add("erase");
      document.getElementById("SectionTitle").classList.remove("titleType");
    }, 30);
    
    setTimeout(function() {
      document.getElementById("command").classList.remove("erase");
      document.getElementById("SectionSubTitle").classList.remove("typeAnimation");
      document.getElementById("SectionTitle").classList.add("hide");
    }, 1030);
    
    setTimeout(()=>{
      this.setState(newState);
      document.getElementById("command").classList.add("commandType");
      document.getElementById("SectionSubTitle").classList.add("typeAnimation");
      document.getElementById("SectionTitle").classList.remove("hide");
      document.getElementById("SectionTitle").classList.add("titleType");
    },1060)
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Nav changeState={this.changeState} state={this.state}/>
        </header>
          <Section state={this.state} />
      </div>
    );
  }
}

export default App;
