var React = require('react');
var uuid  = require('node-uuid');
var Orders = require('./Orders.js');

var Lines = React.createClass({

  render: function() {
    // be sure to change the hard-coded `linear` property once you get the ball
    // rolling by rendering a line.
    //return <g>{ this.props.points.linear.map(this.renderLines) }</g>
    // TODO: just make a straight line
    return <g>> { /*a line of some kind*/ } </g>
  },

  renderLines: function(val, ind, arr) {
    // TODO: from `App`, pass along a function which will give you a value of
    // `n` based on the array index.
    var props = {
      x: function(d) { return (ind + 1) * 2; }, // the current value of `n`....
      y: function(d) { return val; },
      key: uuid.v4()
    };

    return <line {...props}></line>
  }

});

module.exports = Lines;
