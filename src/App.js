import './App.scss';
import { useState } from 'react';
import Content from './containers/Content';
import Quiz from './containers/Quiz';
import Result from './containers/Result';

function App() {
	const [page, setPage] = useState(0);
	const [responses, setResponses] = useState([]);

	function nextPage() {
		console.log('calling nextPage')
		console.log(page)
		setPage(page + 1)
	}

	function goToPage(pageId) {
		return function () {
			setPage(pageId)
		}
	}

	function renderPage() {
		switch(page) {
			case 0: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 1: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 2: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 3: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 4: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 5: 
				return <Content pageId={page} nextPage={nextPage}/>
			case 6: 
				return <Quiz pageId={page} responses={responses} setResponses={setResponses} nextPage={nextPage}/>
			case 7: 
				return <Quiz pageId={page} responses={responses} setResponses={setResponses} nextPage={nextPage}/>
			case 8: 
				return <Quiz pageId={page} responses={responses} setResponses={setResponses} nextPage={nextPage}/>
			case 9: 
				return <Quiz pageId={page} responses={responses} setResponses={setResponses} nextPage={nextPage}/>
			case 10: 
				return <Quiz pageId={page} responses={responses} setResponses={setResponses} nextPage={nextPage}/>
			case 11: 
				return <Result pageId={page} score={responses.filter(Boolean).length} goToPage={goToPage} />	
			default:
				return <Content pageId={page} nextPage={nextPage}/>
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
