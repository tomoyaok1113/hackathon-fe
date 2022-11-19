import { User } from "./App"

type Props = {
    users: User[];
}

const UserList = (props: Props) => {
    return (
        <ul>
            {props.users.map((user) => {
                return <li className="List" key={user.id}>
                    {user.name},{user.point}
                </li>;
            })}
        </ul>
    );
}

export default UserList;