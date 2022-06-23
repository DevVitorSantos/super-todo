import './App.scss';
import { useState } from 'react'

function App() {

 
  // setting the accumulators
  const [todos, setTodos] = useState([
    { id: 0, status: false, taskname: 'banana'},
    { id: 1, status: true, taskname: 'maça'},
    { id: 2, status: false, taskname: 'pera'}
  ]);

  const [text, setText] = useState('');
 
  console.log("listando os todos " + todos);

  // implementing map form to variables
  function handleChangeText(e){
    setText(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos, {
      id: todos.length+1,
      status: false,
      taskname: text
    }])
    setText("")
  }

  // implement the status toggle
  function handleToggleStatus(){

  }

  return (
    <div className="App">
      <div className="container">
        <div className="title-box">
          <h1>SUPER TODO 100%</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <input 
               className='SubmitFormInput'
               placeholder='Digite aqui sua tarefa'
               onChange={handleChangeText}
               value={text} />
              <br/>
              
              
            </form>
          </div>
        </div>
        <div className="content-box">
          
            <ul >
            {
              todos.map((item, index) => {
                return ( 
                  <li key={item.id} onClick={handleToggleStatus}>{item.taskname}</li>
                )
              })
            }
             
            </ul>
          
        </div>
      </div>
    </div>
  );
}

export default App;
