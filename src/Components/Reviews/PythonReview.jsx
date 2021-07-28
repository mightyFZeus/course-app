import React from 'react'

const PythonReview = () => {
    return (
       <> 
        <h1>Python</h1>
            <div className='main-container'>
                <div className='container'>
                    
                    <h4>Declarative</h4>
                    <p>
                    
                    Python is an easy to learn, powerful programming language.
                     It has efficient high-level data structures and a simple but
                      effective approach to object-oriented programming. Python’s 
                      elegant syntax and dynamic typing, together with its interpreted nature
                     make it an ideal language for scripting and rapid application development
                      in many areas on most platforms.
                    </p>
                </div>
                <div className='container'>
          
                    <p>
                    Python is an interpreted high-level general-purpose programming language.
                     Python's design philosophy emphasizes code readability 
                     with its notable use of significant indentation.
                     Rather than having all of its functionality built into its core, Python was designed to be highly extensible (with modules). This compact modularity has
                      made it particularly popular as a means of adding programmable interfaces to existing applications. 
                    </p>
                </div>
                <div className='container'>
                
                    <p>
                    Python is dynamically-typed and garbage-collected.
                     It supports multiple programming paradigms, including structured (particularly, procedural),
                      object-oriented and functional programmin
                     Python is often described as a "batteries included" 
                     language due to its comprehensive standard library.[32]
                    </p>
                </div>
            </div>
            <a target='_blank' rel="noopener noreferrer" href='https://www.python.org/'>
                <p>See the official documentaion here</p>
                 
            </a>
            <button className='tutor-btn'> Tutor Me</button>
         </>
            
       
    )
}

export default PythonReview
