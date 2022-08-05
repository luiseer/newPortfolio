import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'

const ModalStoreF = () => {
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
                        Este projecto es una vista FrontEnd de una tienda de playeras realizado unicamente con HTML 5 y CSS 3
                    </p>
                </div>
                <div className='flex justify-center gap-3 mt-3'>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                </div>

                <div className='mt-4 flex justify-evenly gap-1 items-start'>
                    <div>
                        <a target='_blanck' href="https://github.com/luiseer/hanoi_project-master">
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a target='_blanck' href="https://store-frontend-luis.netlify.app/">
                            Netlify
                        </a>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ModalStoreF