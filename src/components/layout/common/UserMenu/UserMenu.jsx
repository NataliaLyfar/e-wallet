import {
  Menu,
  UserInfo,
  UserAvatar,
  UserName,
  LogOutButton,
  LogOutIcon,
  LogOutText,
} from './UserMenu.styled';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from '../../../../redux/auth/authSelectors';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state)

  return (
    <Menu>
      <UserInfo>
        <UserAvatar>
          <Avatar
            color={'#4A56E2'}
            name={userName}
            size="30"
            textMarginRatio={0.1}
            textSizeRatio={2}
            round={true}
            maxInitials={2}
          />
        </UserAvatar>
        <UserName>{userName}</UserName>
      </UserInfo>
      <LogOutButton type="button" onClick={toggleModal}>
        <LogOutIcon />
        <LogOutText>Exit</LogOutText>
      </LogOutButton>

      {isModalOpen && (
        <ModalLogout
          onClose={toggleModal}
        />
      )}
    </Menu>
  );
};
