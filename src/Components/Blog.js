import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 container'>
            <div className='d-flex  align-items-start flex-column mt-3'>
                <p className='fw-bold'>1.What is CORS?</p>
                <p className='text-start'><span className='fw-bold'>Ans:</span>Cross-origin resource sharing is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy. However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented.</p>
            </div>
            <div className='d-flex  align-items-start flex-column mt-4'>
                <p className='fw-bold'>2.Why are you using firebase? What other options do you have to implement authentication?</p>
                <p className='text-start'><span className='fw-bold'>Ans:</span>Firebase is Google's Backend-as-a-Service solution for mobile app development.The benefites of using firebase-
                    1.Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting.
                    2.Firebase was originally developed to be a realtime database, and today that is still one of its key features.
                    3.Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts.
                    4.Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality.
                </p>
                <p className='text-start'><span className='fw-bold'>Other options do you have to implement authentication-</span>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>


            </div>
            <div className='d-flex  align-items-start flex-column mt-4'>
                <p className='fw-bold'>3.How does the private route work?</p>
                <p className='text-start'><span className='fw-bold'>Ans:</span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
            </div>

            <div className='d-flex  align-items-start flex-column mt-4'>
                <p className='fw-bold'>4.What is Node? How does Node work?</p>
                <p className='text-start'><span className='fw-bold'>Ans:</span>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <p className='text-start'><span className='fw-bold'>Working of Node.js:</span> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>

        </div>
    );
};

export default Blog;