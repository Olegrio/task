import React, { Component } from 'react';

import styled from 'styled-components';
import {connect} from 'react-redux';

import Slider from 'react-slick';
import OneUser from '../OneUser/OneUser';


const Wrapper = styled.div`
    text-align:center;
    width:90%;
    margin: 10px auto 30px auto ;
   
    
    
`;

const Page = styled.div`
        min-width:300px
`;

class SlideView extends React.Component {
    constructor (props){
        super(props);
      this.arrayOneUser = this.props.stateSlideView.map((data, key)=> <Page><OneUser  key={key} state={data} /></Page> )
  }

render(){

    return(

            <Wrapper>

                <Slider
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                    arrows={true}
                >
                { this.arrayOneUser}

                </Slider>
            </Wrapper>
    );
}

}

export default connect(
    state => ({
        stateSlideView: state.USER_PROFILE
  }),
    dispatch => ({
        addValue: (type,value) => { 
          dispatch({type: type, text: value });
        }
  })
    )(SlideView);