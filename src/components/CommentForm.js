import React from "react"
import styled from "styled-components"

const CommentSt = styled.div`
  display: grid;
  grid-template-columns: calc(40px + 1rem) 1fr;
  align-items: center;
`

const AvatarSt = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormSt = styled.form`
  display: grid;

  input[type="text"] {
    border: 0;
    padding: 0 0.5rem 0.5rem;
    background-color: white;
    border-bottom: 2px solid blue;
    width: 100%;
  }
`

const FormActionsSt = styled.div`
  margin-left: auto;
  align-self: flex-end;
`

const CommentForm = () => {
  return (
    <CommentSt>
      <AvatarSt>
        <span>MR</span>
      </AvatarSt>
      <FormSt>
        <input type="text" name="" id="" placeholder="Add a public comment" />
        <FormActionsSt>
          <button type="button">Cancel</button>
          <button type="submit">Comment</button>
        </FormActionsSt>
      </FormSt>
    </CommentSt>
  )
}

export default CommentForm
