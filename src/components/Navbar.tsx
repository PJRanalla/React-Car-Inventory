import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-black p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Car Inventory</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white border rounded border-white hover:text-blue-400 hover:border-blue-400'>

                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 m-5 bg-blue-400 justify-center rounded-full '>
                        <div>
                            <Link to='/' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-white hover:text-black mx-8'>
                                Home
                            </Link>
                        </div>

                    </Button>
                    <Button className='p-3 m-5 bg-blue-400 justify-center rounded-full'>
                        <div>
                            <Link to='/about' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-white hover:text-black mx-8'>
                                About
                            </Link>
                        </div>

                    </Button>

                    <Button className="p-3 m-5 bg-blue-400 justify-center rounded-full">
                        <div>
                            <Link to='/contact' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-white hover:text-black mx-8'>
                                Contact
                            </Link>
                        </div>
                    </Button>

                    <Button className='p-3 m-5 bg-blue-400 justify-center rounded-full'>
                        <div>
                            <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-white hover:text-black mx-8'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ?

                        <Button className='p-3 m-5 bg-blue-400 justify-center rounded-full'>
                            <div>
                                <Link to="/" onClick={ () => {signInOnClick()}} className="flex place-items-center mt-4
                                lg:inline-block lg:mt-0 text-white hover:text-black mx-8">
                                    Login
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-5 bg-blue-400 justify-center rounded-full'>
                        <div>
                            <Link to="/" onClick={ () => {signOutOnClick()}} className="flex place-items-center mt-4
                            lg:inline-block lg:mt-0 text-white hover:text-black mx-8">
                                Sign Out
                            </Link>
                        </div>
                    </Button>
                    }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )
}

export default Navbar
