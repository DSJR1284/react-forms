import React from 'react';
import ReactDOM from 'react-dom';
import DisplayData from './components/DisplayData';
import Form from './components/Form'
import ParentComponent from './components/ParentComponet';

ReactDOM.render(
  <div>
    <Form />
    <ParentComponent />
    <DisplayData />
  </div>,
  document.getElementById('root')
);