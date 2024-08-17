import React from 'react'
import Icons from '../components/Icons';
import '../App.css'

function Home() {
    return (

        <>
        
            
            <div className="container" id="main" >
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-auto d-block " id='Details'>
                        <h1>Hello</h1><br />
                        <h3>
                            I'm <span className='text-primary '>DINESH P</span>  Java Full Stack Developer, Front end Developer. Always Learn a new thing.
                        </h3>
                        <div className='icons12'><Icons /></div>
                        <button type='button' className='btn btn-outline-primary mx-auto d-flex mt-5'> Contact Me</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 border profile" >
                        <img src="" alt="" />
                    </div>
                </div>
                <h2 className='text-center'>Here What I Do</h2>

            </div>

        </>
    )
}
export default Home;


