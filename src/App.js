import logo from './logo.svg';
import './App.scss';
import { useState } from 'react';
import Content from './containers/Content';
import Quiz from './containers/Quiz';
import Result from './containers/Result';

function App() {
	const [page, setPage] = useState(0);

	function nextPage() {
		setPage(page + 1)
	}

	function renderPage() {
		switch(page) {
			case 0: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 1: 
				return <Quiz pageId={page}/>	
			case 2: 
				return <Result pageId={page}/>	
			default:
				return <Content pageId={page}/>
		}
	}

  return (
    <div className="App">
			<header class="o-header" data-o-component="o-header" data-o-header--no-js>
				<div class="o-header__row o-header__top">
					<div class="o-header__container">
						<div class="o-header__top-wrapper">
							<div class="o-header__top-column o-header__top-column--center">
								<a class="o-header__top-logo" href="/" title="Go to Financial Times homepage">
									<span class="o-header__visually-hidden">Financial Times</span>
								</a>
							</div>
						</div>
					</div>
				</div>
    	</header>
			<main>
				{renderPage()}
			</main>
    </div>
  );
}

export default App;
