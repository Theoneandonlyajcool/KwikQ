import styled from "styled-components";

export const Loginbackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

    .loginrap{
        width: 88%;
        height: 90%;
        /* background: red; */
        display: flex;
        border-radius: 5px;
        box-shadow: 
        0px 35px 77px 0px #0000001A,
        0px 140px 140px 0px #00000017,
        0px 315px 189px 0px #0000000D,
        0px 561px 224px 0px #00000003,
        0px 876px 245px 0px #00000000;
    

    

        .login_context{
            width: 55%;
            height: 100%;
            /* background: red; */
            /* padding: 30px; */
            border-radius: 5px; 

            .loginlogo{
                width: 35%;
                height: 15%;
                background: white;
                display: flex;
                justify-content: start;

                .imagestyled{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /* background: black; */
                }
            }

            .aligment_to_logo{
                width: 100%;
                height: 80%;
                padding-left: 40px;
                padding-top: 5px;
                padding-right: 40px;
                padding-bottom: 20px;
                display: flex;
                flex-direction: column;
                gap: 5px;


                .singintext{
                    width: 100%;
                    height: 15%;
                    /* background: blue; */
                    font-family: "Inter", sans-serif;

                    .text1{
                        font-size: 39px;
                        font-weight: 700;
                        line-height: 100%;
                        font-style: Bold;
                    }

                    .text2{
                        font-size: 11px;
                        font-weight: 400;
                        line-height: 150%;
                        font-style: Regular; 
                    }
                }


                .frominfor{
                    width: 100%;
                    height: 85%;
                    /* background: gold; */
                    font-family: Inter;
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    gap: 7.5px;

                    .inputstyled{
                        width: 100%;
                        height: 3rem;
                        border-radius: 11.29px;
                        border: 0.71px solid #848181;
                        padding: 14.11px;
                        background: #EEEEEE;
                        font-family: Inter;
                        font-weight: 400;
                        font-style: Regular;
                        font-size: 11px;
                        line-height: 200%;
                        letter-spacing: 0%;

                    }
                    .inputstyled2{
                        width: 95%;
                        height: 2.9rem;
                        /* border-radius: none; */
                        border-radius: 11.29px;
                        /* border: 0.71px solid #848181; */
                        border: none;
                        outline: none;
                        padding: 14.11px;
                        background: #EEEEEE;
                        font-family: Inter;
                        font-weight: 400;
                        font-style: Regular;
                        font-size: 11px;
                        line-height: 200%;
                        letter-spacing: 0%;
                        

                    }

                    .for_eye1{
                        width: 100%;
                        height: 3rem;
                        border-radius: 11.29px;
                        border: 0.71px solid #848181;
                        display: flex;
                        font-size: 20px;
                        align-items: center;
                        outline: 3px;
                        background: #EEEEEE;   
                    }

                    .forgetpass{
                        width: 100%;
                        height: 22px;
                        background: white;
                        display: flex;
                        justify-content: space-between;


                        .checkbox-rpass{
                            width: 156px;
                            height: 22px;
                            /* background: red; */
                            display: flex;
                            align-items: center;
                            font-family: Inter;
                            font-weight: 400;
                            font-style: Regular;
                            font-size: 11px;
                            line-height: 200%;
                            letter-spacing: 0%;
                            gap: 5px;

                            .checkbox{
                                width: 14px;
                                height: 14px;
                            }
                        }
                        
                        .Forgot_password{
                            width: 110px;
                            height: 22px;
                            font-family: Inter;
                            font-weight: 400;
                            font-style: Regular;
                            font-size: 11px;
                            line-height: 200%;
                            letter-spacing: 0%;
                            color: #303BFF;
                            /* background: red; */
                            display: flex;
                            justify-content: end;
                            cursor: pointer;
                        }
                    }


                    .google_or{
                        width: 100%;
                        height: 73px;
                        display: flex;
                        flex-direction: column;
                        gap: 2px;
                        background: white;


                        .or_{
                            width: 100%;
                            height: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            /* background: brown; */
                            font-family: Inter;
                            font-weight: 400;
                            font-style: Regular;
                            font-size: 14px;
                            line-height: 100%;
                            letter-spacing: 0%;
                            text-align: center;
                            color: #000000;

                        }

                        .googlelink{
                            width: 100%;
                            height: 48px;
                            border-radius: 11px;
                            border: 0.5px solid #00000033;
                            font-family: Inter;
                            font-weight: 400;
                            font-style: Regular;
                            font-size: 14px;
                            line-height: 150%;
                            letter-spacing: 0%;
                            /* background: red; */
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 7px;
                            cursor: pointer;

                            .gogole_icon{
                                font-size: 22px;
                            }

                        }
                    }

                    .btn{
                        width: 100%;
                        height: 50px;
                        padding: 14px;
                        border-radius: 14px;
                        background: #303BFF;
                        color: white;
                        outline: none;
                        border: none;
                        font-family: Inter;
                        font-weight: 600;
                        font-style: Semi Bold;
                        font-size: 20px;
                        line-height: 100%;
                        letter-spacing: 0%;
                        cursor: pointer;
                    }

                    .linksignup{
                        width: 100%;
                        height: 25px;
                        font-family: Inter;
                        font-weight: 400;
                        font-style: Regular;
                        font-size: 13px;
                        letter-spacing: 0%;
                        text-align: center;
                        background: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 3px;

                        .linkssignup{
                            color: #303BFF;
                            cursor: pointer;
                        }

                    }
                }
            }
        }


        .imagelogin{
            width: 45%;
            height: 100%;
            background: #303BFF;
            display: flex;
            justify-content: center;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;

            .holdimageandtext{
                width: 80%;
                height: 80%;
                /* background: red; */
                margin-top: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                
                .imageholder{
                    width: 80%;
                    height: 73%;
                    background: white;
                    border-radius: 50%;
                    padding: 25px;
                
                    .imagestyled2{
                        width: 100%;
                        height: 95%;
                        /* border-radius: 50%; */
                        object-fit: contain;
                    }
                }

                .text_image{
                    width: 100%;
                    height: 15%;
                    /* background: gray; */
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    font-family: "Inter", sans-serif;
                    color: white;
                    gap: 5px;


                    p{
                    font-size: 22px;
                    font-weight: 600;
                    line-height: 110%;
                    font-style: Semi Bold;
                    }

                    span{
                    font-size: 12px;
                        font-weight: 400;
                        line-height: 150%;
                        font-style: Regular; 
                    }
                }
            }

            
        }
    }
`;




