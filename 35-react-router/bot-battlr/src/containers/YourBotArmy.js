import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

	render(){
		const {botCollection, yourBots, remove} = this.props

		const bots = yourBots.map((botId,index) => {
			let foundBot = botCollection.find(bot => bot.id === botId)
			return <BotCard key={index} bot={foundBot} executeAction={remove}/>
		});
		
		return (

				<div className='ui segment inverted olive bot-army'>
					<div className="ui five column grid">
						<div className="row bot-army-row">
							{bots}
						</div>
					</div>
				</div>

		)
	}

};

export default YourBotArmy;
