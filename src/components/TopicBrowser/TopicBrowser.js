import React, { Component } from 'react';

import Sum from '../Topics/Sum';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';


const TopicBrowser = () => {
    return (
        <div>
        <Palindrome />
        <FilterObject />
        <FilterString />
        <EvenAndOdd />   
        <Sum />
        </div>
    )
}

export default TopicBrowser;
