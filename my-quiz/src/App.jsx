import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from './constants'

function App() {
  return (
    <div>
      <Quiz questions={jsQuizz.questions}/>
    </div>
  )
}

export default App
