import React, { useState } from 'react'

const useNavbar = () => {
    const [isFalse, setFalse] = useState(false)
    const Toggle = () => {
        setFalse(!isFalse)
    }
    return {Toggle, isFalse}
}

export default useNavbar