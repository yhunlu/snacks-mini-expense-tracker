import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetail = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  
  console.log(params, searchParams.toString(), searchParams.get('name'));

  return <div>
    <h1>User Detail Page</h1>
    <h2>{params?.id}</h2>
    <h2>{searchParams?.get('name')}</h2>

    <pre>
      {JSON.stringify(location, null, 2)}
    </pre>
  </div>;
};

export default UserDetail;
