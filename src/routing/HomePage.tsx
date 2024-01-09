import { useNavigate } from 'react-router-dom';

// homepage and clickable link to user page

const HomePage = () => {
  const history = useNavigate();

  const handleClick = () => {
    history('/users');
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleClick}>users</button>
    </div>
  );
};

export default HomePage;
