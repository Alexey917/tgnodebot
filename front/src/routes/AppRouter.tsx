import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: 'form',
    element: <Form />,
  },
]);
