import ChannelButton from "../components/ChannelButton";
import channels from "../channels";
import SpecialButton from "../components/SpecialButton";

const MainPage = (props) => {
    return (
        <>
            <div className="search-bar">
                <input placeholder="Search" />
            </div>
            <div className="channels-list">
                <h2>My Channels</h2>
                <div className="channels-list-content">{ channels.map(channel => (<ChannelButton channel={ channel } />)) }</div>
            </div>
            <div className="fixed-btn-group">
                <SpecialButton value="Перейти в Professional Studio" bgColor="green" />
            </div>
        </>
    );
};

export default MainPage;