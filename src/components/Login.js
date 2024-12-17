import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, setIsLoading } from '../redux/authSlice';
import { CircularProgress, Stack } from '@mui/material';



const Login = () => {
  const [login, setlogin] = useState(true)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [fullName, setfullName] = useState('')


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)

  const onchangeHandeler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitHandaler = async (e) => {
    e.preventDefault()
    dispatch(setIsLoading(true))
    try {
      if (login) {
        const res = await axios.post("http://localhost:4000/api/v1/user/login", data,
          {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true
          },
        )
        if (res.data.success) {
          dispatch(setAuth(res.data.userData))
          toast.success(res.data.message)
          navigate('/browse')
        }

      } else {
        const registerData = { ...data, fullName }
        const res = await axios.post("http://localhost:4000/api/v1/user/register", registerData)
        if (res.data.success) {
          toast.success(res.data.message)
          setData({
            email: '',
            password: ''
          })
          setfullName('')
          setlogin(true)
        }
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something was wrong")
      console.log(error);

    } finally {
      dispatch(setIsLoading(false))
    }
  }


  return (
    <div className='relative w-full h-screen'>
      <img
        src='https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg'
        alt='netflix-bg'
        className='w-full h-full object-cover absolute top-0 left-0'
      />

      <div className='absolute top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center'>
        <form onSubmit={submitHandaler} className='bg-black bg-opacity-70 px-20 py-8 rounded-lg flex flex-col'>
          <h1 className='text-white text-3xl font-bold pb-8'>{login ? 'Login' : 'Sign In'}</h1>

          {
            login ? '' : <input
              type="text"
              name='fullName'
              onChange={(e) => setfullName(e.target.value)}
              value={fullName}
              placeholder='Enter your name'
              className='border p-2 mb-4 w-72 border-white outline-none bg-black bg-opacity-80 text-white rounded-md'
            />
          }
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={onchangeHandeler}
            className="border p-2 mb-4 w-72 border-white outline-none bg-black bg-opacity-80 text-white rounded-md"
          />
          <input
            type="password"
            name='password'
            onChange={onchangeHandeler}
            value={data.password}
            placeholder='Enter your password'
            className='border p-2 mb-4 w-72 border-white outline-none bg-black bg-opacity-80 text-white rounded-md'
          />

          <button disabled={isLoading} className='bg-red-600 text-white py-2 px-4 rounded w-full flex justify-center items-center'>
            {isLoading ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              login ? "Login" : "Sign Up"
            )}
          </button>


          <div className='flex gap-1'>
            {
              login ? <>
                <p className='text-white pt-8'>New to Netflix?</p>
                <Link onClick={() => setlogin(false)} className='text-white pt-8 pr-3'>Sign up now.</Link>
              </>
                :
                <>
                  <p className='text-white pt-8'>You have an account?</p>
                  <Link onClick={() => setlogin(true)} className='text-white pt-8 pr-3'>Login</Link>
                </>

            }

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
