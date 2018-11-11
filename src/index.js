import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import I18nContext from './I18nContext'
import data from './data'
import './card.css'
import CustomHookCard from './CostomHook/Card'
import { useToggle, useI18n, useHash } from './CostomHook/hooks'
import ClassCard from './Class/Card'
import HookCard from './Hook/Card'
import Card from './CostomHook/Card';
import NewClass from './Class/NewClass'
import NewHook from './Hook/NewHook'

const Components = {
	class: ClassCard,
	hook: HookCard,
	custom: CustomHookCard
}

const App = ({ data }) => {
	let style = useHash()
	let TargetCard = Components[style] || CustomHookCard
	let [locale, toggleLocale] = useToggle(...data.locales)
	console.log('style', style)
	return (
		<React.Fragment>
			<I18nContext.Provider value={locale}>
				<Local data={data} toggle={toggleLocale} />
				<TargetCard data={data} />
			</I18nContext.Provider>
		</React.Fragment>
	)
}

const Local = ({ data, toggle }) => {
	let { locale } = useI18n(data, I18nContext)
	return (
		<div className="twitter__link" onClick={toggle}>
			{locale}
		</div>
	)
}


// ReactDOM.render(<App data={data}/>, document.getElementById('root'));
// ReactDOM.render(<NewClass data={data}/>, document.getElementById('root'));//实现
ReactDOM.render(<Card data={data}/>, document.getElementById('root'));
// ReactDOM.render(<NewHook data={data}/>, document.getElementById('root'));//实现
// ReactDOM.render(<CustomHookCard data={data}/>, document.getElementById('root'));
serviceWorker.unregister();
