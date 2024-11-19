import React from 'react'

const Header = ({ name }) => {
    return (
        <div className='bg-blue-700 text-white text-xl flex justify-center items-center w-full h-[60px]'>
            {name || 'Agent'}
        </div>
    )
}

export default Header