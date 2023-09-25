import { useState, useEffect } from "react";

const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    
    useEffect(()=>{
        console.log(count);
    }, [count])

    const increment = () => {
        setCount(prev => prev + 1);
    }

    return [count,increment]
}

export default useCounter;