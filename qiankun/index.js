import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import Framework from './Framework';

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
        { name: 'reactJs', entry: '//localhost:7100', render, activeRule: genActiveRule('/reactJs') },
        { name: 'reactTs', entry: '//localhost:7101', render, activeRule: genActiveRule('/reactTs') },
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