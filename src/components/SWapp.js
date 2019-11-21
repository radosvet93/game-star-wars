import React, { Component } from 'react'
import { getCharacters, getStarships } from '../api/swapi';
import { Person } from './Person';
import { Starship } from './Starship';
import { Score } from './Score';
import { shuffleArr } from '../helpers'

export default class SWapp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            charactersArr: [],
            starshipsArr: [],

            myCharacter: {},
            myStarship: {},
            myScore: 0,
            myResult: '',

            enemyCharacter: {},
            enemyStarship: {},
            enemyScore: 0,
            enemyResult: '',

            msg: 'Play with character or starship?',

            apiAvailable: false,
            apiMsg: 'The force will be with you shortly'

        }
    }

    componentDidMount() {

        /* If there is no characters item in localStorage, go to resource to get data */
        if (localStorage.getItem('characters') === null) {
            getCharacters().then(characters => {

                this.setState({
                    charactersArr: [...this.state.charactersArr, ...characters],
                    apiAvailable: true
                })

                localStorage.setItem('characters', JSON.stringify(characters))

            }).catch(e => {
                this.setState({
                    apiMsg: 'The force is not with you!'
                })
                console.log(e)
            })
        } else {
            this.setState({
                charactersArr: [...this.state.charactersArr, ...JSON.parse(localStorage.getItem('characters'))],
                apiAvailable: true
            })
        }

        /* If there is no starships item in localStorage, go to resource to get data */
        if (localStorage.getItem('starships') === null) {
            getStarships().then(starships => {

                this.setState({
                    starshipsArr: [...this.state.starshipsArr, ...starships],
                    apiAvailable: true
                })
                localStorage.setItem('starships', JSON.stringify(starships))

            }).catch(e => {
                this.setState({
                    apiMsg: 'The force is not with you!'
                })
                console.log(e)
            })

        } else {
            this.setState({
                starshipsArr: [...this.state.starshipsArr, ...JSON.parse(localStorage.getItem('starships'))],
                apiAvailable: true
            })
        }
    }

    clearState() {
        this.setState({
            myCharacter: {},
            enemyCharacter: {},
            myStarship: {},
            enemyStarship: {}
        })
    }

    checkWinner(myAttr, enemyAttr) {

        if (myAttr > enemyAttr) {
            this.setState({
                myScore: this.state.myScore + 1,
                myResult: 'win',
                enemyResult: 'lose'
            })
        } else if (myAttr < enemyAttr) {
            this.setState({
                enemyScore: this.state.enemyScore + 1,
                myResult: 'lose',
                enemyResult: 'win'
            })
        } else {
            this.setState({
                myResult: 'draw',
                enemyResult: 'draw'
            })
        }
    }

    playPerson = () => {
        /* Clear prev results */
        this.clearState();

        /* shuffle characters and update state */
        let shuffleCharacters = shuffleArr(this.state.charactersArr);

        let myCharacter = shuffleCharacters[0];
        let enemyCharacter = shuffleCharacters[1];

        this.setState({ myCharacter, enemyCharacter, msg: 'Playing with characters' })

        /* Check winner */
        this.checkWinner(parseInt(myCharacter.mass), parseInt(enemyCharacter.mass));

    }

    playStarship = () => {
        /* Clear prev results */
        this.clearState();

        /* shuffle starships and update state */
        let shuffleStarships = shuffleArr(this.state.starshipsArr);

        let myStarship = shuffleStarships[0];
        let enemyStarship = shuffleStarships[1];

        this.setState({ myStarship, enemyStarship, msg: 'Playing with starships' })

        /* Check winner */
        this.checkWinner(parseInt(myStarship.crew), parseInt(enemyStarship.crew));

    }


    render() {
        return (

            <>
                {this.state.apiAvailable
                    ?
                    <>
                        <Score myScore={this.state.myScore} enemyScore={this.state.enemyScore} />

                        <div className="row d-flex justify-content-center" >
                            <h1>Star wars battles</h1>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <h3>{this.state.msg}</h3>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="row mt-4 d-flex justify-content-center">
                                    <button onClick={() => this.playPerson()} className="btn btn-primary play-person">Play with characters</button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row mt-4 d-flex justify-content-center">
                                    <button onClick={() => this.playStarship()} className="btn btn-primary play-starship"
                                    >Play with starships</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {Object.entries(this.state.myCharacter).length > 0 &&

                                    <Person myWins={this.state.myWins} enemyWins={this.state.enemyWins} myResult={this.state.myResult} enemyResult={this.state.enemyResult} myCharacter={this.state.myCharacter} enemyCharacter={this.state.enemyCharacter} playPerson={() => this.playPerson} />
                                }

                                {Object.entries(this.state.myStarship).length > 0 &&

                                    <Starship myWins={this.state.myWins} enemyWins={this.state.enemyWins} myResult={this.state.myResult} enemyResult={this.state.enemyResult} myStarship={this.state.myStarship} enemyStarship={this.state.enemyStarship} playStarship={() => this.playStarship} />
                                }
                            </div>
                        </div>
                    </>
                    :
                    <div className="row d-flex justify-content-center">
                        <h1>{this.state.apiMsg}</h1>
                    </div>
                }

            </>
        )
    }
}