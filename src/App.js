import './App.css';

const App=()=> {
  const name = "yassir"; 
  const isshowing = false; 

  return (
    <div className="App">
     <h1>Hello {isshowing ? name : 'someone'}</h1>
    </div>
  );
}

export default App;
