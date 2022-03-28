import React from 'react'

function Home() {
  return (
    <div className='hero'>
        <div class="card bg-dark text-white border-0">
        <img src="./assets/bg3.jpg" class="card-img" alt="Background" height='550px'/>
        <div class="card-img-overlay d-flex flex-column  justify-content-center align-items-center text-center">
            <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
            <p class="card-text lead fs-2">CHECK OUT THE COLLECTIONS</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home