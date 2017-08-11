
import 		React 			from 'react';
import { 	Text 		,
			View 		} 	from 'react-native';
import { 	Ionicons 	} 	from '@expo/vector-icons';
import 		layout 			from '../../styles/layout';
import 		style 			from '../../styles/errors';
import 		bull 			from '../../styles/bull';
import 		strings 		from '../../properties/strings';

export default class NotFound extends React.Component {

	render () {

		const theme = this.props.theme;

		// Only render if the bull rating is zero
		if (
			this.props.bull.loading || 
			this.props.bull.error 	|| 
			this.props.bull.rating 	!== 0 
		) {
			return null;
		}

		return (
			
			<View style = {{
				...layout ().fill 	,
				...layout ().row 	,
				...bull ( theme ) [ '404' ]
			}}>
				
				<View style 	= { style ( theme ).ajax.view 	}>

					<Ionicons
						name 	= 'ios-pulse-outline'
						size 	= { 64 							}
						color 	= { theme.secondary 			}
					/>

					<Text style = { style ( theme ).ajax.text 	}>
						{ strings.screens.bull [ '404' 			]}
					</Text>

				</View>
			</View>
		);
	}
};
