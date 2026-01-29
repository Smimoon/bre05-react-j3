import {useState} from 'react';

const ReadMore = (props) => {
    const[isOpen, setIsOpen] = useState(false)
    
    function toggleOpen() {
        if(isOpen === true) {
            setIsOpen(false);
        }
        else {
            setIsOpen(true);
        }
    }
    
    if(isOpen === true) {
        return(
            <article>
                <header>
                    <h2>
                        Le titre de l'article
                    </h2>
                </header>
                <section>
                    Le corps de l'article
                </section>
                <footer>
                    <button onClick={toggleOpen}>Voir moins</button>
            	</footer>
            </article>
        );
    }
    else {
        return (
            <article>
                <header>
                    <h2>
                        Le titre de l'article
                    </h2>
                </header>
                <footer>
            		<button onClick={toggleOpen}>Voir plus</button>
            	</footer>
            </article>
        );
    }
};

export default ReadMore;