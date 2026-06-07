import './App.css'
import Student from './Student/Student'

function App() {
  return (
    <>
      <div>
        <h2>Props Section</h2>
        <Student name="Juan David" age="20" isStudent={true}></Student>
        <Student name="Maria" age={22} isStudent="nose"></Student>
      </div>
    </>
  );
}

export default App
