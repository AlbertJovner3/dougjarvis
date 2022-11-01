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
  
 
  useEffect(() => {
    const usersCollectionRef = collection(db, "products_lamb");
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
            <AboutP>{user.description}</AboutP>
            <AboutP>{user.price}</AboutP>
            <AboutH2>{user.name1}</AboutH2>
            <AboutP>{user.description1}</AboutP>
            <AboutP>{user.price1}</AboutP>
            <AboutH2>{user.name2}</AboutH2>
            <AboutP>{user.description2}</AboutP>
            <AboutP>{user.price2}</AboutP>
            <AboutH2>{user.name3}</AboutH2>
            <AboutP>{user.description3}</AboutP>
            <AboutP>{user.price3}</AboutP>
            <AboutH2>{user.name4}</AboutH2>
            <AboutP>{user.description4}</AboutP>
            <AboutP>{user.price4}</AboutP>
            <AboutH2>{user.name5}</AboutH2>
            <AboutP>{user.description5}</AboutP>
            <AboutP>{user.price5}</AboutP>
            <AboutH2>{user.name6}</AboutH2>
            <AboutP>{user.description6}</AboutP>
            <AboutP>{user.price6}</AboutP>
            <AboutH2>{user.name7}</AboutH2>
            <AboutP>{user.description7}</AboutP>
            <AboutP>{user.price7}</AboutP>
            <AboutH2>{user.name8}</AboutH2>
            <AboutP>{user.description8}</AboutP>
            <AboutP>{user.price8}</AboutP>
            <AboutH2>{user.name9}</AboutH2>
            <AboutP>{user.description9}</AboutP>
            <AboutP>{user.price9}</AboutP>
            <AboutH2>{user.name10}</AboutH2>
            <AboutP>{user.description10}</AboutP>
            <AboutP>{user.price10}</AboutP>
            <AboutH2>{user.name11}</AboutH2>
            <AboutP>{user.description11}</AboutP>
            <AboutP>{user.price11}</AboutP>
            <AboutH2>{user.name12}</AboutH2>
            <AboutP>{user.description12}</AboutP>
            <AboutP>{user.price12}</AboutP>
            <AboutH2>{user.name13}</AboutH2>
            <AboutP>{user.description13}</AboutP>
            <AboutP>{user.price13}</AboutP>
            <AboutH2>{user.name14}</AboutH2>
            <AboutP>{user.description14}</AboutP>
            <AboutP>{user.price14}</AboutP>
            <AboutH2>{user.name15}</AboutH2>
            <AboutP>{user.description15}</AboutP>
            <AboutP>{user.price15}</AboutP>
            <AboutH2>{user.name16}</AboutH2>
            <AboutP>{user.description16}</AboutP>
            <AboutP>{user.price16}</AboutP>
            <AboutH2>{user.name17}</AboutH2>
            <AboutP>{user.description17}</AboutP>
            <AboutP>{user.price17}</AboutP>
            <AboutH2>{user.name18}</AboutH2>
            <AboutP>{user.description18}</AboutP>
            <AboutP>{user.price18}</AboutP>
            <AboutH2>{user.name19}</AboutH2>
            <AboutP>{user.description19}</AboutP>
            <AboutP>{user.price19}</AboutP>
            <AboutH2>{user.name20}</AboutH2>
            <AboutP>{user.description20}</AboutP>
            <AboutP>{user.price20}</AboutP>
            <AboutH2>{user.name21}</AboutH2>
            <AboutP>{user.description21}</AboutP>
            <AboutP>{user.price21}</AboutP>
            <AboutH2>{user.name22}</AboutH2>
            <AboutP>{user.description22}</AboutP>
            <AboutP>{user.price22}</AboutP>
            <AboutH2>{user.name23}</AboutH2>
            <AboutP>{user.description23}</AboutP>
            <AboutP>{user.price23}</AboutP>
            </Dropdown>
            ) : null}
          </>
        );
      })}
   </Container>
  );
}

export default App;
