
import { Outlet, Link } from "react-router-dom";
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
const Home = () => {
  const instance = axios.create({
    baseURL: 'https://api.github.com/repos/tannerlinsley/react-query'
  });
  const fetchGroups = (): Promise<Group[]> =>
  instance.get().then((response) => response.data)

  
  

  const { isLoading, error, data, isFetching } = useQuery({queryKey: ['repoData'],
  queryFn: fetchGroups})

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
   };
   
   export default Home;