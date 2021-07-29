import React from 'react'
import { useForm } from 'react-hook-form'
import Form from './form'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function FormContainer() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <Form>
            <Form.Title/>
            <Form.Description/>
            <Form.Container onSubmit={handleSubmit(onSubmit)}>
                <Form.Input {...register('name')} icon={<AccountCircle/>} placeholder="Name" />
                <Form.Input {...register('email')} icon={<MailOutlineIcon/>} placeholder="Mail" red  />
                <Form.Message/>
                <Form.Submit />
            </Form.Container>
        </Form>
    )
}

