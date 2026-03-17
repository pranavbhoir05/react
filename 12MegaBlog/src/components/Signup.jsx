import React,{useState} from 'react'
import authService  from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../features/authSlice'
import {useDispatch} from 'react-redux'
import {Button, Input, Logo} from './index'
import {useForm} from 'react-hook-form'
 

function Signup() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const create = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData) {
               const userData =  await authService.
               getCurrentUser()
               if(userData) dispatch(login(userData))
                navigate('/')
            } 
        } catch (error) {
            setError(error.message) 
        }
    }
  return (
      <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(create)}
              className='mt-8'>
                <div className='space-x-5'>
                    <Input
                    lable="Full Name"
                    placeholder= "Enter your full name"
                    {...register("name" ,{
                        required:true
                    }) }
                    />
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
                        label="password: "
                        placeholder="Enter your Password"
                        type="password"
                        {...register("password" , {
                            required:true
                        })}
                        />               
                 <Button
                          type='submit'
                          className='w-full mt-5'
                          >Create Accout
                          </Button>       
                </div>
            </form>
              
            </div>

    </div>
  )
}
export default Signup