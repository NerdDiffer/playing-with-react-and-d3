# Notes from tutorial

### parts of a React component

* `render`: "the heart" of a component, which is a function describes the
  purpose & the look, it actually returns markup.
* `setState`: "the brain" of a component. When called, it triggers a re-render
  of the component on itself & the child components. It effectively turns a UI
  component into a "state machine". To retrieve the application state, call
  `this.state.keyPassedInObject`.
* `componentWillMount`: a React lifecycle function, called before initially
  rendering the component

### Diffing, performance & the need for parent elements

React performs quickly because it has a 'diffing' algorithm, which compares the
differences between a virtual DOM and the real DOM.

Each React component must have one parent element. React components which are
siblings only without parents, cannot be rendered. They must have a parent
element, hence the `<div>` which wraps the markup inside of the `render`
function. NOTE: the parent element does not have to be a `<div>`, it can be any
HTML element.

A unique identifier of some kind is needed on each component in React. In this
tutorial, we need to explicitly set a unique value for the data points, because
their structure is the identical. I think, for non-identical structures, React
will set an ID automatically, but not sure about this...

### The spread operator `...`

The `...` spread operator is syntatic sugar, which spreads out attributes &
values of an object.

##### svg stuff

d3 has special methods for creating SVG elements & binding data, but in this
tutorial we let React do the binding.

SVG is a *little* bit like XML, in that there are weird looking tags, such as
`<g>` in the tutorial. That particular element is like a `<div>`.

Remember, for components to render in React, they must be wrapped in a parent
element, `<g>` in this case.

### D3 & scales

D3 converts data & the math in converting it to a displayable format. If your
chart is of a limited width (say 200 px), D3 will convert a data point value,
(say 982), and plot it on a graph for you...

* `linear` scale: for linear scales where the interval of tick marks on an axis
  increases at a linear rate...
  * there is also `ordinal`, `logarithmic`, `square root`, and more
* `domain`: like in Math class in school. sets the range of possible data values
  in the x-axis.
* `range`: tell D3 the y-values in a chart.
* `max`: set highest value in data set

#### D3 & Axis

Let D3 handle the tick marks of the axis lines. Though React is fast & we want
to dynamically generate the axis, to implement an axis in React would take a
*lot* of work.

Though D3 is not as quick on performance rendering, there are only 2 axes to
render at once. So the performance trade-off is small every time, and D3 is
great at getting the numbers right for the scales & tick marks on the axes.
