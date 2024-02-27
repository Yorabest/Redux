import { useDispatch } from "react-redux";

import { Sigining } from "../../redux/auth/operatons";

export const SignInForm = () => {
const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        dispatch(Sigining({
            name: form.elements.name.name.value,
            email: form.elements.name.email.value,
            password: form.elements.name.password.value
        }))
        form.reset()

    }
    return <>
    <form onSubmit={handleSubmit}> 
    <label>
        Name
        <input type="text" name='username' />
        </label>
        <label>
        Email
        <input type="email" name='email'/>
        </label>
        <label>
        Email
        <input type="password" name='password'/>
        </label>
        <button type="submit">Submit</button>
    </form>
    </>
}