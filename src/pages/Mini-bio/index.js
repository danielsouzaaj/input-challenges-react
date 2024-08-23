import '../../assets/css/minhabio.css'
import avatar from '../../assets/images/avatar.jpg'

function MiniBio() {
    return (
        <main className='mini-bio-wrapper'>
            <div className="bio">
                <h2 className='bio-name'>Daniel Souza</h2>

                <img className='bio-image' src={avatar} alt="Avatar" />

                <p className='bio-desc'>Olá, sou um desenvolvedor web, apaixonado por tecnologia e sempre em busca de aprender mais.</p>

                <ul className='bio-list'>
                    <li>Natural de Salvador/BA</li>
                    <li>E-mail: <a href="mailto:danielsouzaajj@gmail.com">danielsouzaajj@gmail.com</a></li>
                    <li>Conecte-se comigo no <a href="https://www.linkedin.com/in/danielsouzaaj/">LinkedIn</a></li>
                </ul>
            </div>
        </main>
    )
}

export default MiniBio