import styled from 'styled-components';

export const H2 = styled.h2`    
    font-size: 20px;
    color: #ed8931;
    margin-bottom: 20px;
    display: block;
    border-bottom: 1px dotted;
    text-align: left;
    width: 89%;
    margin: 18px auto;  
`    
export const Shelf = styled.div `
    
    .rec-carousel-wrapper{
        .rec-carousel {
            button.rec-arrow.rec {
                display: none;
            }
            .rec.rec-slider-container {
                margin: 0;
            }

            .rec-carousel-item-visible {
                position: relative;
            }      
        }
        .rec-pagination{
            button.rec-dot_active {
                background: #ed8931;
                box-shadow: 0 0 1px 3px #ed8931;
            }
        } 
    }    

    background-color: #fff;
    min-height: 360px;
    border: 1px solid #D3D3D3;
    box-shadow: 1px 2px 2px #d3d3d3;
    width: 90%;
    margin: auto;
    border-radius: 2px;
    position: relative;

    .shelf-container {

        .product-item {

            .product-item__top-box {
                .flags {
                    position: absolute;
                    background: #ed8931;
                    width: 120px;
                    padding: 2px;
                    margin-top: 30px;
                    left: 0;

                    p {
                        color: #fff;
                        font-weight: bold;
                        font-size: 20px;
                    }
                }

                a {
                    display: block;
                    text-decoration: none;
                    img {
                        padding: 10px 0;
                        max-width: 185px;
                        max-height: 185px;
                        margin: auto;
                    }
                }
            }
        }

        .product-item__price-box {

            .shelf_item-name {  
                div {
                    display: grid;
                    grid-template-columns: 21% 30%;
                    justify-content: center;
                    margin-top: 13px;
                }
                .new-price{
                    font-size: 22px;
                    color: #4F4F4F;
                }
                p.old-price{
                    font-size: 14px;
                    display: flex;
                    align-items: center;

                    span {
                        display: block;
                        margin-top: 10px;
                        font-size: 12px;
                        font-weigth: bold;
                        color: #ed8931;
                        margin: 0 4px;
                        &.old-box{
                            margin: 0;
                            text-decoration: line-through;
                        }
                        
                    }
                }
                

                a {
                    text-decoration: none;
                    color: #4F4F4F;

                    h3 {
                        font-size: 20px;
                        	
                    }

                   

                }
            }
        }

        .wishBtn {
            display: grid;
            grid-template-columns: 40% 66%;
            margin-top: 15px;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0 20px;

            .j-shelf__item-buy {

                border: 1px solid #D3D3D3;
                margin-right: 20px;
                width: 75%;
                border-radius: 3px;
                padding: 0px;

                input.qtd {
                    width: 60%;
                    padding: 7px 5px;
                    border: none
                }

                button {
                    border: none;
                    background-color: #fff;
                    cursor: pointer;

                    span {
                        font-size: 15px;
                    }
                }
            }

            .j-shel-item {
                text-decoration: none;
                padding: 4px;
                display: grid;
                grid-template-columns: 46% 16%;
                border: 1px solid #ed8931;
                border-radius: 3px;
                color: #ed8931;
                width: 100%;
                align-items: center;
                justify-content: center;

                svg {
                    margin: auto;
                    color: #ed8931;
                }
                
            }
        }        
        
    }
`