
import { useState } from 'react';
import './App.css';

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <>
    
   <div className={darkTheme === false ? 'bg-warning' : 'bg-success'}>
       <nav className="navbar navbar-light bg-dark">
          <div className="container-fluid justify-content-start">
          
           <button className="btn btn-sm btn-outline-secondary bg-primary" style={{marginLeft:"50%"}} type="button" onClick={() => setDarkTheme(previousTheme => !previousTheme)}>Change Theme</button>
           </div>
        </nav>
   

        <div className="card-parent position-relative">
            <div className="container position-relative">
                <div className="row gy-4 mt-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="card-style">
                            <div className="card-body">
                                <i className="fa-sharp fa-solid fa-house pt-5" style={{fontSize:"60px"}}></i>
                            </div>
                            <h5 className="card-title pt-3"><b>Card title</b></h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card-style">
                            <div className="card-body">
                                <i className="fa-sharp fa-solid fa-music pt-5" style={{fontSize:"60px"}}></i>
                            </div>
                            <h5 className="card-title pt-3"><b>Card title</b></h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card-style">
                            <div className="card-body">
                                <i className="fa-sharp fa-solid fa-location-dot mt-5" style={{fontSize:"60px"}}></i>
                            </div>
                            <h5 className="card-title mt-3"><b>Card title</b></h5>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card-style">
                            <div className="card-body">
                                <i className="fa-sharp fa-solid fa-download pt-5" style={{fontSize:"60px"}}></i>
                            </div>
                            <h5 className="card-title pt-3"><b>Card title</b></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  );
}

export default App;
