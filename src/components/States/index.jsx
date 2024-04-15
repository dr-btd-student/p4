import React, { useState } from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
const States = () => {
	const [search, setSearch] = useState("");


	return (
	  <div className='states-container'>
		<h1>States:</h1>
		<p>Search state: </p>

		<input className='states-input' type="text" id="search" placeholder='Search for states here' name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
		
		<ul className='states-list'>
		  {window.models.states()
			.filter(searchState => searchState.toLowerCase().includes(search.toLowerCase()))
			.map((state, index) => (
			  <li className='states-item' key={index}>{state}</li>
			))}
		</ul>
	  </div>
	);
  };
export default States;