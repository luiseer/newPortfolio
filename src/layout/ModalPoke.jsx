import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const ModalPoke = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='font-bold text-center'>
                        Pokedex
                    </h2>
                </div>
                <div className='mt-3'>
                    <p>
                        Este proyecto es se realizan diferentes peticiones a la API de
                        <a href="https://pokeapi.co/" target='_blanck' className='font-bold mr-1 ml-1'>API de Pokemon</a>
                        para obtener información de los pokemones.
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
                        <a target='_blanck' className='hover:border-b-2' href="https://github.com/luiseer/entregable5">
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://pokedexluismex.netlify.app/#/poke">
                            Netlify
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPoke