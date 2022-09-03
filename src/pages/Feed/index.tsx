import { CardsNews } from "../../components/CardsNews";
import CardUser from "../../components/CardUser";
import FooterMobile from "../../components/FooterMobile";
import FriendList from "../../components/FriendList";
import { Header } from "../../components/Header";
import PostList from "../../components/PostList";
import { ContainerFeed, DivLeft, DivMidle, DivRight, MainFeed } from "./style";

const Feed = () => {
  const postList1 = [
    {
      id: "1",
      userID: "012l3",
      userAvatar: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Habitant morbi tristique senectus et. Lacinia quis vel eros donec. A erat nam at lectus urna duis convallis convallis. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Bibendum enim facilisis gravida neque convallis a cras semper auctor.",
      userName: "Teste",
    },
    {
      id: "2",
      userID: "0123fd",
      userAvatar: "",
      content:
        "Sit amet commodo nulla facilisi nullam vehicula. Vestibulum lectus mauris ultrices eros in cursus. Donec enim diam vulputate ut pharetra. Iaculis nunc sed augue lacus. Porttitor rhoncus dolor purus non. Nisi lacus sed viverra tellus in. Scelerisque felis imperdiet proin fermentum leo vel. Aliquet risus feugiat in ante metus dictum at. Sed sed risus pretium quam vulputate dignissim suspendisse in est.",
      userName: "Teste",
    },
    {
      id: "3",
      userID: "01d23",
      userAvatar: "",
      content:
        "Sit amet commodo nulla facilisi nullam vehicula. Vestibulum lectus mauris ultrices eros in cursus. Donec enim diam vulputate ut pharetra. Iaculis nunc sed augue lacus. Porttitor rhoncus dolor purus non. Nisi lacus sed viverra tellus in. Scelerisque felis imperdiet proin fermentum leo vel. Aliquet risus feugiat in ante metus dictum at. Sed sed risus pretium quam vulputate dignissim suspendisse in est.",
      userName: "Teste",
    },
    {
      id: "4",
      userID: "01sd23",
      userAvatar: "",
      content:
        "Scelerisque fermentum dui faucibus in ornare quam. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Lectus sit amet est placerat in egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      userName: "Teste",
    },
    {
      id: "5",
      userID: "012d3",
      userAvatar: "",
      content:
        "Scelerisque fermentum dui faucibus in ornare quam. Amet risus .",
      userName: "Teste",
    },
    {
      id: "6",
      userID: "0123ds",
      userAvatar: "",
      content:
        "Scelerisque fermentum dui faucibus in ornare quam. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Lectus sit amet est placerat in egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      userName: "Teste",
    },
  ];

  return (
    <ContainerFeed>
      <Header />
      <MainFeed>
        <DivLeft>
          <CardUser />
          <FriendList />
        </DivLeft>
        <DivMidle>
          <PostList postList={postList1} />
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
