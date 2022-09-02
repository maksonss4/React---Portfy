import { CardsNews } from "../../components/CardsNews";
import CardUser from "../../components/CardUser";
import FooterMobile from "../../components/FooterMobile";
import FriendList from "../../components/FriendList";
import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { ContainerFeed, DivLeft, DivMidle, DivRight, MainFeed } from "./style";

const Feed = () => {
  return (
    <ContainerFeed>
      <Header />
      <MainFeed>
        <DivLeft>
          <CardUser />
          <FriendList />
        </DivLeft>
        <DivMidle>
          <ul className="container-post">
            <Post
              h2="Makson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB52AcMxK-13Nyzcy71M4bj66tetJxvE54A&usqp=CAU"
              p="saubldhs dhvdshfvds aulsadiçjd saudb sad isbdisuhdols asbd"
            />
            <Post
              h2="Makson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB52AcMxK-13Nyzcy71M4bj66tetJxvE54A&usqp=CAU"
              p="saubldhs dhvdshfvds aulsadiçjd saudb sad isbdisuhdols asbd"
            />
            <Post
              h2="Makson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB52AcMxK-13Nyzcy71M4bj66tetJxvE54A&usqp=CAU"
              p="saubldhs dhvdshfvdasoinsa aiudasld asuidbasdoas sudhoosaiudhsa asudhsoipd asdusaduoasd asidohsapdj sdubd isadbsa ssaudbsad asidusad s aulsadiçjd saudb sad isbdisuhdols asbd"
            />
            <Post
              h2="Makson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB52AcMxK-13Nyzcy71M4bj66tetJxvE54A&usqp=CAU"
              p="saubldhs dhvdshfvds aulsadiçjd saudb sad isbdisuhdols asbd"
            />
            <Post
              h2="Makson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB52AcMxK-13Nyzcy71M4bj66tetJxvE54A&usqp=CAU"
              p="saubldhs dhvdshfvds aulsadiçjd saudb sad isbdisuhdols asbd"
            />
            <Post
              h2="Makson"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoB52AcMxK-13Nyzcy71M4bj66tetJxvE54A&usqp=CAU"
              p="saubldhs dhvdshfvds aulsadiçjd saudb sad isbdisuhdols asbd"
            />
          </ul>
        </DivMidle>
        <DivRight>
          <CardsNews />
        </DivRight>
      </MainFeed>
      <FooterMobile />
    </ContainerFeed>
  );
};

export default Feed;
