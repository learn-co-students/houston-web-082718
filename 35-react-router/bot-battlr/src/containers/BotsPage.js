import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    botCollection: [],
    yourBots: [],
    currentViewedBot: null
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botCollection => this.setState({ botCollection }));
  }

  seeDetails = botId => {
    this.setState({
      currentViewedBot: botId
    });
  };

  removeBot = removeBotId => {
    const newList = this.state.yourBots.filter(botId => {
      return botId !== removeBotId;
    });
    this.setState({
      yourBots: newList,
      currentViewedBot: null
    });
  };

  seeAll = () => {
    this.setState({
      currentViewedBot: null
    });
  };

  enlist = botId => {
    let newList = this.state.yourBots.slice();
    newList.push(botId);

    this.setState({
      yourBots: newList,
      currentViewedBot: null
    });
  };

  render() {
    return (
      <div>
        <BotCollection
          botCollection={this.state.botCollection}
          view={this.seeDetails}
        />
      </div>
    );
  }
}

export default BotsPage;
