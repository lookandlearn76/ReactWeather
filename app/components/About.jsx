var React = require('react');

//var About = React.createClass({
//  render: function(){
//    return(
//      <h3>About Component</h3>
//    );
//  }
//});

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to this ReactJS weather application</p>
      <p>Here are some of the tools I used to create it:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the Javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name
        </li>
        <li>
          <a href="http://foundation.zurb.com/" target="_blank">Foundation</a> - I used Foundation for the styling framework
        </li>
        <li>
          <a href="https://webpack.js.org/" target="_blank">Webpack</a> - I used Webpack for npm module bundling during production
        </li>
        <li>
          <a href="https://github.com/" target="_blank">Git and Github </a> were used for version-control
        </li>
        <li>
          <a href="https://www.heroku.com/" target="_blank">Heroku</a> - This app is uses a cloud-based Heroku PaaS server
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
