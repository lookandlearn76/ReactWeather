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
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to this ReactJS weather application</p>
      <p>Here are some of the tools I used to create it:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - the Javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Open Weather Map to search for weather data by city name
        </li>
        <li>
          <a href="http://foundation.zurb.com/" target="_blank">Foundation</a> - for the styling framework
        </li>
        <li>
          <a href="https://webpack.js.org/" target="_blank">Webpack</a> - for npm module bundling during production
        </li>
        <li>
          <a href="https://github.com/" target="_blank">Git and Github </a> for version-control
        </li>
        <li>
          <a href="https://www.heroku.com/" target="_blank">Heroku</a> - a cloud-based PaaS server
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
