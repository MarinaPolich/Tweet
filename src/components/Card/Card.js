import { useDispatch } from "react-redux";
import { logo } from "../../assets/icons";
import { picture } from "../../assets/images";
import {
  CardBox,
  Logo,
  ThumbImage,
  Image,
  PhotoBox,
  Border,
  TextCard,
  Button,
} from "./Card.styled";
import { updateFollow } from "../../redux/user/user-slice";

export const Card = ({ item, follow }) => {
  const { tweets, followers, avatar } = item;
  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateFollow(item.id));
  };
  return (
    <CardBox>
      <Logo src={logo} />
      <ThumbImage>
        <Image src={picture} title="image" />
      </ThumbImage>
      <Border />
      <PhotoBox url={avatar} />
      <TextCard>{tweets} tweets</TextCard>
      <TextCard>
        {new Intl.NumberFormat("en-US", {
          style: "decimal",
        }).format(followers + (follow ? 1 : 0))}{" "}
        followers
      </TextCard>
      <Button className={follow ? "active" : ""} type="button" onClick={update}>
        {follow ? "following" : "follow"}
      </Button>
    </CardBox>
  );
};
