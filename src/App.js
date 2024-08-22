import Project from './components/Project'

function App() {
  return (
    <div className="App">
      <h1>Input Challenges React</h1>
      <section className='card-container'>
        <Project title="Teste" tags={['html', 'css']} />
      </section>
    </div>
  );
}

export default App;
