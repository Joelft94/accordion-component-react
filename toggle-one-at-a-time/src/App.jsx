import { act, useState } from 'react';
import data from './data'
import Questions from './Questions';


const App = () => {
  const [questions, setQuestions] = useState(data); // can also be questions = data since que don't use setQuestions
  const [activeId,setActiveId] = useState(null);


  const toggleQuestion = (id) =>{
    // console.log(id)
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  }
  return (
    <main>
      <Questions questions = {questions} activeId = {activeId} toggleQuestion={toggleQuestion} />
    </main>
  )
};
export default App;
