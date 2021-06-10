import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
    // const [store] = useStoreContext();

    return (
        <div class="uk-position-top">
            <nav class="uk-navbar-container uk-navbar" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="#abtme">About Me</a></li>
                        <li>
                            <a href="#">Work</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li class="uk-active"><a href="#work">Grid</a></li>

                                    <li class="uk-nav-header">Projects</li>
                                    <li class="uk-nav-divider"></li>
                                    <li><a href="https://will98nicholson.github.io/WeatherApp/" target="_blank">Weather
                                        App</a></li>
                                    <li><a href="https://will98nicholson.github.io/QuizTime/" target="_blank">Quiz
                                        Game</a>
                                    </li>
                                    <li><a href="https://github.com/will98nicholson/TeamProfile" target="_blank">Company
                                        Profile Generator</a></li>
                                    <li><a href="https://github.com/will98nicholson/note_taker"
                                        target="_blank">Note-Taker
                                        Application</a></li>
                                    <li><a href="https://github.com/will98nicholson/Employee-Managemet-"
                                        target="_blank">Employee Management System</a></li>
                                    <li><a href="https://will98nicholson.github.io/hw3/" target="_blank">Password
                                        Generator</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="https://drive.google.com/file/d/1ZuRDrnnEFjP-QvJArmn7a8XOeux5Lkho/view?usp=sharing"
                            target="_blank">Resume</a></li>
                        <li>
                            <a href="#">Contact Me</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li><a href="https://www.linkedin.com/in/william-nicholson-3a49a2154/"
                                        target="_blank">LinkedIn</a></li>
                                    <li><a href="https://github.com/will98nicholson" target="_blank">Github</a>
                                    </li>
                                    <li>Email: will98nicholson@gmail.com</li>
                                    <li>Phone: 614-832-2893</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;

//Miniproject 22 from 20-State
