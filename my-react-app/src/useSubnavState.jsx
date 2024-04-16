import React from 'react'

function useSubnavState(initialState) {

    const [isSubnavVisible, setIsSubnavVisible] = useState(initialState);

    const toggleSubnav = () => {
        setIsSubnavVisible(!isSubnavVisible);
    };

    return (
        <div>
        
        </div>
    )
}

export default useSubnavState
