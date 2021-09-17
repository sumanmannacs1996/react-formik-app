import React from 'react'

function TextError({children}) {
    return (
        <div className='form-error'>
            {children}
        </div>
    )
}

export default TextError
