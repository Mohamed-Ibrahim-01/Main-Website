import React from "react"
import PropTypes from "prop-types"
import {FormGrid, Container, TextInput, AreaInput, Submit, Title, Description} from "./styles"
import {ContainerItemGrid} from "shared"
import {InputAdornment} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"

export default function Form({children}){
    return (
        <FormGrid> {children} </FormGrid>
    )
}

Form.propTypes = {
    children: PropTypes.array.isRequired
}

Form.Container = function FormContainer({children, onSubmit}){
    return(
        <Container onSubmit={onSubmit}> {children} </Container>
    )
}

Form.Container.propTypes = {
    children: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

Form.Input = function FormInput({placeholder, icon, registerProps}){
    return(
        <ContainerItemGrid md={12} xs={12} justifyContent='space-around'>
            <TextInput
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    )
                }}
                {...registerProps}
            > 
            </TextInput>
        </ContainerItemGrid>
    )
}

Form.Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    registerProps: PropTypes.object.isRequired,
}

Form.Message = function FormMessage(){
    return(
        <ContainerItemGrid md={12} xs={12} justifyContent='space-around'>
            <AreaInput/>
        </ContainerItemGrid>
    )
}

Form.Submit = function FormSubmit(){
    return(
        <ContainerItemGrid md={12} xs={12} justifyContent='space-around'>
            <Submit endIcon={<SendIcon/>} >
                Send
            </Submit>
        </ContainerItemGrid>
    )
}

Form.Title = function FormTitle(){
    return(
        <ContainerItemGrid md={12} xs={12} justifyContent='space-around'>
            <Title>
                Contant Us
            </Title>
        </ContainerItemGrid>
    )
}

Form.Description = function FormDescription(){
    return(
        <ContainerItemGrid md={12} xs={12} justifyContent='space-around'>
            <Description>
                We are always here to help out <b> what ever way we can :)</b>
            </Description>
        </ContainerItemGrid>
    )
}
