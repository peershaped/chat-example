import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to="/detail">Login</Link>
      </p>
    </>
  )
}
export default  Home;