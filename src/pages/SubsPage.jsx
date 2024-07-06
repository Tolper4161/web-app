import React from "react";
import channels from "../channels";
import SpecialButton from "../components/SpecialButton";

class SubsPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = { logo: "", name: "", tag: "" }
    }
    
    componentDidMount () {
        const url = window.location.search;
        const tag = new URLSearchParams(url).get("tag");
        if (tag === null) window.location.assign("/");
        else {
            for (let i = 0; i < channels.length; i++)
            {
                if (channels[i].tag === tag) {
                    this.setState({ logo: channels[i].logo, name: channels[i].name, tag: channels[i].tag });
                    break;
                }
            }
        }
    }

    render () {
        return (
            <>
                <div className="top-bar">
                    <button className="back-btn" onClick={ () => window.location.assign("/") }>{ "<" }</button>
                    <h4>{ this.state.name }</h4>
                    <img className="avatar" src={ this.state.logo } alt={ this.state.name } />
                </div>
                <div className="fixed-btn-group">
                    <SpecialButton value="Продлить подписку" bgColor="green" />
                    <SpecialButton value="Отказаться от подписки" bgColor="red" />
                </div>
            </>
        );
    };
};

export default SubsPage;