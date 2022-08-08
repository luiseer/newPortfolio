import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faIdeal, faJs,  faReact } from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const ModalHanoi = () => {
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
                        Las torres de Hanoi: El objetivo del juego es trasladar la pila a otro de los 
                        postes siguiendo ciertas reglas, como que no se puede colocar un disco más grande 
                        encima de un disco más pequeño. 
                        <span className='font-bold'>
                            Este ejercicio esta resuelto usando recursividad.
                        </span>
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
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faGamepad} />
                    </div>
                </div>

                <div className='mt-4 flex justify-evenly gap-1 items-start'>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://github.com/luiseer/hanoi_project-master">
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://hanoitowersluisestrada.netlify.app/">
                            Netlify
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalHanoi