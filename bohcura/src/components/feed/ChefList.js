import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';


// styled components
const Div = styled.div`
    display: block;
    //width: 90%;
    margin: 0 10%;
    text-align: left;
    alignment-baseline: bottom;
    //padding: 5%;
// `;

const Cards = styled.div`
    display: flex;
    margin: 0;
    justify-content: space-between;
    flex-wrap: wrap;

`;

const Title = styled.div`
    display: flex;
    text-align: left;
    justify-content: space-between;
`;


const ChefList = (props) => {
  useEffect(() => {
    props.getChefs();
    console.log("UseEffect has run!", props.chefs)
  }, []);

  return (
    <Div>
      <Title>
        <h1>Professional Chefs</h1>
        <div>search</div>
      </Title>

      <Cards>
        {props.chefs.map(chef => <ChefCard chef={chef}/>)}
      </Cards>

    </Div>
  )
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  }
};

export default connect(mapStateToProps, { getChefs })(ChefList);
