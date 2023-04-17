import React from 'react'

const InputButton = () => {
    const triggerInput = () => {
        console.log('Triggering input')
    }
    return (
        <div>
            <input type="file" style={{ backgroundColor: "purple" }} />
        </div>
    )
}

export default InputButton
