import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Formik } from 'formik'
import * as Yup from 'yup'
import { passwordRegex } from '../utils/regex'

const SignUp = () => {
    const history = useHistory()
  
    

    const validation = Yup.object({
        firstName:Yup.string()
        .required('Required'),
        lastName:Yup.string()
        .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password:Yup.string()
        .required('Required')
        .min(6, 'Enter 6 or more characters')
        .matches(passwordRegex, 'Enter a special character'),
        confirmPassword:Yup.string()
        .test('password-match', 'password must match', function(value){
            return this.parent.password === value
        })

    })

   

    return (
        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:''
            }}

            validationSchema={validation}

           
            onSubmit ={(values)=>{
               const userInfo={
                   name:values.firstName + values.lastName,
                   email:values.email,
                   password:values.password

               }
                localStorage.setItem('user', JSON.stringify(userInfo))
                history.push('/')



            }}


        
        
        >
          {formik=>(
             <div className=''>
                  <form onSubmit={formik.handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl'>
                  <div>
                      <label htmlFor='firstName' className='block text-gray-700 text-sm font-bold mb-2"'>First Name</label>
                      <input type='text'  className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" '  {...formik.getFieldProps('firstName')} />
                      {formik.touched.firstName && formik.errors.firstName ? (
                          <div className='text-red-700 font-light text-xs mb-4'>{formik.errors.firstName}</div> ): null
                      }
                  </div>

                  <div>
                  <label htmlFor='lastName' className='block text-gray-700 text-sm font-bold mb-2"'>Last Name</label>
                      <input type='text' className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" '  {...formik.getFieldProps('lastName')} />
                      {formik.touched.lastName && formik.errors.lastName ? (
                          <div className='text-red-700 font-light text-xs mb-4'>{formik.errors.lastName}</div> ): null
                      }
                  </div>

                  <div>
                  <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2"'>Email</label>
                      <input type='text' className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ' {...formik.getFieldProps('email')} />
                      {formik.touched.email && formik.errors.email ? (
                          <div className='text-red-700 font-light text-xs mb-4'>{formik.errors.email}</div> ): null
                      }
                  </div>

                  <div>
                  <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2"'>Password</label>
                      <input type='password' className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" '  {...formik.getFieldProps('password')} />
                      {formik.touched.password && formik.errors.password ? (
                          <div className='text-red-700 font-light text-xs mb-4'>{formik.errors.password}</div> ): null
                      }
                  </div>

                  <div>
                  <label htmlFor='confirmPassword' className='block text-gray-700 text-sm font-bold mb-2"'>Confirm Password</label>
                      <input type='password' className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" '  {...formik.getFieldProps('confirmPassword')} />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                          <div className='text-red-700 font-light text-xs mb-4'>{formik.errors.confirmPassword}</div> ): null
                      }
                  </div>
                <div className='flex justify-between'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <div claassName='flex flex-col'>
                    <p className='font-bold text-blue-500'>Have an account Already? </p>
                    {/* <Link to='/'>
                      <p className=' float-right font-bold text-primary-hover'>SIgn In</p>
                    </Link> */}
                  </div>

                </div>

              </form>
             </div>
          )}

        </Formik>
     
    )
}

export default SignUp
