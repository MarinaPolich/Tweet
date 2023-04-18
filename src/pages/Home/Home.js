import {
  Container,
  Title,
  WraperLeft,
  WraperRight,
  StarOne,
  StarTwo,
  StarThree,
  StarFour,
  TitleBox,
  BoxIcon,
  TwitterIcon,
  WraperCard,
  Button,
} from "./Home.styled";
import { ReactSVG } from "react-svg";
import { leftrays, rightrays, star, twitter } from "../../assets/icons";
import { Card } from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getFollow, usersSelector } from "../../redux/user/user-selector";
import { useEffect } from "react";
import { getUsers } from "../../redux/user/user-operations";

const Home = () => {
  const dispatch = useDispatch();
  const userItems = useSelector(usersSelector);
  const follow = useSelector(getFollow);
  const users = userItems.slice(0, 4);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container>
      <WraperLeft>
        <StarOne src={star} title="image star" />
        <StarTwo
          src={star}
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 58px; height: 58px");
          }}
          title="image star"
        />
        <StarThree
          src={star}
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 68px; height: 68px");
          }}
          title="image star"
        />
        <StarFour
          src={star}
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 50px; height: 50px");
          }}
          title="image star"
        />

        <TitleBox>
          <ReactSVG src={leftrays} title="quotation mark" />
          <Title>Tweets</Title>
          <ReactSVG src={rightrays} title="quotation mark" />
        </TitleBox>

        <BoxIcon>
          <ReactSVG
            src={twitter}
            beforeInjection={(svg) => {
              svg.setAttribute(
                "style",
                "width: 272px; height: 212px; opacity: 0.1;"
              );
            }}
            title="icon twitter"
          />
          <TwitterIcon
            src={twitter}
            beforeInjection={(svg) => {
              svg.setAttribute("style", "width: 135px; height: 110px;");
            }}
            title="icon twitter"
          />
        </BoxIcon>
        <Button to="/tweets">Tweets All</Button>
      </WraperLeft>
      <WraperRight>
        <WraperCard>
          {users?.map((item) => (
            <Card key={item.id} item={item} follow={follow[item.id]} />
          ))}
        </WraperCard>
      </WraperRight>
    </Container>
  );
};

export default Home;
