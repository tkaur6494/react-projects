import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ButtonComponent from './Button'

export default class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clearScreen: false,
            objOperator: { "operator": '', "operand1": '', "operand2": '' },
            currentValue: ''
        }
    }




    calculate = (op1, op2, operator) => {
        op1 = parseInt(op1)
        op2 = parseInt(op2)
        switch (operator) {
            case '+':
                return op1 + op2
            case '-':
                return op1 - op2
            case '*':
                return op1 * op2
            case '/':
                if (op2 === 0) {
                    return 'Division by zero'
                }
                else {
                    return op1 / op2
                }
            default:
                return op1
        }
    }

    handleClick = (value, type) => {
        if (type === "number") {
            if (!this.state.clearScreen) {
                let operand1 = this.state.objOperator.operand1 + value;
                this.setState({
                    objOperator: { ...this.state.objOperator, "operand1": operand1 },
                    currentValue: operand1
                })

            }
            else {
                if (this.state.objOperator.operator === "=" && this.state.objOperator.operand2 === '') {
                    let operand1 = value;
                    this.setState({
                        objOperator: { ...this.state.objOperator, "operand1": operand1 },
                        currentValue: operand1,
                        clearScreen: false
                    })
                }
                else {
                    let operand2 = this.state.objOperator.operand2 + value;
                    this.setState({
                        objOperator: { ...this.state.objOperator, "operand2": operand2 },
                        currentValue: operand2
                    })
                }

            }

        }
        else if (type === "clear") {
            this.setState({
                clearScreen: false,
                currentValue: '',
                objOperator: { "operand1": '', "operand2": '', "operator": '' },

            })
        }
        else if (type === "operator" || type === "equal") {
            this.setState({
                clearScreen: true,

            }, () => {
                let result = 0;
                if (this.state.objOperator.operand2 !== '') {
                    result = this.calculate(this.state.objOperator.operand1, this.state.objOperator.operand2, this.state.objOperator.operator)
                }
                else {
                    result = parseInt(this.state.objOperator.operand1)


                }
                this.setState({
                    objOperator: { ...this.state.objOperator, "operand1": result, "operand2": '', "operator": value },
                    currentValue: result
                })

            })
        }

    }

    render() {
        return <>
            <Row>
                <Col><div style={{ height: "40px", border: "black 2px solid" }}>{this.state.currentValue}</div></Col>
            </Row>
            <Row>
                <Col className="calculator_key"><ButtonComponent value="1" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="2" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="3" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="4" type="number" onClick={this.handleClick} /></Col>
            </Row>
            <Row>
                <Col className="calculator_key"><ButtonComponent value="5" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="6" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="7" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="8" type="number" onClick={this.handleClick} /></Col>
            </Row>
            <Row>
                <Col className="calculator_key"><ButtonComponent value="9" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="0" type="number" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="AC" type="clear" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="+" type="operator" onClick={this.handleClick} /></Col>
            </Row>
            <Row>
                <Col className="calculator_key"><ButtonComponent value="-" type="operator" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="*" type="operator" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="/" type="operator" onClick={this.handleClick} /></Col>
                <Col className="calculator_key"><ButtonComponent value="=" type="equal" onClick={this.handleClick} /></Col>
            </Row>

        </>

    }
}