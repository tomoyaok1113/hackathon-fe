import { User } from "./App"

type Props = {
    users: User[];
}

const UserList = (props: Props) => {
    return (
        <ol>
            {props.users.map((user) => {
                return <li className="List" key={user.id}>
                    {user.name},{user.age}
                </li>;
            })}
        </ol>
    );
}

export default UserList;