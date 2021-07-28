import React from 'react'
import '../../Styles.css'
import {Link} from 'react-router-dom'

const TypescriptReview = () => {
    return (
        <div>
            <h1>TYPESCRIPT</h1>
            <div>
                <div>
                JavaScript and More
        TypeScript is an open-source language which builds on JavaScript,
         one of the world’s most used tools, by adding static type definitions.

        Types provide a way to describe the shape of an object, providing better documentation,
        and allowing TypeScript to validate that your code is working correctly.

        Writing types can be optional in TypeScript, because type inference allows you
        to get a lot of power without writing additional code.
        All valid JavaScript code is also TypeScript code. You might get type-checking
        errors, but that won't stop you
        from running the resulting JavaScript. While you can go for stricter behavior,
        that means you're still in control.

        TypeScript code is transformed into JavaScript code via the TypeScript compiler
        or Babel. This JavaScript is clean, simple code which runs anywhere JavaScript 
        runs: In a browser, on Node.JS or in your apps.


                </div>
            </div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.typescriptlang.org'>
                <p>See the official documentaion here</p>
                
            </a>
            <Link to='/profile'>
                 <button  className='tutor-btn'> Tutor Me</button>
            </Link>
        </div>
    )
}

export default TypescriptReview
