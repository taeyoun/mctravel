import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/Label';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Radio from 'react-bootstrap/lib/Radio';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup'
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
 import DatePicker from "react-datepicker";
//import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { useState } from 'react';



//CSS files
import "react-datepicker/dist/react-datepicker.css";
import 'rc-time-picker/assets/index.css';


class Example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}



class FieldGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fno: '',
            name:'',
            date:'',
            time:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        switch (event.target.id) {
            case 'formInlineFlightNo':
                this.setState({
                    fno: event.target.value
                });
                break;
            case 'formInlineName':
                this.setState({
                    name: event.target.value
                });
                break;
        }

    }

    handleSubmit(event) {
        alert('FlightNo: ' + this.state.fno + '  Passenger Name: ' + this.state.name);
        event.preventDefault();
    }

    render () {
        return(
            <Grid>
                <Row className="show-grid">
                    <Form inline >
                        <FormGroup controlId="formInlineFlightNo">
                        <InputGroup>
                        <FormControl type="text" fno={this.state.fno} onChange={this.handleChange} />
                        <InputGroup.Addon>
                        <Glyphicon glyph="plane" />
                        </InputGroup.Addon>
                        </InputGroup>
                        </FormGroup>

                        <FormGroup controlId="formInlineName">
                        <InputGroup>
                        <FormControl type="text" placeholder="Jane Doe" name={this.state.name} onChange={this.handleChange}/>
                        <InputGroup.Addon>
                        <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                        </InputGroup>
                        </FormGroup>

                        <FormGroup controlId="formInlineDate">
                        <InputGroup>
                        <InputGroup.Addon>
                        <Example /><Glyphicon glyph="calendar" />
                        </InputGroup.Addon>
                        </InputGroup>
                        </FormGroup>

                        <FormGroup controlId="formInlineTime">
                        <InputGroup.Addon>
                        <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} /><Glyphicon glyph="time" />
                        </InputGroup.Addon>
                        </FormGroup>

                        <Button id="flightInlineSearch" onClick={this.handleSubmit}><Glyphicon glyph="search" /></Button>
                    </Form>
                </Row>
            </Grid>
            );
    };

}


export default FieldGroup;