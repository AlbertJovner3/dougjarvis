import { useState, useEffect } from "react";
import { FiPlus, FiMinus } from 'react-icons/fi';
import {
  Container,
  Wrap,
  Dropdown,
  AboutH1,
  AboutP
} from '../Elements';
import { db } from "../firebase-config";
import {
  collection,
  getDocs
} from "firebase/firestore";

function App() {

  const [users, setUsers] = useState([]);
  
 
  useEffect(() => {
    const usersCollectionRef = collection(db, "doug_about");
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const [clicked, setClicked] = useState(false);
  
  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <Container>
      
      {users.map((user, index) => {
        return (
          <>
            <Wrap onClick={() => toggle(index)} key={index}>
                    <AboutH1>{user.name}</AboutH1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {clicked === index ? (
            <Dropdown>
            <AboutP>{user.product}</AboutP>
            <AboutP>{user.product1}</AboutP>
            <AboutP>{user.product2}</AboutP>
            <AboutP>{user.product3}</AboutP>
            </Dropdown>
            ) : null}
          </>
        );
      })}
   </Container>
  );
}

export default App;
