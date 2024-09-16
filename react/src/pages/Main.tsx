import React, { useEffect } from 'react';
import '../scss/styles.scss';




function Main()
{
    let refreshIntervalId:NodeJS.Timeout;

    useEffect(() => {
        
        refreshIntervalId = setInterval(()=>{
            console.log("Main...")
        }, 1000);

        return () => {
            // код выполняется при размонтировании компонента (закрытии)
            console.log('Component unmounted');
            clearInterval(refreshIntervalId);
          };
    });


    return (
        <div className="row">
            {/* <div className="row" style={{textAlign: "center"}} id = "loading">
                <p>
                <div className="col-md-12">
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                </p>
            </div> */}

            <div className="col-md-12">
                <p><h3>Start page</h3></p>
            </div>
            <a href="#" className="btn btn-primary" role = "button">Click me</a>
        </div>
    );
}

export default Main;