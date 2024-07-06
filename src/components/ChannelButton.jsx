const ChannelButton = (props) => {
    return (
        <button className="channel" key={ props.channel.id } onClick={ () => window.location.assign("/subscriptions?tag=" + props.channel.tag) }>
            <img className="avatar" src={ props.channel.logo } alt={ props.channel.name } />
            { props.channel.name }
        </button>
    );
};

export default ChannelButton;