import { React, useState ,useEffect} from "react";
import SearchSection from "../../../components/SearchSection/SearchSection";
// import { constructorsData } from "../../../userData";
import ProviderCard from "../../../components/ProviderCard/ProviderCard";
import './Construction.css'
import ServiceTitle from "../../../components/ServiceTitle/ServiceTitle";
import HomeNavBar from "../../../components/HomeNavBar/HomeNavBar";
import Footer from "../../../components/Footer/Footer";
import CenterPage from "../CenterPage/CenterPage";
import construction_img from '../../../assets/construction_work.jpg';
import axios from "axios";

const Construction = () => {
  
  const [modalShow, setModalShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/quickmatch_api/constructionprovider.php"
      );
      const data = response.data;
      console.log("raw data: ", data);
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setModalShow(true);
  };

  const handleSearch = (city, work) => {
    let filtered = users;

    if (city) {
      filtered = filtered.filter((user) =>
        user.address.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (work) {
      filtered = filtered.filter((user) =>
        user.description.toLowerCase().includes(work.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
    setSearchPerformed(true);
  };

  return (
    <div className="construction">
      <HomeNavBar />
       <ServiceTitle title="Construction"/> 
      <SearchSection handleSearch={handleSearch} img={construction_img} />
      <div className="body-section">
        {searchPerformed && filteredUsers.length === 0 ? (
          <div className="not-found">
            <p>Results not found !!</p>
          </div>
        ) : (
          filteredUsers.map((user, index) => (
            <ProviderCard
              key={index}
              user={user}
              onShowModal={handleShowModal}
            />
          ))
        )}
      </div>
      <Footer />
      {selectedUser && (
        <CenterPage
          show={modalShow}
          onHide={() => setModalShow(false)}
          name={selectedUser.name}
          city={selectedUser.address}
          service_name={selectedUser.service_name}
          exp={selectedUser.description}
          profile={selectedUser.profile_image}
          email={selectedUser.email}
          phone={selectedUser.phone}
          provider_id={selectedUser.provider_id}
          service_category_id={selectedUser.service_category_id}
        />
      )}
    </div>
  );
};

export default Construction;
