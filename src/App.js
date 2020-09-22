import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='App-content'>
          <Route path='/profile' render={() => <Content 
                                                PostData = {props.state.PostData} 
                                                AddPostState={props.AddPostState} 
                                                NewPostText={props.state.NewPostText}
                                                UpdateNewPost={props.UpdateNewPost}         
                                                />}/>
          <Route path='/dialogs' render={() => <Dialogs DialogsData ={props.state.DialogsData} MessageData={props.state.MessageData} />}  />
          <Route path='/news'    render={() => <News  News={props.state.News} />}/>
          <Route path='/music'   render={() => <Music />}/>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
