import Link from "next/link";

const UsersList = () => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        <li>
          <Link href="/usersList/Bikash">Bikash</Link>
        </li>
        <li>
          <Link href="/usersList/Jordan">Jordan</Link>
        </li>
        <li>
          <Link href="/usersList/Huxn">HuXn</Link>
        </li>
        <li>
          <Link href="/usersList/John">John</Link>
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
