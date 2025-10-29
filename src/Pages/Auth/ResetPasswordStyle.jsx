import styled from "styled-components";

const device = {
  android: '(min-width: 360px)',
  iphone: '(min-width: 375px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
};

export const Resetpasswordbackground = styled.div`
    width: 100%;
    height: 100vh;
    /* background: red; */
    display: flex;
    justify-content: center;
    align-items: center;

    .rapperfp {
        width: 90%;
        height: 100%;
        background: white;
        position: relative;
        display: flex;
        justify-content: center;

        @media ${device.android} {
            width: 95%;
        }

        @media ${device.iphone} {
            width: 95%;
        }

        @media ${device.tablet} {
            width: 90%;
        }

        @media ${device.desktop} {
            width: 90%;
        }

        .logofg {
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

            @media ${device.android} {
                width: 35%;
                height: 15%;
            }

            @media ${device.iphone} {
                width: 35%;
                height: 15%;
            }

            @media ${device.tablet} {
                width: 25%;
                height: 20%;
            }

            @media ${device.desktop} {
                width: 20%;
                height: 25%;
            }

            .logfgrap {
                width: 100%;
                height: 60%;
                background: white;

                .imageFG {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; 
                }
            }
        }

        .ResetPassword {
            width: 60%;
            height: 100%;
            /* background: skyblue; */
            display: flex;
            justify-content: center;
            justify-content: end;
            align-items: center;
            flex-direction: column-reverse;

            @media ${device.android} {
                width: 100%;
            }

            @media ${device.iphone} {
                width: 100%;
            }

            @media ${device.tablet} {
                width: 80%;
            }

            @media ${device.desktop} {
                width: 60%;
            }

            .body_fg {
                width: 70%;
                height: 80%;
                background: white;
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 5px;

                @media ${device.android} {
                    width: 90%;
                    height: 85%;
                }

                @media ${device.iphone} {
                    width: 90%;
                    height: 85%;
                }

                @media ${device.tablet} {
                    width: 80%;
                    height: 82%;
                }

                @media ${device.desktop} {
                    width: 70%;
                    height: 80%;
                }

                .FG_text {
                    width: 100%;
                    height: 30%;
                    /* background: brown; */
                    display: flex;
                    align-items: center;
                    flex-direction: column;

                    .FG_icon {
                        width: 11%;
                        height: 35%;
                        border-radius: 10px;
                        background: white;
                        border: 1.5px solid #000000;
                        font-size: 28px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        @media ${device.android} {
                            width: 18%;
                            height: 28%;
                            font-size: 22px;
                        }

                        @media ${device.iphone} {
                            width: 18%;
                            height: 28%;
                            font-size: 24px;
                        }

                        @media ${device.tablet} {
                            width: 14%;
                            height: 32%;
                            font-size: 26px;
                        }

                        @media ${device.desktop} {
                            width: 11%;
                            height: 35%;
                            font-size: 28px;
                        }
                    }

                    .RP_rap {
                        width: 100%;
                        height: 60%;
                        /* background: gray; */
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: space-around;
                        /* gap: 15px; */

                        .FG_1 {
                            font-family: Inter;
                            font-weight: 600;
                            font-style: Semi Bold;
                            color: #222222;
                            font-size: 39px;
                            line-height: 150%;
                            letter-spacing: 0%;
                            text-align: center;

                            @media ${device.android} {
                                font-size: 24px;
                                line-height: 130%;
                            }

                            @media ${device.iphone} {
                                font-size: 26px;
                                line-height: 130%;
                            }

                            @media ${device.tablet} {
                                font-size: 32px;
                                line-height: 140%;
                            }

                            @media ${device.desktop} {
                                font-size: 39px;
                                line-height: 150%;
                            }
                        }

                        .FG_2 {
                            font-family: Inter;
                            font-weight: 400;
                            font-style: Regular;
                            font-size: 16px;
                            line-height: 100%;
                            letter-spacing: 0%;
                            text-align: center;

                            @media ${device.android} {
                                font-size: 13px;
                                line-height: 120%;
                            }

                            @media ${device.iphone} {
                                font-size: 14px;
                                line-height: 120%;
                            }

                            @media ${device.tablet} {
                                font-size: 15px;
                                line-height: 110%;
                            }

                            @media ${device.desktop} {
                                font-size: 16px;
                                line-height: 100%;
                            }
                        }
                    }
                }

                .RP_Input {
                    width: 100%;
                    height: 58%;
                    /* background: green; */
                    font-family: Inter;
                    font-weight: 500;
                    font-style: Medium;
                    font-size: 17px;
                    line-height: 200%;
                    letter-spacing: 0%;
                    gap: 5.2px;
                    display: flex;
                    flex-direction: column;

                    @media ${device.android} {
                        height: 60%;
                        gap: 8px;
                    }

                    @media ${device.iphone} {
                        height: 60%;
                        gap: 8px;
                    }

                    @media ${device.tablet} {
                        height: 59%;
                        gap: 6px;
                    }

                    @media ${device.desktop} {
                        height: 58%;
                        gap: 5.2px;
                    }

                    .for_eye1 {
                        width: 100%;
                        height: 3.5rem;
                        border-radius: 5.29px;
                        border: 0.71px solid #848181;
                        display: flex;
                        font-size: 20px;
                        align-items: center;
                        outline: 3px;
                        background: #eeeeee;

                        @media ${device.android} {
                            height: 3rem;
                            font-size: 18px;
                        }

                        @media ${device.iphone} {
                            height: 3rem;
                            font-size: 18px;
                        }

                        @media ${device.tablet} {
                            height: 3.3rem;
                            font-size: 19px;
                        }

                        @media ${device.desktop} {
                            height: 3.5rem;
                            font-size: 20px;
                        }

                        .RP_password1 {
                            width: 93%;
                            height: 100%;
                            font-family: Inter;
                            font-weight: 500;
                            font-style: Medium;
                            font-size: 13px;
                            line-height: 140%;
                            letter-spacing: 0%;
                            padding: 5px;
                            color: #848181;
                            border-radius: 5.21px;
                            background: none;
                            border: none;
                            outline: none;

                            @media ${device.android} {
                                font-size: 12px;
                            }

                            @media ${device.iphone} {
                                font-size: 12px;
                            }

                            @media ${device.tablet} {
                                font-size: 13px;
                            }

                            @media ${device.desktop} {
                                font-size: 13px;
                            }
                        }
                    }

                    .for_eye2 {
                        width: 100%;
                        height: 3.5rem;
                        border-radius: 5.29px;
                        border: 0.71px solid #848181;
                        display: flex;
                        font-size: 20px;
                        align-items: center;
                        outline: 3px;
                        background: #eeeeee;

                        @media ${device.android} {
                            height: 3rem;
                            font-size: 18px;
                        }

                        @media ${device.iphone} {
                            height: 3rem;
                            font-size: 18px;
                        }

                        @media ${device.tablet} {
                            height: 3.3rem;
                            font-size: 19px;
                        }

                        @media ${device.desktop} {
                            height: 3.5rem;
                            font-size: 20px;
                        }

                        .RP_password {
                            width: 93%;
                            height: 100%;
                            font-family: Inter;
                            font-weight: 500;
                            font-style: Medium;
                            font-size: 13px;
                            line-height: 140%;
                            letter-spacing: 0%;
                            padding: 5px;
                            color: #848181;
                            border-radius: 5.21px;
                            background: none;
                            /* border: 0.71px solid #848181; */
                            outline: none;
                            border: none;

                            @media ${device.android} {
                                font-size: 12px;
                            }

                            @media ${device.iphone} {
                                font-size: 12px;
                            }

                            @media ${device.tablet} {
                                font-size: 13px;
                            }

                            @media ${device.desktop} {
                                font-size: 13px;
                            }
                        }
                    }

                    .FG_Btn1rap {
                        width: 100%;
                        height: 18%;
                        border-radius: 5.21px;
                        outline: none;
                        border: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 12px;

                        @media ${device.android} {
                            height: 16%;
                            margin-top: 8px;
                        }

                        @media ${device.iphone} {
                            height: 16%;
                            margin-top: 8px;
                        }

                        @media ${device.tablet} {
                            height: 17%;
                            margin-top: 10px;
                        }

                        @media ${device.desktop} {
                            height: 18%;
                            margin-top: 12px;
                        }

                        .FG_Btn2 {
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

                            @media ${device.android} {
                                width: 70%;
                                font-size: 16px;
                            }

                            @media ${device.iphone} {
                                width: 70%;
                                font-size: 16px;
                            }

                            @media ${device.tablet} {
                                width: 60%;
                                font-size: 18px;
                            }

                            @media ${device.desktop} {
                                width: 55%;
                                font-size: 20px;
                            }
                        }
                    }

                    .FG_link {
                        width: 100%;
                        height: 15%;
                        /* background: red; */
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
                        color: black;

                        @media ${device.android} {
                            font-size: 14px;
                            margin-top: 5px;
                        }

                        @media ${device.iphone} {
                            font-size: 15px;
                            margin-top: 5px;
                        }

                        @media ${device.tablet} {
                            font-size: 18px;
                            margin-top: 6px;
                        }

                        @media ${device.desktop} {
                            font-size: 20px;
                            margin-top: 7px;
                        }

                        .RP_linkrap {
                            width: 40%;
                            height: 100%;
                            /* background: black; */
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 10px;
                            color: black;
                            text-decoration: none;

                            @media ${device.android} {
                                width: 60%;
                            }

                            @media ${device.iphone} {
                                width: 60%;
                            }

                            @media ${device.tablet} {
                                width: 50%;
                            }

                            @media ${device.desktop} {
                                width: 40%;
                            }
                        }
                    }
                }
            }
        }
    }
`