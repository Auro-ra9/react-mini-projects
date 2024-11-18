import { useState } from "react"
const BackgroundChanger = () => {
    const [color,setColor]= useState('cyan');
    
  return (
        <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button  onClick={()=>setColor('pink')} className='outline-none px-4 py-1 rounded-full shadow-lg font-bold font-mono'  style={{backgroundColor:'pink'}}>Pink</button>
                    <button  onClick={()=>setColor('green')}  className='outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold font-mono' style={{backgroundColor:'green'}}>Green</button>
                    <button  onClick={()=>setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg font-bold font-mono ' style={{backgroundColor:'yellow'}}>Yellow</button>
                    <button  onClick={()=>setColor('olive')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold font-mono' style={{backgroundColor:'olive'}}>Olive</button>
                    <button  onClick={()=>setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg font-bold font-mono' style={{backgroundColor:'orange'}}>Orange</button>
                    <button  onClick={()=>setColor('purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold font-mono' style={{backgroundColor:'purple'}}>Purple</button>
                    <button  onClick={()=>setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg font-bold font-mono'  style={{backgroundColor:'red'}}>Red</button>
                    <button onClick={()=>setColor('blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold font-mono' style={{backgroundColor:'blue'}}>Blue</button>
                    <button onClick={()=>setColor('black')} className='outline-none px-4 py-1 rounded-full shadow-lg text-white font-bold font-mono' style={{backgroundColor:'black'}}>Black</button>
                    <button onClick={()=>setColor('skyblue')} className='outline-none px-4 py-1 rounded-full shadow-lg  font-bold font-mono' style={{backgroundColor:'skyblue'}}>Sky Blue</button>
                </div>
            </div>
        </div>
  )
}

export default BackgroundChanger


