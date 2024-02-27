// import { useDispatch } from "react-redux";

export const LogInForm = () => {
    // const dispatch = useDispatch()
        const handleSubmit = (e) => {
            e.preventDefault()
            const form = e.currentTarget;
            form.reset()
    
        }
        return <>
        <form onSubmit={handleSubmit}> 
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