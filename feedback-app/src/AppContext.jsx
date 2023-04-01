import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutIconLink from './components/AboutIconLink'
import FeedbackStatsContext from './components/FeedbackStatsContext'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
import FeedbackListContext from './components/FeedbackListContext'
import FeedbackFormContext from './components/FeedbackFormContext'

function AppContext() {


   

    return (
        <FeedbackProvider>


            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/"
                            element={
                                <>
                                    <FeedbackFormContext />
                                    <FeedbackStatsContext />
                                    <FeedbackListContext />
                                </>
                            }
                        >
                        </Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default AppContext