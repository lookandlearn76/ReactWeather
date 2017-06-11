var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName = "Spiderman";
var message = "This is from a component!";

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);

/*onButtonClick: function (e){
  e.preventDefault();

  var nameRef = this.refs.name;
  var name = nameRef.value;
  nameRef.value = "";

  if(typeof name === "string" && name.length > 0) {

    this.setState({
      name: name,
      message: message
    });
  }
},*/
