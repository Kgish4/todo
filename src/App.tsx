import React, { FC, useCallback, useEffect, useState } from "react";
import Modal, { IModal } from "./components/Modal/Modal";
import Search from "./components/Search/Search";
import UserCard from "./components/UserCard/UserCard";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import searchFragment from "./utils/highlightText";

const App: FC = () => {
  const [modalData, setModalData] = useState<Omit<IModal, "onCancel"> | null>(
    null
  );
  const { fetchUsers } = useActions();
  const { usersList, filter } = useTypedSelector((state) => state.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = useCallback(
    (address: string, company: string): void => {
      setModalData({
        address,
        company,
      } as IModal);
    },
    [usersList]
  );

  return (
    <div className="app">
      {modalData && (
        <Modal onCancel={() => setModalData(null)} {...modalData} />
      )}
      <Search />
      <ul className="cards-container">
        {usersList.map((user) => {
          const userName = searchFragment(user.username, filter);
          const name = searchFragment(user.name, filter);
          const email = searchFragment(user.email, filter);
          if (filter && !userName && !name && !email) {
            return null;
          }
          return (
            <UserCard
              key={user.id}
              id={user.id}
              username={user.username}
              name={user.name}
              email={user.email}
              address={`${user.address.city} ${user.address.street} ${user.address.suite}`}
              company={user.company.name}
              onClick={openModal}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
