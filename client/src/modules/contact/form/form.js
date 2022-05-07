import React from 'react'
import {FormGrid, Container, TextInput, AreaInput, Submit, Title, Description} from './styles'
import {ContainerItemGrid} from 'shared'
import {InputAdornment} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

export default function Form({children, ...restProps}){
    return (
        <FormGrid {...restProps}> {children} </FormGrid>
    )
}

Form.Container = function FormContainer({children, ...restProps}){
    return(
        <Container {...restProps}> {children} </Container>
    )
}



Form.Input = function FormInput({children, placeholder, icon, ...restProps}){
    return(
        <ContainerItemGrid md={12} xs={12} justify='space-around'>
            <TextInput
                placeholder={placeholder}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                  )
                }}
                {...restProps}
            > 
                {children} 
            </TextInput>
        </ContainerItemGrid>
    )
}

Form.Message = function FormMessage({...restProps}){
    return(
        <ContainerItemGrid md={12} xs={12} justify='space-around'>
            <AreaInput {...restProps}/>
        </ContainerItemGrid>
    )
}

Form.Submit = function FormSubmit({children, ...restprops}){
    return(
        <ContainerItemGrid md={12} xs={12} justify='space-around'>
            <Submit {...restprops} endIcon= {<SendIcon/>} >
                Send
            </Submit>
        </ContainerItemGrid>
    )
}

Form.Title = function FormTitle({...restProps}){
    return(
        <ContainerItemGrid md={12} xs={12} justify='space-around'>
            <Title {...restProps}>
                Contant Us
            </Title>
        </ContainerItemGrid>
    )
}

Form.Description = function FormDescription({...restProps}){
    return(
        <ContainerItemGrid md={12} xs={12} justify='space-around'>
            <Description {...restProps}>
                We are always here to help out <b> what ever way we can :)</b>
            </Description>
        </ContainerItemGrid>
    )
}
