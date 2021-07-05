import React, { useState, useMemo, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function App() {
  const [senha, setSenha] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    document.title = `${senha}`
  });

  const buttonSenha = useMemo(() => {
    if (senha.length >= 10) {
      return false
    } else {
      return true
    }
  }, [senha])

  const buttonEmail = useMemo(() => {
    if (email.length >= 1) {
      return false
    } else {
      return true
    }
  }, [email])

  return (
    <div>
      <div>
        <TextField
          value={senha}
          onChange={(e) => { setSenha(e.target.value) }}
        />
        <TextField
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div>
        <Button color="primary" disabled={buttonSenha}>senha</Button>
        <Button color="primary" disabled={buttonEmail}>email</Button>
      </div>
    </div>
  )
}
