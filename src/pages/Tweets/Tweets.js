import {
  Button,
  Container,
  Filter,
  LoadMore,
  WraperCard,
} from "./Tweets.styled";
import { Card } from "../../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getFollow, usersSelector } from "../../redux/user/user-selector";
import { useEffect, useState, useMemo } from "react";
import { getUsers } from "../../redux/user/user-operations";
import Select from "react-select";

const orders = [
  { value: "", label: "Show all" },
  { value: false, label: "Follow" },
  { value: true, label: "Followings" },
];

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const follow = useSelector(getFollow);
  const [filter, setFilter] = useState(orders[0]);
  const [page, setPage] = useState(0);

  const filterUsers =
    filter.value === ""
      ? users
      : users.filter(({ id }) => !!follow[id] === filter.value);

  const setFilterHandle = (selected) => {
    if (selected !== filter) setPage(0);
    setFilter(selected);
  };

  let loadUsers = useMemo(() => {
    const start = 0;
    const end = page * 9 + 9;
    return filterUsers?.slice(start, end) ?? [];
  }, [filterUsers, page]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container>
      <Button to="/">Back</Button>
      <Filter>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isSearchable={false}
          isClearable={false}
          name="order"
          options={orders}
          value={orders.find(({ value }) => value === filter?.value)}
          onChange={setFilterHandle}
        />
      </Filter>
      <WraperCard>
        {loadUsers?.map((item) => (
          <Card key={item.id} item={item} follow={follow[item.id]} />
        ))}
      </WraperCard>
      {filterUsers.length > loadUsers.length && (
        <LoadMore onClick={() => setPage(page + 1)} type="button">
          Load More
        </LoadMore>
      )}
    </Container>
  );
};

export default Tweets;
