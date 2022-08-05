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
                        Las torres de Hanoi son un juego de movimiento de discos en una o más torres de una misma altura.
                        este juego se realiza con una cantidad de discos determinada, y se mueven de una torre a otra,
                        dejando un disco en la torre de destino.
                        <span className='font-bold'>
                            Este ejercicio este resulta usando recursividad
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
                        <a target='_blanck' href="https://github.com/luiseer/hanoi_project-master">
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a target='_blanck' href="https://hanoitowersluisestrada.netlify.app/">
                            Netlify
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalHanoi