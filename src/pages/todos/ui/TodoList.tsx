import styled from 'styled-components';
import Header from '../../../shared/Header/Header';

const TodoList = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default TodoList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
