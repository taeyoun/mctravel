import React, { Component } from 'react';
import logo from './logo.svg';
import headerimage from './header-image.png';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SearchFlightInfo from './SearchFlightInfo';
import MenuLink from './MenuLink';
import SearchResult from './SearchResult';
import DropDown from './DropDownType';
import moment from 'moment';
import MomentInput from 'react-moment-input';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';

var dropdownOptionsCompReason = [
    {   value: 1, text: 'Flight Disruption', url: 'http://One.com'},
    {   value: 2, text: 'Flight Delay', url: 'http://One.com'},
    {   value: 3, text: 'Flight Cancellation', url: 'http://One.com'},
    {   value: 4, text: 'Denied Boarding', url: 'http://One.com'},
    {   value: 5, text: 'Luggage Disruption', url: 'http://One.com'}
];

var dropdownOptionsCompType = [
    {   value: 1, text: 'Restricted location', url: 'http://One.com'},
    {   value: 2, text: 'Allow anywhere', url: 'http://One.com'},
];

var dropdownOptionsCompTypeLocation = [
    {   value: 1, text: 'Restaurant', url: 'http://One.com'},
    {   value: 2, text: 'Hotel', url: 'http://One.com'},
];




class App extends Component {
  render() {
    return (
      <div className="App">


            <MenuLink/>
            <header className="App-header">
            <SearchFlightInfo></SearchFlightInfo>
                <Grid>
                    <Row className="comp-reason">
                        <Col xs={12} md={12}>
                        <div className="comp-reason">
                            <DropDown title="Select compensation reason" dropdownOptions={dropdownOptionsCompReason} />
                        </div>
                        </Col>
                    </Row>
                    <Row className="comp-detail">
                        <Col xs={12} md={3}>
                            <DropDown title="Restriction" dropdownOptions={dropdownOptionsCompType} />
                        </Col>
                        <Col xs={12} md={3}>
                            <DropDown title="Location" dropdownOptions={dropdownOptionsCompTypeLocation} />
                        </Col>
                        <Col xs={12} md={3}>
                            <FormGroup >
                                <InputGroup>
                                    <InputGroup.Addon>$</InputGroup.Addon>
                                    <FormControl type="text" />
                                    <InputGroup.Addon>.00</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={3}>
                            <FormGroup >
                                <InputGroup className="compStartDate">
                                    <InputGroup.Addon>Start:</InputGroup.Addon>
                            {/*<span>START:</span>*/}
                                    <MomentInput
                                        max={moment().add(5,'days')}
                                        min={moment()}
                                        format="YYYY-MM-DD HH:mm"
                                        options={true}
                                        readOnly={false}
                                        icon={false} />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup >
                                <InputGroup className="compEndDate">
                                    <InputGroup.Addon>End:</InputGroup.Addon>
                                    <MomentInput
                                        max={moment().add(365,'days')}
                                        min={moment()}
                                        format="YYYY-MM-DD HH:mm"
                                        options={true}
                                        readOnly={false}
                                        icon={false}
                                        onChange={(date)=> {console.log(date)}} />
                                </InputGroup>
                            </FormGroup>


                        </Col>

                    </Row>
                </Grid>



        </header>
      </div>
    );
  }
}

export default App;
