var React = require('react');
var d3    = require('d3');
var ScatterPlot = require('./Scatterplot.jsx');
var Orders = require('./Orders.js');

var App = React.createClass({
  getInitialState: function() {
    return { n: 100 }
  },

  render: function() {
    var currentN = this.state.n;
    return (
      <div>
        <h1>Orders of Growth</h1>
        <ScatterPlot points={this.state.points} n={currentN} {...settings} />
        <div className="controls">
          <h2>n = { currentN } </h2>
          <input type="number" minimum="1" value={currentN} onChange={this.changeN} />
        </div>
      </div>
    )
  },

  componentWillMount: function() {
    this.setPoints();
  },

  changeN: function(event) {
    this.setState({ n: event.target.value });
  },

  // Generate an array of points from 0 through `n` as input to the callback
  // Each value passed to callback (`fn`) is separated by `n / numDataPoints`.
  genPoints: function(fn) {
    var points = [];
    var n = this.state.n;
    var numDataPoints = settings.numDataPoints;
    var i = numDataPoints - 1;
    var step = Math.floor(n / numDataPoints);
    var x = n;

    while (i >= 0) {
      points[i] = fn(x);
      i--;
      x -= step;
    }

    return points;
  },

  setPoints: function() {
    this.setState({
      points: {
        // TODO: uncomment these as you figure out computational limits & `n`
        //factorial    : this.genPoints(Orders.factorial),
        //exponential  : this.genPoints(Orders.exponential),
        //cubic        : this.genPoints(Orders.cubic),
        //quadratic    : this.genPoints(Orders.quadratic),
        //linearithmic : this.genPoints(Orders.linearithmic),
        linear       : this.genPoints(Orders.linear),
        //logarithmic  : this.genPoints(Orders.logarithmic),
        //constant     : this.genPoints(Orders.constant)
      }
    });
  }

});

var settings = {
  width         : 500,
  height        : 300,
  padding       : 30,
  numDataPoints : 50,
};

module.exports = App;
