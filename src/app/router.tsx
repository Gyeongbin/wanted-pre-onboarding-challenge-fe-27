import Signin from '../pages/auth/ui/Signin';
import TodoList from '../pages/todos/ui/TodoList';

export const Router = [
  {
    path: '/',
    element: <TodoList />,
    children: [
      {
        path: 'auth',
        element: <Signin />,
      },
    ],
  },
];
