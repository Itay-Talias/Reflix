import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import MovieInfo from "./components/MovieInfo";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "ITAY", budget: 900 },
                { name: "DEKEL", budget: 900 },
                { name: "YAGEL", budget: 900 },
                { name: "OHAD", budget: 900 },
            ],
            catalog: [
                {
                    id: 0,
                    isRented: false,
                    title: "Tarzan",
                    year: 1999,
                    img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
                    descrShort:
                        "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
                },
                {
                    id: 1,
                    isRented: false,
                    title: "The Lion King",
                    img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",
                    year: 1994,
                    descrShort:
                        "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.",
                },
                {
                    id: 2,
                    isRented: false,
                    title: "Beauty and the Beast",
                    year: 1991,
                    img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",
                    descrShort:
                        "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.",
                },
                {
                    id: 3,
                    isRented: false,
                    title: "The Sword in the Stone",
                    year: 1963,
                    img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg",
                    descrShort:
                        "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
                },
                {
                    id: 4,
                    isRented: false,
                    title: "Beauty and the Beast",
                    year: 2016,
                    img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",
                    descrShort:
                        "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
                },
                {
                    id: 5,
                    isRented: false,
                    title: "Black Adam",
                    year: 2022,
                    img: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1663085107/amc-cdn/production/2/movies/62300/62331/PosterDynamic/142915.jpg",
                    descrShort:
                        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
                },
                {
                    id: 6,
                    isRented: false,
                    title: "Shang-chi",
                    img: "https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800",
                    year: 2021,
                    descrShort:
                        "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
                },
                {
                    id: 7,
                    isRented: false,
                    title: "Top Gun",
                    year: 2022,
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUtghkEMN-49NPCzIAfGhSS7_i2d2ymjpDw&usqp=CAU",
                    descrShort:
                        "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
                },
                {
                    id: 8,
                    isRented: false,
                    title: "Nope",
                    year: 2022,
                    img: "https://i.ytimg.com/vi/oJ_VO7tWIE4/movieposter_en.jpg",
                    descrShort:
                        "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
                },
                {
                    id: 9,
                    isRented: false,
                    title: "Thor",
                    year: 2022,
                    img: "https://cdn.moviestillsdb.com/storage/posters/43/10648342_150.jpg",
                    descrShort:
                        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
                },
                {
                    id: 10,
                    isRented: false,
                    title: "Gun Crazy",
                    year: 1950,
                    img: "https://cdn.moviestvnetwork.com/iKtQ2-1550175292-1919-movie-GunCrazy_MOVIES_800x1187.jpg",
                    descrShort:
                        "Two disturbed young people release their fascination with guns through a crime spree.",
                },
            ],
        };
    }
    rentMovie = (movieId) => {
        let newCatalog = [...this.state.catalog];
        newCatalog.find((m) => m.id === movieId).isRented = !newCatalog.find(
            (m) => m.id === movieId
        ).isRented;
        this.setState({ catalog: newCatalog });
    };
    updateBudget = (userName, price) => {
        let updatedBudget = false;
        let newUsers = [...this.state.users];
        const currUser = newUsers.find((u) => u.name === userName);
        if (currUser.budget + price >= 0) {
            currUser.budget = currUser.budget + price;
            this.setState({ users: newUsers });
            updatedBudget = true;
        }
        return updatedBudget;
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div id="home-background"></div>
                    <MenuBar></MenuBar>
                    <Route
                        exact
                        path="/"
                        render={() => <Home users={this.state.users} />}
                    />
                    <Route
                        exact
                        path="/catalog/:name"
                        render={({ match }) => (
                            <Catalog
                                rentMovieFunc={this.rentMovie}
                                catalog={this.state.catalog}
                                match={match}
                                users={this.state.users}
                                updateBudgetFunc={this.updateBudget}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/catalog/:name/:id"
                        render={({ match }) => (
                            <div>
                                <MovieInfo
                                    rentMovieFunc={this.rentMovie}
                                    catalog={this.state.catalog}
                                    match={match}
                                />
                            </div>
                        )}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
