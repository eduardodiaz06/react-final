import './Home.css'

const Home = () => {
    return <div className='fondo'>

        <div className='container'>
            <h2 className='htitle'>Herramientas E.D</h2>
            <div className="row row-cols-2">
                <div className="col"><br />
                </div>
                <div></div>
                <div className="col"><h4 className='peAbout'>Empresa Virtual creada para un proyecto de estudio en Coderhouse.</h4>
                </div>
                <div className="col"><img className='about' src='https://www.cadena88.com/sites/default/files/content/nodes/consejos-y-trucos/image/77940/caracteristicas-de-un-taladro.jpg' alt='' /></div>
                <div className="col">
                    <div className="row row-cols-2">
                        <div className="col"><img className='about tnail' src='https://aco.cl/imagenes/marcas/3008042528_neo.jpg' alt='imagen marca neo' /></div>
                        <div className="col"><img className='about tnail' src='https://aco.cl/imagenes/marcas/3008042915_GLADIATOR.jpg' alt='imagen marca gladiator' /></div>
                        <div className="col"><img className='about tnail' src='https://aco.cl/imagenes/marcas/torin.jpg' alt='imagen marca torin' /></div>
                        <div className="col"><img className='about tnail' src='https://aco.cl/imagenes/marcas/2203044929_jonneswayweb.png' alt='imagen marca jonnesway' /></div>
                    </div>
                </div>

                <div className="col">
                    <h4 className='peAbout'> Nuestras Marcas
                        <ul>
                            <li>NEO</li>
                            <li>Gladiator PRO</li>
                            <li>Torin</li>
                            <li>Jonnesway</li>
                            <li>Y muchas mas...</li>

                        </ul>
                    </h4>
                </div>
            </div>
        </div>
    </div>
}
export default Home