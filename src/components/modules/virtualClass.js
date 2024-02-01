import React, { Fragment } from "react";
import '../styles/virtualClass.css';

export function VirtualClass() {
    return(
        <Fragment>
            <div>
                <div>
                    <iframe className="videoClass" src="https://www.youtube.com/embed/lLSu0UHNZhU?si=ecA3WEhoF8BXZxOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="messageZone">
                    <form>
                        <text>mensaje</text>
                        <div>
                            <input placeholder="escribe un mensaje"></input>
                            <button>enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}