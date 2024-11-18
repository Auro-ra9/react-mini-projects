import login from "../assets/loginEntryPointPost.webp"
const Login = () => {
  
    const handleSumbission=()=>{
        
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className='flex flex-col items-center justify-center rounded-lg  space-y-4 max-w-sm p-6 w-full shadow-lg '>
        <img className="max-w-40" src={login} alt="" />
         <h1 className='text-3xl font-serif text-center'>Welocome to Aura Shop</h1>
         <h1 className='opacity-65'>Login to continue your account</h1>
         <button onClick={handleSumbission} className="bg-red-600 text-white p-2 rounded-lg"> LOGIN </button>
        <h2 className='bg-black text-white p-3 rounded-lg'>Continue with Google</h2>
        <h2 className=' border border-black p-3 rounded-lg'>Continue with Phone</h2>
        <h2 className='font-bold'>OR</h2>
        <h2 className='opacity-50'>Login with Email</h2>
        <p className='text-xs opacity-65 pt-4'>Your details are safe with us</p>
    </div>
    
    </div>
  )
}

export default Login