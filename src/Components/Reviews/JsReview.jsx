import React from 'react'
import '../../Styles.css'
import {Link} from 'react-router-dom'

const JsReview = () => {
    return (
        <div>
            <h1>JAVASCRIPT</h1>
            <div>
            JavaScript  often abbreviated as JS, is a programming language that
             conforms to the ECMAScript specification.[10] JavaScript is high-level,
              often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, 
              dynamic typing, prototype-based object-orientation, and first-class functions.

                Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web
                Over 97% of websites use it client-side for web page behavior,[12] often incorporating
                third-party libraries.[13] All major web browsers have a dedicated JavaScript engine
                to execute the code on the user's device.

                As a multi-paradigm language, JavaScript supports event-driven,
                functional, and imperative programming styles. It has application programming interfaces (APIs) 
                for working with text, dates, regular expressions, standard data structures, and the Document Object
                Model (DOM).
            </div>
            <a target='_blank' rel="noopener noreferrer" href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'>
                <p>See MDN documentaion here</p>
                
            </a>
            <Link to='/profile'>
                 <button  className='tutor-btn'> Tutor Me</button>
            </Link>
        </div>
    )
}

export default JsReview
