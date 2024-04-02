// App.js
// import React from 'react';
// import {useNavigate,} from 'react-router-dom';
import RouterView from "./router"
import { Suspense } from "react";
export default function App() {

    return (
        <div>
            <Suspense>
                <RouterView />
            </Suspense>
        </div>
    );
}