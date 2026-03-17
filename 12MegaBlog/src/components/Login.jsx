import React , {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login as authLogin } from '../features/authSlice'
import {Button, Input ,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const login = async (data) => {
        setError('')
        try {
          const session =  await authService.login(data) //try authenticating the user with the provided data (email and password)
            if(session) {
                const userData = await authService.getCurrentUser()  //if authentication is successful, retrieve the current user's data using the getCurrentUser method of the authService instance
            if(userData) dispatch(authLogin(userData))  //if user data is successfully retrieved, dispatch the authLogin action with the user data to update the authentication state in the Redux store
                navigate('/')              //navigate to the home page after successful login
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
      <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(login)} //handleSubmit is a function provided by react-hook-form that wraps the login function, allowing it to handle form submission and validation. When the form is submitted, handleSubmit will validate the form data and then call the login function with the validated data if there are no errors.
      className='mt-8'>
        <div className='-space-y-5'>
          <Input
            label='Email'
            placeholder='Enter your email'
            type='email'                   //specify the input type as email to enable email-specific validation and keyboard on mobile devices

            {...register('email',{      //spread the register function from react-hook-form to connect the input field to the form state and validation,what it does is extracts the necessary values and functions from the register object and passes them as props to the Input component, allowing it to manage form state and validation for the email field
              required: true,
              validate: {    
                //matchPatern = user-defined label
               matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                'Please enter a valid email address', 
                  }
            })}  
            /> 
          <Input
          label='Password'
          placeholder='Enter your password'
          type='password'
          {...register('password'),{
            required: true,
          }}
          />
          <Button
          type='submit'
          className='w-full mt-5'
          >Sign in</Button>
        </div>
      </form>
        </div>
    </div>
  )
}

export default Login