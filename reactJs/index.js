/**
 * @author Kuitos
 * @since 2019-05-16
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  ReactDOM.render(<App/>, document.getElementById('reactRoot'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('reactRoot'));
}


