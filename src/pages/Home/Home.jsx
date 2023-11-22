import {
  Title,
  HomeUserGroup,
  Wrap,
  UnderTitle,
  HomeLink,
  Section,
  HomeEdit,
  HomePhoneIcon,
  HomeContactList,
} from './Home.styled';

import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../Redux/selectors';

export default function Home() {
  const { isLoaggedIn } = useSelector(selectIsLoading);

  return (
    <Section>
      <Title>Wellcome to you PhoneBook</Title>

      <Wrap>
        {' '}
        <HomeEdit /> <HomePhoneIcon />
        <HomeUserGroup />
        <HomeContactList />
      </Wrap>

      {!isLoaggedIn ? (
        <UnderTitle>
          Please
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          Go to the tab
          <HomeLink to="/contacts">Contacts</HomeLink>
          and manage your contacts
        </UnderTitle>
      )}
    </Section>
  );
}
