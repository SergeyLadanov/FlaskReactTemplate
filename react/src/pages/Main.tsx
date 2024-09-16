import React, { useEffect, useState } from 'react';
import '../scss/styles.scss';
import $ from 'jquery'

interface ITestPost {
    value1: string;
}

interface ITestGet {
    param1: string;
    param2: string;
}


function Main()
{
    let refreshIntervalId:NodeJS.Timeout;

    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        refreshIntervalId = setInterval(()=>{
            console.log("Main...")
        }, 1000);


           // Выполняем запрос на сервер при монтировании компонента
            const fetchData = async () => {
                try {
                const response = await fetch('./get_data');
                if (!response.ok) {
                    throw new Error('Ошибка при выполнении запроса');
                }
                const result: ITestGet = await response.json();
                setVal1(result.param1);
                setVal2(result.param2);
                
                } catch (error) {
                //setError(error.message);
                } finally {
                setLoading(false);
                }
            };

            fetchData();


        
        return () => {
            // код выполняется при размонтировании компонента (закрытии)
            console.log('Component unmounted');
            clearInterval(refreshIntervalId);
          };
    });


    const ButtonHandler = ()=>
    {
        let request:ITestPost = {
            value1: "Test"
        };

        $.post("./post_data", request, function(data){
            // alert("Данные успешно получены");
            var index;

        })
        // Обработчик неуспешной отправки данных
        .fail(function() {
            alert("Потеря связи с сервером");
        });
        // alert( "Handler for `click` called." );
        
     
    };

    if (loading)
        {
            return (
                <div>Загрузка данных</div>
            );
        }
    else
    {
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

                    <div className="col-md-12">
                        <p><h3>{val1}</h3></p>
                    </div>

                    <div className="col-md-12">
                        <p><h3>{val2}</h3></p>
                    </div>
                    <a href="#" className="btn btn-primary" onClick={ButtonHandler} role = "button">Click me</a>
                </div>
            );
    }
}

export default Main;