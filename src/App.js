import React, { useState } from "react";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Usercard from "./Usercard";
import Centerpage from "./Centerpage";
import { userData } from "./userData";
import "./App.css";
import "./index.css";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setModalShow(true);
  };

  const handleSearch = (city, work) => {
    let filtered = userData;

    if (city) {
      filtered = filtered.filter((user) =>
        user.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (work) {
      filtered = filtered.filter((user) =>
        user.desc.toLowerCase().includes(work.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
    setSearchPerformed(true);
  };

  return (
    <div>
      <div className="Navbar">
        <NavigationBar />
      </div>
      <div className="search">
        <Search handleSearch={handleSearch} />
      </div>
      <div className="Contain">
        {searchPerformed && filteredUsers.length === 0 ? (
          <div className="not-found">
            <p>Results not found !!</p>
          </div>
        ) : (
          filteredUsers.map((user, index) => (
            <Usercard key={index} user={user} onShowModal={handleShowModal} />
          ))
        )}
      </div>
      <div className="Footer">
        <Footer />
      </div>
      {selectedUser && (
        <Centerpage
          show={modalShow}
          onHide={() => setModalShow(false)}
          name={selectedUser.name}
          city={selectedUser.city}
          desc={selectedUser.desc}
          exp={selectedUser.exp}
          profile={selectedUser.profile}
          email={selectedUser.email}
          phone={selectedUser.phone}
        />
      )}
    </div>
  );
}

export default App;
