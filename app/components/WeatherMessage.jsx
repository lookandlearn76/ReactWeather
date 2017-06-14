var React = require('react');

//var WeatherMessage = React.createClass({
//  render: function () {
//    var {temp, location} = this.props;
//    return (
//      <h3>It's {temp} in {location}.</h3>
//    );
//  }
//});

//this below can be further refactored by using the ES6 destructuring for temp and location within the () above
var WeatherMessage = (props) => {
  var {temp, location} = props;

  return (
    <h3 className="text-center">It's {temp} in {location}.</h3>
  );
}
module.exports = WeatherMessage;
