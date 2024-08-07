import { useCallback, useEffect, useRef, useState } from 'react'
import './index.css'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassord] = useState("")



  //useRef hook
  const passwordRef = useRef(null)




    const passwordGeneraroe = useCallback(()=>{

          let pass= ""
          let str = 
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*"

      for(let i=1; i<= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char)
  }

  setPassord(pass)

    }, [length, numberAllowed, charAllowed, setPassord])

    const copyPasswordToClickpboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999)
      window.navigator.clipboard.writeText(password)
    },[password])


    useEffect(()=>{
      passwordGeneraroe()
    },[length, numberAllowed, charAllowed, passwordGeneraroe])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <h1 className='text-white text-center my-3'> Password Generator</h1>
          <input type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-slate-50 mb-4'
            placeholder='password'
            readOnly 
            ref={passwordRef}
            />
          <button
          onClick={copyPasswordToClickpboard} 
          id='btn-p'
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
          <div className='flex text-sm gap-x-2'>
            <div className='flex item-center gap-x-1'>
              <input type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
                
              />
              <label> Length: {length}</label>

              <div className='flex item-center gap-x-1'>
                <input type="checkbox"
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={() => {
                    setNumberallowed((prev) => !prev);
                  }} />

                <label htmlFor='numberInput'> Numbers</label>

              </div>
              <div className='flex item-center gap-x-1'>
                <input type="checkbox"
                  defaultChecked={charAllowed}
                  id='characterInput'
                  onChange={() => {
                    setCharAllowed((prev) => !prev)
                  }} />

                <label htmlFor='characterInput'> Characters</label>

              </div>

            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default App
