import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebase.config';
import { AdminContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const LogInForm = () => {
    const [newUser, setNewUser] = useState({});
    const [isFetchData, setIsFetchData] = useState(false);
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const HandleSubmit = event => {
        event.preventDefault();
        setIsFetchData(true);
        firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
            .then((userCredential) => {
                const user = userCredential.user;

                fetch(`http://localhost:5100/check-admin/${user.email}`)
                    .then(res => res.json())
                    .then(result => {
                        setIsFetchData(false);
                        setIsAdmin(result);
                        setNewUser({
                            email: user.email
                        });
                        history.replace(from);
                    })
                    .catch(() => {
                        setIsAdmin(false);
                        setIsFetchData(false);
                    })
            })
            .catch((error) => {
                alert(error.message);
                setIsFetchData(false);
            });
    }

    return (
        <section className='flex justify-center mt-5'>
            <div className='bg-white w-full md:w-3/4 lg:w-2/5 rounded-xl p-3 text-center shadow-lg'>
                <h3 className='uppercase text-3xl mb-5'>Log in</h3>

                {
                    isFetchData
                        ? <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div class="animate-pulse flex space-x-4">
                                <div class="rounded-full bg-blue-400 h-12 w-12"></div>
                                <div class="flex-1 space-y-4 py-1">
                                    <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 bg-blue-400 rounded"></div>
                                        <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <form onSubmit={HandleSubmit} >
                            <input type="text" id="email" placeholder='Email' required className='border-b-2 border-gray-300 w-full p-3 pb-1 mb-3' />
                            <input type="password" id="password" placeholder='Password' required className='border-b-2 border-gray-300 w-full p-3 pb-1 mb-3' />
                            <button type="submit" className='bg-gray-600 text-white px-5 py-2 rounded'>Log In</button>
                        </form>
                }

            </div>
        </section>
    );
};

export default LogInForm;