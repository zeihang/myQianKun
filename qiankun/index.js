import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import Framework from './Framework';
// import axios from 'axios'

// axios.get('http://localhost:3000/api/sliders').then(res => console.log(res))

function render({ appContent, loading }) {
    const container = document.getElementById('container');
    ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

// let appContent = (<h1>123</h1>)

// render({appContent: appContent, loading: false})

function genActiveRule(routerPrefix) {
    return (location) => location.pathname.startsWith(routerPrefix);
}

registerMicroApps(
    [
        { name: 'reactJs', entry: '//localhost:8088', render, activeRule: genActiveRule('/reactJs') },
        { name: 'reactapp', entry: '//localhost:9090', render, activeRule: genActiveRule('/reactapp') },
        { name: 'reactTs', entry: '//localhost:8080', render, activeRule: genActiveRule('/reactTs') },
    ],
    {
        beforeLoad: [async app => {
            console.log('before load', app);
        }],
        beforeMount: [async app => {
            console.log('before mount', app);
        }],
        afterMount: [async app => {
            console.log('before mount', app);
        }],
        afterUnmount: [async app => {
            console.log('after unload', app);
        }],
    },
);

start({ prefetch: true, jsSandbox: true });


let str = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>main framework</title>
</head>
<body>
<main id="container"></main>
<script src="./index.js"></script>
</body>
</html>`
// let str = '<script"=name"script%>'

let ss = str.match(/<script src=\"(.+?)\"><\/script>/g, function () {
    return arguments
});

