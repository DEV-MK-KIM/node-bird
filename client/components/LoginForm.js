import React, {useCallback } from 'react'
import { Input, Button, Form } from 'antd';
import { useInput } from '../pages/signup'
import Link from 'next/link';


const LoginForm = () => {
    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('')
    const onSubmitForm = useCallback((e) =>{
        e.preventDefault()
        console.log({
            id, password
        })
    }, [id, password])

    return (
            <Form onSubmit = {onSubmitForm}>
            <div>
              <label htmlFor="user-id">ID</label>
              <br />
              <Input name="user-id" required value={id} onChange={onChangeId} />
            </div>
            <div>
              <label htmlFor="user-password">Password</label>
              <br />
              <Input name="user-password" required  value={password} type="password" onChange={onChangePassword}/>
            </div>

            <div style={{ marginTop: 10 }}>
              <Button type="primary" htmlType="submit" loading={false}>
                Login
              </Button>
              <Button>
                <Link href="/signup">
                  <a>SignUp</a>
                </Link>
              </Button>
            </div>
          </Form>            
    )
}

export default LoginForm
