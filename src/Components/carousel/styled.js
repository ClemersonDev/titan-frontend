import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  > div {
    background: #fff;
    padding: 0.5rem 0;   
    height: 95px;
    margin: 7px 0 15px 0;
  }
  img {
    width: 75px;
    height: 75px;
    border-radius: 50px;
    margin-left: 10px
  }

  .rec.rec-slider-container {
    height: auto;   
  }

  button.rec-arrow-left, button.rec-arrow-right{
    display: none;
  }

  button.rec-dot{
    display: none;
  }

  .slider-p {
    font-size: 18px;
    color: #4F4F4F;
  }
  

`

export const Slider = styled.div`


    height: 336px;
`