import Project from '../../components/Project'

function Home() {
    return (
        <main className="wrapper">
            <h1>Input Challenges React</h1>
            <section className='card-container'>
            <Project title="Teste" tags={['html', 'css']} />
            </section>
        </main>
    );
}

export default Home