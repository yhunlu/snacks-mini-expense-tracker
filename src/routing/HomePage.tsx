import { Link, useNavigate } from 'react-router-dom';

// homepage and clickable link to user page

const HomePage = () => {
  // throw new Error('Something failed');

  const history = useNavigate();

  const handleClick = () => {
    history('/users');
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleClick}>users</button>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default HomePage;
