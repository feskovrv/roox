import React, { Component } from "react";
import './UserPage.scss';
import FormField from '../FormField/FormField.js'
import Button from "../Button/Button.js";

// { title, fields, readOnly, edit, id}
class UserPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: {
                'Name': this.props.fields.Name,
                'UserName': this.props.fields.UserName,
                'E-mail': this.props.fields['E-mail'],
                'Street': this.props.fields.Street,
                'City': this.props.fields.City,
                'Zip Code': this.props.fields['Zip Code'],
                'Phone': this.props.fields.Phone,
                'Website': this.props.fields.Website
            },
            comment: ''
        }
        this.addToStateFormData = this.addToStateFormData.bind(this)
    }
    
    addToStateFormData(e, text){
        this.setState((state) =>{
            let newFormData = state.formData;
            newFormData[text] = e.target.value;
            return{
                formData: newFormData
            }
        })
    }

    renderUserFields(){
        return Object.keys(this.state.formData).map( key => {
            return (
                <FormField
                    text={key}
                    value={this.props.fields[key]}
                    readOnly={this.props.readOnly}
                    key={key}
                    toFormData = {this.addToStateFormData}
                />
            )
        })
    }

    render(){
        
        return(
            <div className="userPage">
                <span className="userPage__title">{this.props.title}</span>
                <Button 
                    label="Редактировать"
                    func={()=>{
                        console.log('EDIT');
                        this.props.edit(this.props.id, false)
                    }}
                />
                <div className="userPage__fields">
                    {this.renderUserFields()}
                    <label className="userPage__commentField">
                        <span>Comment</span>
                        <textarea cols="30" rows="5" defaultValue={this.state.comment} onChange={(e)=>{this.setState(()=>{
                            return {
                                comment: e.target.value
                            }
                        })}}></textarea>
                    </label>
                </div>
                <Button
                    label="Отправить"
                    func={()=> {
                        let status = true;
                        Object.keys(this.state.formData).forEach(key => {
                            if (this.state.formData[key].length === 0){
                                console.log("Заполните все поля")
                                status = false
                            }
                        })
                        status && console.log(JSON.stringify({...this.state.formData, comment: this.state.comment }))
                    }}
                    disabled={this.props.readOnly}
                />
            </div>
        )
    }
}

export default UserPage;