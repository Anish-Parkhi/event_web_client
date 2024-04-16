import { Link } from "react-router-dom"
function NotAuthorized() {
  return (
    <div>
        <div>Sign in first to use the services</div>
        <Link to='/user/signin'>Sign In</Link>
    </div>
  )
}

export default NotAuthorized