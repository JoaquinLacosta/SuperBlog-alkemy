import styled from "styled-components"

export const HomeContainer = styled.main`
  width: 100%;
  background-color: #eceae9;
  padding: 20px;
  text-align: center;
  min-height: 100vh;
`

export const FormContainer = styled.form`
  min-width: 280px;
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
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 4px 4px 8px #bbbfb0;
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