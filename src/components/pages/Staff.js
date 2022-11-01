import { useState, useEffect } from "react";
import { FiPlus, FiMinus } from 'react-icons/fi';
import {
  Container,
  Wrap,
  Dropdown,
  AboutH1,
  AboutP,
  AboutH2
} from '../Elements';
import { db } from "../firebase-config";
import {
  collection,
  getDocs
} from "firebase/firestore";

function App() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "doug_staff");
 
  useEffect(() => {
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
                    <AboutH1>{user.title}</AboutH1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {clicked === index ? (
            <Dropdown>
            <AboutH2>{user.name}</AboutH2>
            <AboutP>{user.position}</AboutP>
            <AboutH2>{user.name1}</AboutH2>
            <AboutP>{user.position1}</AboutP>
            <AboutH2>{user.name2}</AboutH2>
            <AboutP>{user.position2}</AboutP>
            <AboutH2>{user.name3}</AboutH2>
            <AboutP>{user.position3}</AboutP>
            <AboutH2>{user.name4}</AboutH2>
            <AboutP>{user.position4}</AboutP>
            <AboutH2>{user.name5}</AboutH2>
            <AboutP>{user.position5}</AboutP>
            <AboutH2>{user.name6}</AboutH2>
            <AboutP>{user.position6}</AboutP>
            <AboutH2>{user.name7}</AboutH2>
            <AboutP>{user.position7}</AboutP>
            <AboutH2>{user.name8}</AboutH2>
            <AboutP>{user.position8}</AboutP>
            <AboutH2>{user.name9}</AboutH2>
            <AboutP>{user.position9}</AboutP>
            </Dropdown>
            ) : null}
          </>
        );
      })}
   </Container>
  );
}

export default App;
