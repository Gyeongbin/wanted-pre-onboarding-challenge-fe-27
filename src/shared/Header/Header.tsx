import styled from 'styled-components';
import theme from '../../app/style/theme';
import { IoPerson } from 'react-icons/io5';

const Header = () => {
  return (
    <Layout>
      <div className="title">Todo list</div>
      <div className="icon">
        <IoPerson />
      </div>
    </Layout>
  );
};

export default Header;

const Layout = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 3rem 0;
  & > .title {
    font-size: 3.6rem;
    font-weight: ${theme.font.weight.extraBold};
    margin-left: 3rem;
  }
  & > .icon {
    font-size: 3.6rem;
    margin-right: 3rem;
  }
`;
