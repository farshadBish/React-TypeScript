import { useCallback, useEffect, useMemo , useState } from "react"





const UseMemoTest = () => {
    const getArray = () => {
        for (let i = 0; i < 1000000000; i++) {
            
        }
        return 2;
    }

    const fib = useCallback((n :number) :number => {
        return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
    },[])

    const [userNumber, setUserNumber] = useState<number | string>('')
    const [random,setRandom] = useState<string>('')

    const fibNumber = useMemo(()=>fib(Number(userNumber)),[userNumber,fib])
    useEffect(()=>{
        getArray();
        console.log("it did something");
        
    },[getArray])

  return (
    <main>
        <label>Fibonacci Sequence:</label>
        <input type="number" name="" value={userNumber} placeholder="Position" onChange={(e)=>setUserNumber(e.target.value)} />
        <p>number : {fibNumber || "--"}</p>
        <input type="text" name="random" value={random} onChange={(e)=>setRandom(e.target.value)} />
    </main>
  )
}

export default UseMemoTest