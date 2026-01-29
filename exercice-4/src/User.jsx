import { useState } from 'react';

const User = (props) => {
    const [profile, setProfile] = useState({ firstName: 'Simon', lastName: 'Laroche', isActive: false });
    
    function Connect() {
        let defaultStatus = Object.assign({}, profile, {isActive : false});
        let newStatus = Object.assign({}, profile, {isActive : true});
        
        if (profile.isActive === true) {
            setProfile(defaultStatus);
        }
        else {
            setProfile(newStatus);
        }
    }
    if (profile.isActive === true) {
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
