import React from "react";

function Project(props) {
    return (
        <div class="uk-animation-toggle" tabindex="0">
            <a href="https://will98nicholson.github.io/WeatherApp/" target="_blank" rel="noreferrer">
                <div class="uk-card uk-card-default uk-grid uk-grid-collapse uk-child-width-1-2@s uk-margin uk-animation-scale-down"
                    uk-grid>
                    <div class="uk-card-media-left uk-cover-container">
                        <img src={process.env.PUBLIC_URL + props.img} alt="pass" uk-cover></img>
                        <canvas width="600" height="400"></canvas>
                    </div>
                    <div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">{props.title}</h3>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </a>

        </div>
    )
}
export default Project;