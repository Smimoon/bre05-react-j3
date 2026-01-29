import User from './User.jsx';

const UserList = (props) => {
    let users = [{
            firstName: "Mari",
            lastName: "Doucet",
            loggedIn: true
        },
        {
            firstName: "Hugues",
            lastName: "Froger",
            loggedIn: false
        },
        {
            firstName: "Alain",
            lastName: "Terieur",
            loggedIn: true
        },
        {
            firstName: "Alex",
            lastName: "Terieur",
            loggedIn: false
        }
    ];
    
    return (
        <>    
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user, i) => <li key = {i}><User profile = {user}/></li>)}
            </ul>
        </>
    )
    
};

export default UserList;
