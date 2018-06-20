import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from './field';
import { updateForm } from './redux/actions';

/**
 * Form Component
 * @param props: must contain fields {Object[]}, form_name {string} and submitFunction {func}
 * @returns HTML Form containing all fields according to passed in props
 */
export class Form extends Component {

    constructor(props) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
    }

    /**
     * Format the fields from the props and return an array of Field objects; if fields are undefined, provide an
     * error or loading message
     * @returns {*} HTML element or elements to display
     */
    formatFields() {
        const { fields, formName } = this.props;
        if (fields === undefined) {
            return (
                <div className="container-fluid">
                    We are loading, please wait your turn.
                </div>
            );
        }
        else {
            return fields.map((field, index) => (
                <Field key={formName + '_field_' + index } updateValue={this.updateValue} {...field} />
            ));
        }
    }

    /**
     * Update the value of the altered field in the state using this.props.updateForm()
     * @param event: element change event that is triggered when a field is changed
     */
    updateValue(event) {
        const { id, value } = event.target;
        const { formName, updateForm } = this.props;
        updateForm(formName, id, value);
    }

    render() {
        const fieldDivs = this.formatFields();
        return (
            <form>
                <h3>{this.props.formName.toUpperCase().split('_').join(' ')}</h3>
                {fieldDivs}
                <button onClick={(e) => {e.preventDefault(); this.props.submitFunction(e)}} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateForm: (formName, fieldName, fieldValue) => {
            dispatch(updateForm(formName, fieldName, fieldValue))
        },

    }
};

const ConnectedForm = connect(
    null,
    mapDispatchToProps
)(Form);

export default ConnectedForm;