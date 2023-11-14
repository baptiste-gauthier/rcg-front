<script lang="ts">
    import img from "../../lib/assets/vladislav-bychkov-SJyTPXpHDgo-unsplash 1.png";
</script>

<section id="contact">
    <h1> Discutons de votre <span class="stroke">personnalisation</span></h1>
    <p>Vos idées, notre expertise. Contactez-nous pour un devis sur mesure.</p>

    <div class="contact__container">
        <div class="contact__img">
            <img src="{img}" alt="contact rcg">
        </div>
        <div class="contact__form">
            <form method="POST">
                <div class="form__bloc__horizontal">
                    <div class="form__name">
                        <label for="name">Nom</label>
                        <input placeholder="Nom*" name="name" type="name">
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input placeholder="Email*" name="email" type="email">
                    </div>
                </div>

                <div>
                    <label for="subject">Sujet de la demande</label>
                    <select name="subject" id="subject-select">
                        <optgroup>
                            <option value="">Sujet de la demande*</option>
                            <option value="command_issue">Probleme de commande</option>
                            <option value="infos">Informations</option>
                            <option value="product">Un produit autre que notre collection</option>
                        </optgroup>
                      </select>
                </div>

                <div>
                    <div>
                        <label for="message">Email*</label>
                        <textarea placeholder="Votre message*" name="message"></textarea>
                    </div>
                </div>

                <button>Envoyer</button>
            
            </form>

            <p class="form__asterisque">*Champs obligatoires</p>
        </div>
    </div>

    <div class="contact__informations">
        <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#000000" stroke-width="1.5"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <p>Marseille, France</p>
    </div>
    <div class="contact__informations">
        <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M5 9L9.5 12L14 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H16C17.1046 5 18 5.89543 18 7V9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M17 14H23M23 14L20 11M23 14L20 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <a href="mailto:contact@rcg.com">contact@rcg.com</a>
    </div>
    
    
</section>

<style lang="scss">

    h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 3rem;
    }
    #contact {
        padding-top: var(--padding-vertical);
    }
    label {
        display: none;
    }
    .contact__container {
        display: flex;
        align-items: center;
        gap: 4rem;
        & > div {
            flex: 1;
        }
    }
    .contact__img {
        img {
            width: 100%;
            justify-content: center;
            border-radius: 15px;
        }
    }
    .contact__container {
        margin: var(--padding-vertical) 0;
    }

    input, select, textarea {
        background: unset;
        border-bottom: 2px solid black;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        outline: none;
        padding: 5px;
        // background-color: rgba(255, 0, 0, 0.267);
        width: 100%;
        font-size: 1rem;

        &::placeholder {
            text-transform: uppercase;
            color: var(--black);
            font-size: 1rem;
        }
    }
    select {
        text-transform: uppercase;
        font-size: 1rem;
        padding: 5px 5px 5px 0;
    }
    textarea {
        padding: 5px 5px 50px 5px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }
    .form__bloc__horizontal {
        display: flex;
        gap: 2rem;
        & > div {
            flex: 1;
        }
    }
    optgroup {
        text-transform: uppercase;

    }
    button {
        text-transform: uppercase;
        padding: 0.5rem 4rem;
        border-radius: 2rem;
        border: 2px solid var(--black);
        color: var(--black);
        font-weight: 700;
        text-align: center;
        transition: all .2s ease;
        width: fit-content;
        cursor: pointer;

        &:hover {
            background-color: var(--black);
            color: white;
        }
    }
    a {
        color: var(--black);
    }
    .contact__informations {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
    }
    .form__asterisque {
        margin-top: 1rem;
    }
</style>