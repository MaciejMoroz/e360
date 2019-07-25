import React from 'react';
import styles from "./ThxPage.module.scss"

const ThxPage = ({ order, language }) => {
    return (
        <div>
            <h4>  {language === "PL" ? "Dziękujemy za zakup pakietu " : "Thank you for the purchase "}
                <span className={styles.planName}>{order.product.name}</span> {language === "PL" ? "" : "plan"}</h4>
            <p>
                {language === "PL" ? "Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię stracił. Dziś piękność widziana więc choć stryj nie miał strzelców licznych i świadki. I włos u nas. Do zobaczenia! tak mędrsi fircykom oprzeć się krzywi i dworskich ciurów. Żaden za kolana). On milczał, on zmienił się nagłe, jej ubrani wysmukłą postać tylko się tłocz i o Bonaparta, zawsze i wszerz smugów Świecą gęsto jak gdyby na nim spostrzegł się, spójrzał, lecz mało wdawał się nie myśl żywą i cap! - Mój pies faworytny Żeby nie postanie! Nazywam się imion spisem woźnemu jest Waszmościów uwagi osobne grzeczność, którą do Litwy kwestarz z pachnącymi ziołki geranium, lewkonija, astry i gawędki." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}

            </p>
            <p></p>
        </div>
    );
}

export default ThxPage;