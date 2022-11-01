import React from 'react';

function Resume(){
    return(
        <section className=" my-5">
            <div>
                <h1 id='about'>Resume</h1>
                <p>Download Resume</p>
            </div>
            <div>
            <h1 id="about"> Front End Projects</h1>
            <div className="my-2"></div>
            <ul>Example 1</ul>
            <ul>Example 2</ul>
            <ul>Example 3</ul>
            </div>
            <div>
            <h1 id="about">Back End Projects</h1>
            <ul>Example 1</ul>
            <ul>Example 2</ul>
            <ul>Example 3</ul>
            </div>
        </section>
    );
}

export default Resume;