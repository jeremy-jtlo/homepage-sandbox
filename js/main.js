// Build this file using the following line:
// browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <h1>Testing testing</h1>,
    document.getElementById('example')
);