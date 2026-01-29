import {useState} from 'react';

const ToastMessage = (props) => {
    const[isVisible, setIsVisible] = useState(true);
    
    function dismiss() {
        if(isVisible === true) {
            setIsVisible(false);
        }
    }
    
    if(isVisible===true) {
        return (
            <article className="toastMessage">
                <p>
                    Ceci est le texte de mon message
                </p>
                <button onClick={dismiss}>X</button>
            </article>  
        );
    }
    else {
        return(
            <article className="dismissed">
                <p>
                    Ceci est le texte de mon message
                </p>
                <button onClick={dismiss}>X</button>
            </article>
        );
    }
};

export default ToastMessage;