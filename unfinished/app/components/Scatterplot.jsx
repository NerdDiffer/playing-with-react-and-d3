var React  = require('react');
var XYAxis = require('./XYAxis');
var Lines  = require('./Lines');

var Scatterplot = React.createClass({
  render: function() {
    var props = this.props;
    var xScale = this.getXScale(props);
    var yScale = this.getYScale(props);
    return (
      <svg width={props.width} height={props.height}>
        <XYAxis
          xScale={xScale}
          yScale={yScale}
          {...props} />
        <Lines
          xScale={xScale}
          yScale={yScale}
          {...props} />
      </svg>
    );
  },

  getXScale: function(props) {
    var xMax = props.n;
    return d3.scale.log()
      .domain([0, xMax])
      .range([props.padding, props.width - props.padding * 2]);
  },

  getYScale: function(props) {
    var yMax = this.getMax(props.points);
    return d3.scale.log()
      .domain([0, yMax])
      .range([props.height - props.padding, props.padding]);
  },

  // get maximum value from all arrays in the `points` object
  getMax: function(points) {
    var orders = Object.keys(points);
    var n = orders.length;

    if (n === 0) { return; }

    var max = d3.max(points[orders[0]]);

    if (n > 1) {
      for (var i = 1; i < n; i++) {
        var localMax = d3.max(points[orders[i]]);
        if (localMax > max) { max = localMax; }
      }
    }

    return max;
  }

});

module.exports = Scatterplot;
