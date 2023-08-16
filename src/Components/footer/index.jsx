import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.svg)", backgroundPosition: "top" }}>
    <div className='redes'>
        <a href='https://www.linkedin.com/in/itzel-romero/'>
            <img src="/img/linkedin.png" alt='Linkedin' />
        </a>
        <a href='https://github.com/Heleiirx'>
            <img src="/img/github.png" alt='Github' />
        </a>
    </div>
    <img src='/img/header-logo.svg' alt='org' />
    <strong>Desarrollado por Itzel</strong>
</footer>
}


export default Footer