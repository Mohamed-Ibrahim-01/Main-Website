//import {FormGrid, Container, TextInput, AreaInput} from './styles'
import styled from "styled-components"
import {ContainerItemGrid} from "shared"
import {TextField, Button,TextareaAutosize} from "@material-ui/core"


export const FormGrid = styled(ContainerItemGrid).attrs({ xs:12, md:6})`
  &&{
    padding: 20px;
  }
`
export const Container = styled(ContainerItemGrid).attrs({xs:12, md:12})`
  align-content: space-between
`
export const TextInput = styled(TextField)`
  && {
    width: 60%;
    margin-bottom: 5vh;
  }
  && .MuiInputBase-input{
    font-size: 1.2em;
    padding-bottom: 15px;
    color:#000c26;
  }
  && .MuiInput-underline:after {
      border-bottom-color: #DB2A32;
  }
  && .MuiSvgIcon-root{
    font-size: 2.3em;
    color:#000c26;
    padding-bottom: 12px;
  }
` 

export const Submit = styled(Button).attrs({
    variant: "contained",
})`
  &&, &&:focus, &&:hover{
    background-color:#000c26;
    color:#DB2A32;
    font-weight: 600;
    font-size: 1.2em;
  }
`

export const AreaInput = styled(TextareaAutosize).attrs({
    minRows:5,
    maxRows:8,
    placeholder:"Write your message" ,
})`
  resize: none;
  font-size: 1em;
  outline-color: #DB2A32;
  border-radius: 6px;
  margin-bottom: 5vh;
  padding: 5px;
  width: 58%;
}
`
export const Title = styled.h1`
   font-size: 3em;
   color: #000b26;
   margin-bottom: 0px;

`
export const Description = styled.p`
  text-align: center;
  color: #000E33;
  font-size: 1.3em;
  margin-bottom: 8vh;
  font-weight: 500;
  & b{
    color: #DB2A32;
  }
`

