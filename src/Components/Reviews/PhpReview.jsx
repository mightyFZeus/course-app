import React from 'react'
import '../../Styles.css'
import {Link} from 'react-router-dom'

const PhpReview = () => {
    return (
        <div>
            <h1>PHP</h1>
            <div>
            PHP is a general-purpose scripting language geared towards web development.
            It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994.
             The PHP reference implementation is now produced by The PHP Group.
              PHP originally stood for Personal Home Page,
               but it now stands for the recursive initialism PHP: Hypertext Preprocessor.[9]

                PHP code is usually processed on a web server by a 
                PHP interpreter implemented as a module, a daemon or as a
                Common Gateway Interface (CGI) executable. On a web server,
                the result of the interpreted and executed PHP code –
                which may be any type of data, such as generated HTML or 
                binary image data – would form the whole or part of an HTTP response.
                    Various web template systems, web content management systems,
                    and web frameworks exist which can be employed to orchestrate or
                    facilitate the generation of that response. Additionally,
                    PHP can be used for many programming tasks outside of the web context,
                        such as standalone graphical applications[10] 
                and robotic drone control.[11] PHP code can also be directly executed from the command line.
            </div>
            <a target='_blank' rel="noopener noreferrer" href='https://php.net'>
                <p>See official documentaion here</p>
                
            </a>
            <Link to='/profile'>
                 <button  className='tutor-btn'> Tutor Me</button>
            </Link>
        </div>
    )
}

export default PhpReview
