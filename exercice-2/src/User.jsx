import { useState } from 'react';

const User = (props) => {
    const [isActive, setIsActive] = useState(false);

    function Connect() {
        if (isActive === true) {
            setIsActive(false);
        }
        else {
            setIsActive(true);
        }
    }
    
    if(isActive === true) {
        return(
            <article>
                <h2>Mari Doucet</h2>
                <p>En ligne</p>
                <button onClick={Connect}> Se déconnecter </button>
            </article>
        );
    }
    else {
        return (
            <article>
                <h2>Mari Doucet</h2>
                <p>Hors-ligne</p>
                <button onClick={Connect}> Se connecter </button>
            </article>
        );
    }
};

export default User;