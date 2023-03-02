import React from 'react'



export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }




    return (
        <div className="container">
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About me and the Project</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <div className="card mb-3" style={{ border: props.mode === 'dark' ? '3px solid white' : '3px solid black' }}>
                            
                                <div className="card-body card text-center" style={{ backgroundColor: props.mode === 'dark' ? '#2b3035' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '3px solid white' : '4px solid black' }}>
                                    <h2 className="card-title">Hey, This is Vidhi!</h2>
                                    <p className="card-text">TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to lowercase and lowercase to Uppercase.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                            <div class="card mb-3" style={{ border: props.mode === 'dark' ? '3px solid white' : '3px solid black' }}>
                            
                                <div class="card-body card text-center" style={{ backgroundColor: props.mode === 'dark' ? '#2b3035' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '3px solid white' : '4px solid black' }}>     
                                    <p class="card-text"> TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="card mb-3" style={{ border: props.mode === 'dark' ? '3px solid white' : '3px solid black' }}>
                            
                            <div class="card-body card text-center" style={{ backgroundColor: props.mode === 'dark' ? '#2b3035' : 'white', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '3px solid white' : '4px solid black' }}>     
                                <p class="card-text"> This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}