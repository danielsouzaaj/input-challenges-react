import images from '../../assets/images/preview/index.js'
import Project from '../../components/Project'

function Home() {
    return (
        <main className="wrapper">
            <h1>Input Challenges React</h1>
            <section className='card-container'>
                <Project title="Mini bio" link="Mini-bio" preview={images.miniBio}/>
            </section>
        </main>
    );
}

export default Home