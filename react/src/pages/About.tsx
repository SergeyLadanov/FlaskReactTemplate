import React, { useEffect, useState } from 'react';
import '../scss/styles.scss';
import $ from 'jquery'; // Импортируем jQuery


function About()
{
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        
           // Выполняем запрос на сервер при монтировании компонента
           $.ajax({
            url: './get_data',
            method: 'GET',
            dataType: 'json',
            success: (response) => {
                setVal1(response['param1']);
                setVal2(response['param2']);
            },
            error: (jqXHR, textStatus, errorThrown) => {
              //setError(`Ошибка: ${textStatus}, ${errorThrown}`);
            },
            complete: () => {
              setLoading(false);
            }
          });


        return () => {
            // код выполняется при размонтировании компонента (закрытии)
            console.log('Component unmounted');
          };
    });

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
                    <div className="col-md-12">
                        <p><h3>{val1}</h3></p>
                    </div>

                    <div className="col-md-12">
                        <p><h3>{val2}</h3></p>
                    </div>

                    <div className="col-md-12">
                        <p><h3>About page jhbjh</h3></p>
                    </div>
                    <a href="#" className="btn btn-secondary" role = "button">Click me</a>
                </div>
            );
    }
}

export default About;