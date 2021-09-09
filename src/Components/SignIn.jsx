import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'


        


const SignIn = () => {
    const history  =  useHistory()

    const validation = 
        Yup.object({
            email: Yup.string().email('Invalid email address').required('Email address is Required'),
            password:Yup.string()
            .required('password is required')
        })
        

    
   
    return (
     <div className=' h-screen ' >
          <div className=''>
             
          <Formik
          className=''
     
        initialValues={{
            email:'',
            password:''
        }}

        validationSchema={validation}

        onSubmit={(values)=>{
            const userInfo = JSON.parse( localStorage.getItem('user'))
            console.log(userInfo.email)

        if ( values.password === userInfo.password && values.email === userInfo.email) {
            history.push('/home')
            
        }else{
            console.log('nonsense')
        }
            

        }}
    
    >
        { formik =>(
           <form onSubmit={formik.handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl' >
               <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                           Email
                    </label>
                      <input type='text' placeholder='Email'  {...formik.getFieldProps('email')} className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************"' />
                      {formik.touched.email && formik.errors.email ? (
                          <p className='text-red-700 font-light text-xs mb-4'>{formik.errors.email}</p> ): null
                      }
                  </div>
               <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                      <input type='text' placeholder=' password' {...formik.getFieldProps('password')} className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************"' />
                      {formik.touched.password && formik.errors.password ? (
                          <p className='text-red-700 font-light text-xs mb-4'>{formik.errors.password}</p> ): null
                      }
                </div>
               <div className=' flex justify-between'>
               <button className='py-2 px-4 bg-blue-500 shadow-md text-white mt-4 rounded font-bold'>Sign in</button>
               <p className='text-blue-500 font-black mt-6'>Forgot password?</p>
               </div>
           </form>
        )}

   </Formik>
          </div>
     </div>
    )
}

export default SignIn
