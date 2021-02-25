import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  > div {
    background: #fff;
    padding: 0.5rem 0;   
    height: 95px;
    margin: 7px 0 15px 0;
    display: inline;
    div{
        height: auto;
    }
    
  }
    .slick-slider.slick-initialized {
        button{
            &::before{
                display: none;
            }
        }
    }
      
  img {
    width: 187px;
    height: 100px;
    border-radius: 15px;
    margin-left: 10px;
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