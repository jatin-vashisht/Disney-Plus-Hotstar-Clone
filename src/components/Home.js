import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, getDocs } from 'firebase/firestore/lite';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {
    (async function () {
      const movieSnapshot = await getDocs(collection(db, 'movies'));
      movieSnapshot.docs.map(doc => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }]
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }]
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }]
            break;
          
          default:
            console.log("No match");
        }
      })
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      )
    })()
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/images%2Fhome-background.png?alt=media&token=6896e2a7-a7c4-4f61-8504-ee564b905897&_gl=1*149n4oa*_ga*MTU1MjIwODMyOC4xNjk2Nzc4OTI4*_ga_CW55HF8NVT*MTY5Njg3NjIyMS45LjEuMTY5Njg3NjQ0Ny42MC4wLjA.") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
