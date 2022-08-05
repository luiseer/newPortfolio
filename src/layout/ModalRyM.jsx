import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'


const ModalRyM = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='font-bold text-center'>
                        Ryck y Morty
                    </h2>
                </div>
                <div className='mt-3'>
                    <p>
                        Este proyecto se realizan peticiones random a la API de Ryck y Morty para obtener información de los personajes, con la posibilidad de buscar por planeta.
                    </p>
                </div>
                <div className='flex justify-center gap-3 mt-3'>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                </div>

                <div className='mt-4 flex justify-evenly gap-1 items-start'>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://github.com/luiseer/entregable-3">
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://rymluisestrada.netlify.app/">
                            Netlify
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalRyM