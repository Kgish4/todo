import React, { FC, memo, MouseEvent, MouseEventHandler } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import HighlightText from "../HighlightText/HighlightText";
import "./userCard.scss";

interface IUserCard {
  name: string;
  username: string;
  email: string;
  id: number;
  address: string;
  company: string;
  onClick: (address: string, company: string) => void;
}

const UserCard: FC<IUserCard> = ({
  name,
  username,
  email,
  id,
  address,
  company,
  onClick,
}) => {
  const { removeUser } = useActions();
  const { filter } = useTypedSelector((state) => state.users);
  const handleRemoveClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    removeUser(id);
  };
  return (
    <>
      <li className="user-card" onClick={() => onClick(address, company)}>
        <div className="user-card_name">
          <HighlightText text={name} filter={filter} />
        </div>
        <div className="user-card_username">
          <HighlightText text={username} filter={filter} />
        </div>
        <div className="user-card_email">
          <HighlightText text={email} filter={filter} />
        </div>
        <div onClick={handleRemoveClick} className="user-card_remove">
          Remove
        </div>
      </li>
    </>
  );
};

export default memo(UserCard);
