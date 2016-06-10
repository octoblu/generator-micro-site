import React, { PropTypes } from 'react'
​
const propTypes = {}
const defaultProps = {}
​
class <%= componentName %> extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return <div><%= componentName %></div>
  }
}
​
<%= componentName %>.propTypes    = propTypes
<%= componentName %>.defaultProps = defaultProps
​
export default <%= componentName %>
