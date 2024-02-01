import React, { Fragment } from 'react';
import '../styles/login.css';
import students from '../images/students.JPG';

export function Login() {

    const handleRedirection = () => {
        window.location.href = '/virtualClass';
    };

    return (
        <Fragment>
            <div className='container'>
                <div className='login-form'>
                    <h1 className='login-title'>Inicio de sesión</h1>
                    <form>
                        <div>
                            <input
                                className="user"
                                type="text"
                                name="name_user"
                                placeholder="usuario o correo"
                            />
                        </div>
                        <div>
                            <input
                                className="passwordU"
                                type="password"
                                name="user_password"
                                placeholder="contraseña"
                            />
                        </div>
                        <div>
                            <label className="olvidoClave">Olvido su clave?</label>
                        </div>
                        <button type="button" onClick={handleRedirection}>Iniciar sesion</button>
                        <div>
                            <label>registrarme</label>
                        </div>
                    </form>
                </div>
                <div className='image-container'>
                        <img src={students} alt="Students" className="students-image" />
                    </div>
            </div>
        </Fragment>
    );
}