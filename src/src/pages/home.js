import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.user = this.get_data();
    }


    get_data() {
        return [{
            name: "c2smr",
            description: "Fondateur d'une association <br> " +
                "C2SMR est une association à but non lucratif dont l’objectif est d'aider le sauvetage marin à l'aide d'analyse d'image par ordinateur. <br>" +
                "Tout notre code est disponible en accès libre et co-développé par nos bénévoles.",
            link: "https://c2smr.fr",
            date: "Création en 2023.",
            image: "https://media.discordapp.net/attachments/1047568954845048944/1164928988586721390/logo_2.png?ex=6544ffaa&is=65328aaa&hm=a8778c1c34340bd698ddbf414541b04cc0fda897605e7f10dfa610404a05ce94&=&width=578&height=578"
        }, {
            name: "Affluences",
            description: "Back-end developer en alterance.",
            link: "https://affluences.com",
            image: "https://cdn.discordapp.com/attachments/1084071570567335956/1193238891029876827/affluences-logo.png?ex=65abfd50&is=65998850&hm=a0dc647be2298404db28066512a246542a5af584aba167369a35cda02f144369&",
            date: "2023 - 2025"
        }, {
            name: "Digitalinkers",
            description: "Full stack developer. <br> Développement d'application interne en react js.",
            link: "https://digitalinkers.com",
            image: "https://cdn.discordapp.com/attachments/1084071570567335956/1193238800625831996/63c6b524d4f44bbffacc0679_d.png?ex=65abfd3b&is=6599883b&hm=b7d33e4ae98cd7868b6d58363aea528c6f2472b16b4aa35d5a0597b12d5f7c21&",
            date: "mai 2023 - août 2023"
        }, {
            name: "ESGI",
            description: "Étudiant à l'ESGI, Fillaire IABD (Intelligence Artificiel & Big Data). <br> Président du Labo IA.",
            link: "https://esgi.fr",
            image: "https://cdn.discordapp.com/attachments/1084071570567335956/1193239475648741477/esgi.png?ex=65abfddc&is=659988dc&hm=bb3650d34316e45ae6ec83ea0e16218f4aed568a7bbba19c22df61ff8d979927&",
            date: "2022 - 2027"
        }, {
            name: "Vache Folle",
            description: "Création d'un site Internet pour un bar.",
            link: "",
            image: "https://media.discordapp.net/attachments/1084071570567335956/1193238204384559126/vache.png?ex=65abfcad&is=659987ad&hm=378406296673b83fcaa36f7c4e5721a3bfed0caa39896829a3f37b94e8a8884a&=&format=webp&quality=lossless&width=969&height=467",
            date: "juin 2022",
        }, {
            name: "Mactor",
            description: "Création d'un jeu vidéo. <br> Utilisation de multiples technos telle que c#, python et php.",
            link: "https://gamejolt.com/games/mactor/709362",
            image: "https://media.discordapp.net/attachments/1084071570567335956/1193238414527574047/mactor.png?ex=65abfcdf&is=659987df&hm=e47d2460d274c9e9210a1c093c2654020773d4aa487a48d9033f63025153a064&=&format=webp&quality=lossless&width=831&height=467",
            date: "2021 - 2022",
        }]
    }


    render() {
        return (
            <div>
                <div class={"container-home container-home-page"}>
                    <h1><img alt={"logo"}
                             src={"https://media.discordapp.net/attachments/1084071570567335956/1193240911497396244/avatar.png?ex=65abff32&is=65998a32&hm=be15314f6a604d2da46d56fb532bad5168709de43be98af2195118cc20c65cac&=&format=webp&quality=lossless"}/>
                    </h1>
                    <h2>Victor Dalet</h2>
                    <h2>Back-end developer / founder of c2smr</h2>
                    <div class={"btn-download"} onClick={() => {
                        window.open("https://github.com/victordalet")
                    }}>GITHUB
                    </div>
                </div>
                {
                    this.user.map((project) => {
                        return (
                            <div className={"container-project container-home-page"}>
                                <div className={"info-container"}>
                                    <img src={project.image} alt={"logo-project"}/>
                                    <h1><a href={project.link}>{project.name} </a></h1>
                                    {project.description.split('<br>').map((description) => {
                                        return (<h2>{description}</h2>);
                                    })}
                                    <h2> {project.date}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}