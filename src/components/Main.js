import Special from './Special.js';
import Testimony from './Testimony.js';

function Main() {
    return(
        <main>
            <section id="Hero">
                <h1>Little Lemon</h1>
                <p>
                    We are Little Lemon! A family owned restaurant based in Chicago.
                    Our restaurant hopes to provide you with food and service that you and your family can enjoy!
                    Feel free to browse our menu and look at options to enjoy our delicious food!
                </p>
                <img src="" alt="Little Lemon food" />
                <button>Reserve a Table</button>
            </section>
            <section id="Highlights">
                <h1>Specials</h1>
                <button>Order Online</button>
                <Special />
                <Special />
                <Special />
            </section>
            <section id="Testimonials">
                <h1>Testimonials</h1>
                <Testimony />
                <Testimony />
                <Testimony />
            </section>
            <section id="About">
                <h1>Little Lemon</h1>
                <p>
                    We here at Little Lemon promise to deliver the best possible food and service at an affordable price.
                    With our variety of foods available at a moment's notice, we aim for top tier quality at a breakneck speed.
                    We will hold up a professional standard of fine dining, with accessibility to anyone and everyone.
                </p>
            </section>
        </main>
    );
}

export default Main;