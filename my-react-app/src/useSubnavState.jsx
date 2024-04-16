import React,{useState} from 'react'

function useSubnavState(initialState) {

    const [isSubnavVisible, setIsSubnavVisible] = useState(initialState);

    const toggleSubnav = () => {
        setIsSubnavVisible(!isSubnavVisible);
    };

    return [isSubnavVisible, toggleSubnav];

}

export default useSubnavState
