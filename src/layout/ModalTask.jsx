import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const ModalTask = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className='font-bold text-center'>
                        Uptask
                    </h2>
                </div>
                <div className='mt-3'>
                    <p>
                        En este proyecto se uso el MERN stack para crear una aplicación que permita a los usuarios crear tareas y asignarlas a otros usuarios.
                    </p>
                </div>
                <div className='flex justify-center gap-3 mt-3'>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faNode} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className='text-4xl'>
                        <FontAwesomeIcon icon={faDatabase} />
                    </div>
                </div>

                <div className='mt-4 flex flex-col gap-1 items-start'>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://github.com/luiseer/todoList_Frontend">
                            GitHub FrontEnd
                        </a>
                    </div>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://github.com/luiseer/TodoList">
                            GitHub BackEnd
                        </a>

                    </div>
                    <div>
                        <a target='_blanck' className='hover:border-b-2' href="https://taskluis.netlify.app/">
                            Netlify
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalTask