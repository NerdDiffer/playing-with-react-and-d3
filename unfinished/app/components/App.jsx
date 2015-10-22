var React = require('react');
var d3    = require('d3');

var App = React.createClass({
  getInitialState: function() {
    return { n: 100 }
  },

  render: function() {
    return (
      <div>
        <h1>Orders of Growth</h1>
        { /*-- Chart goes here --*/ }
        <div className="controls">
          <h2>n = {this.state.n}</h2>
          <input type="number" minimum="1" value={this.state.n} onChange={this.changeN} />
        </div>
      </div>
    )
  },

  changeN: function(event) {
    this.setState({ n: event.target.value });
  },

});

var settings = {
  width:         500,
  height :       300,
  padding:       30,
  numDataPoints: 50,
  maxRange: function() {
    return Math.random() * 1000
  }
};

module.exports = App;
