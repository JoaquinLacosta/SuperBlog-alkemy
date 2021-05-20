import styled from "styled-components"

export const FormContainer = styled.form`
  min-width: 280px;
  max-width: 768px;
  display: flex;
  padding: 20px;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
`

export const InputContainer = styled.div`
  width: 100%;
  heigth: 50%;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 15px;
  margin: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid gray;
  box-shadow: 0px 4px 8px #bbbfb0;
  transition: .2s;
  &:focus {
    border-bottom: 2px solid rgb(61, 52, 139);
  }
`
export const TextArea = styled.textarea`
  padding: 15px;
  margin: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid gray;
  box-shadow: 0px 4px 8px #bbbfb0;
  transition: .2s;
  resize: vertical;
  max-height: 200px;
  &:focus {
    border-bottom: 2px solid rgb(61, 52, 139);
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  heigth: 50%;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  padding: 8px;
  background-color: #57CC99;
  border-radius: 5px;
  border: none;
  margin: 5px;
  color: black;
  font-weight: 700;
  box-shadow: 4px 4px 8px #bbbfb0
`