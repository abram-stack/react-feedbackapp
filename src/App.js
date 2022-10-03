import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import feedbackData from "./data/feedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/feedbackContext';


function App() {
  const [feedbacks, setFeedback] = useState(feedbackData);
    
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={ 
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList  />
                <AboutIconLink/>
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} /> 
            <Route path='/post/*' element={<Post />}/>
          </Routes>

          {/* <AboutIconLink/> */}
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
