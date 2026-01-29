import { useState } from 'react';

const List = (pops) => {
    const [fruits, setFruits] = useState(["banane", "orange", "pomme", "citron", "mangue"]);

    function Suppr() {
       setFruits(fruits.slice(0, -1));
        
    }

    return (
        <div>
            <ul>
                {fruits.map((fruit, i) => <li key = {i}>{fruit}</li>)}
            </ul>
            <button onClick={Suppr}>Supprimer le dernier fruit</button>
        </div>
    );
};

export default List;
