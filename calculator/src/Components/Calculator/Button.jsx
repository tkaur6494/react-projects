import React from "react"
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

export default class ButtonComponent extends React.Component {


    static propTypes = {
        value: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func
    }

    render() {
        return <div className="d-grid gap-2"><Button variant="outline-secondary" onClick={() => { this.props.onClick(this.props.value, this.props.type) }}>{this.props.value}</Button></div>
    }


}
