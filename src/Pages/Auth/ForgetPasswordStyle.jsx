import styled from "styled-components";

export const Forgetpasswordbackgroud =styled.div`
    width: 100%;
    height: 100vh;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;

    .rapperfp{
        width: 90%;
        height: 100%;
        background: white;
        position: relative;
        display: flex;
        justify-content: center;


        .logofg{
            width: 20%;
            height: 25%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 457;
            /* background: black; */
            display: flex;
            justify-content: center;
            align-items: center;

            .logfgrap{
                width: 100%;
                height: 60%;
                background: white;

                .imageFG{
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
                
            }
        }

        .Forgetpassword{
            width: 60%;
            height: 100%;
            /* background: skyblue; */
            display: flex;
            justify-content: center;
            justify-content: end;
            align-items: center;
            flex-direction: column-reverse;

            .body_fg{
                width: 90%;
                height: 80%;
                background: white;
                display: flex;
                align-items: center;
                flex-direction: column;

                .FG_text{
                    width: 100%;
                    height: 28%;
                    /* background: brown; */
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    .FG_icon{
                        width: 8%;
                        height: 35%;
                        border-radius: 10px;
                        background: white;
                        border: 1.5px solid #000000;
                        font-size: 24px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                    }

                    .FG_1{
                        font-family: Inter;
                        font-weight: 600;
                        font-style: Semi Bold;
                        font-size: 39px;
                        line-height: 150%;
                        letter-spacing: 0%;
                        text-align: center;

                    }

                    .FG_2{
                        font-family: Inter;
                        font-weight: 400;
                        font-style: Regular;
                        font-size: 16px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        text-align: center;

                    }
                }

                .FG_Input{
                    width: 100%;
                    height: 48%;
                    /* background: green; */
                    font-family: Inter;
                    font-weight: 500;
                    font-style: Medium;
                    font-size: 16px;
                    line-height: 200%;
                    letter-spacing: 0%;
                    gap: 10.2px;
                    display: flex;
                    flex-direction: column;



                    .FG_email{
                        width: 100%;
                        height: 25%;
                        font-family: Inter;
                        font-weight: 500;
                        font-style: Medium;
                        font-size: 13px;
                        line-height: 140%;
                        letter-spacing: 0%;
                        padding: 5px;
                        border: 0.52px solid #848181;
                        color: #848181;
                        border-radius: 5.21px;
                        background: #ffffff;
                        outline: none
                    }

                    .FG_Btn1rap{
                        width: 100%;
                        height: 25%;
                        border-radius: 5.21px;
                        outline: none;
                        border: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 8px;


                        .FG_Btn2{
                            width: 55%;
                            height: 100%;
                            background: #303bff;
                            border-radius: 5.21px;
                            cursor: pointer;
                            border: none;
                            font-family: Inter;
                            font-weight: 500;
                            font-style: Medium;
                            font-size: 20px;
                            line-height: 140%;
                            letter-spacing: 0%;
                            color: white;
                        }
                    }

                    .FG_link{
                        width: 100%;
                        height: 15%;
                        background: #ffffff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        cursor: pointer;
                        font-family: Inter;
                        font-weight: 600;
                        font-style: Semi Bold;
                        font-size: 20px;
                        line-height: 140%;
                        letter-spacing: 0%;
                        text-align: center;
                        margin-top: 7px;

                    }
                    
                }
            }
        }
    }
`