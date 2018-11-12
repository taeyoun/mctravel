import React, { Component } from 'react';
import Dropdown from "./Dropdown";


// const dropdownOptions = [
//     { value: 'fdis', label: 'Flight Disruption' },
//     { value: 'fdel', label: 'Flight Delay', className: toggleOptionsClassName && 'my-custom-class' },
//     { value: 'fcan', label: 'Flight Cancellation' },
//     { value: 'dboard', label: 'Denied Boarding' },
//     { value: 'ldis', label: 'Luggage Disruption' },
//
// ];

class ObjectArrayExample extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: { value: 'selectrcomp', label: this.props.title }
        };
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option) {
        console.log('You selected ', option.label);
        this.setState({selected: option});
    }

    render () {
        const { toggleClassName, togglePlaholderClassName, toggleMenuClassName, toggleOptionsClassName } = this.state;

        // const options = [
        //     { value: 'fdis', label: 'Flight Disruption' },
        //     { value: 'fdel', label: 'Flight Delay', className: toggleOptionsClassName && 'my-custom-class' },
        //     { value: 'fcan', label: 'Flight Cancellation' },
        //     { value: 'dboard', label: 'Denied Boarding' },
        //     { value: 'ldis', label: 'Luggage Disruption' },
        //
        // ];
        var options = this.props.dropdownOptions.map(function(dropdownProps, i){
            return <li {...dropdownProps} key={i}>{dropdownProps.text}</li>
        });

        const defaultOption = this.state.selected;
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;

        return (
            <section>
                {/*<h3>Compensation reason</h3>*/}

                <Dropdown
                    options={options}
                    onChange={this._onSelect}
                    value={defaultOption}
                    placeholder="Select an option"
                    className={ toggleClassName ? 'my-custom-class' : '' }
                    placeholderClassName={ togglePlaholderClassName ? 'my-custom-class' : '' }
                    menuClassName={ toggleMenuClassName ? 'my-custom-class' : '' }
                />
            </section>
        )
    }
}

export default ObjectArrayExample;