var React = require('react');

var Weatherform = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input className="text-center" type="text" ref="location" placeholder="Search weather by City"/>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = Weatherform;
