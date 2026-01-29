import {useState} from 'react';

const User = (props) => {
    const [profile, setProfile] = useState({firstName : props.profile.firstName, lastName : props.profile.lastName, loggedIn : props.profile.loggedIn });
    
    
    function Connect() {
        let defaultStatus = Object.assign({}, profile, {loggedIn : false});
        let newStatus = Object.assign({}, profile, {loggedIn : true});
        
        if (profile.loggedIn === true) {
            setProfile(defaultStatus);
        }
        else {
            setProfile(newStatus);
        }
    }
    if (profile.loggedIn === true) {
        return (
            <article>
                <h2>{profile.firstName} {profile.lastName}</h2>
                <p>En ligne</p>
                <button onClick={Connect}>Déconnexion</button>
            </article>
        );
    }
    else {
        return (
            <article>
                <h2>{profile.firstName} {profile.lastName}</h2>
                <p>Hors-ligne</p>
                <button onClick={Connect}>Connexion</button>
            </article>
        );
    }
};

export default User;