import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
  largeDesktop: "(min-width: 1440px)",
  extraLargeDesktop: "(min-width: 1920px)",
  smallMobile: "(max-width: 359px)",
  landscape: "(max-height: 600px) and (orientation: landscape)",
};

export const Loginbackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ADDED: Small Mobile Devices */
  @media ${device.smallMobile} {
    height: 100vh;
    align-items: flex-start;
    padding-top: 1rem;
  }

  /* ADDED: Landscape Mobile */
  @media ${device.landscape} {
    height: auto;
    min-height: 100vh;
    padding: 1rem 0;
  }

  .loginrap {
    width: 88%;
    height: 90%;
    /* background: green; */
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 35px 77px 0px #0000001a, 0px 140px 140px 0px #00000017,
      0px 315px 189px 0px #0000000d, 0px 561px 224px 0px #00000003,
      0px 876px 245px 0px #00000000;

    /* ADDED: Large Desktop */
    @media ${device.largeDesktop} {
      width: 80%;
      height: 85%;
    }

    /* ADDED: Extra Large Desktop */
    @media ${device.extraLargeDesktop} {
      width: 70%;
      height: 80%;
      max-width: 1400px;
    }

    @media ${device.android} {
      width: 100%;
      height: 100%;
      flex-direction: column;
      border-radius: 0;
      box-shadow: none;
    }

    @media ${device.iphone} {
      width: 100%;
      height: 100%;
      flex-direction: column;
      border-radius: 0;
      box-shadow: none;
    }

    @media ${device.tablet} {
      width: 95%;
      height: 95%;
      flex-direction: row;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
    }

    @media ${device.desktop} {
      width: 88%;
      height: 90%;
      flex-direction: row;
    }

    .login_context {
      width: 55%;
      height: 100%;
      /* background: red; */
      border-radius: 5px;

      /* ADDED: Large Desktop */
      @media ${device.largeDesktop} {
        width: 50%;
      }

      /* ADDED: Extra Large Desktop */
      @media ${device.extraLargeDesktop} {
        width: 45%;
      }

      @media ${device.android} {
        width: 100%;
        height: 100%;
      }

      @media ${device.iphone} {
        width: 100%;
        height: 100%;
      }

      @media ${device.tablet} {
        width: 60%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      @media ${device.desktop} {
        width: 55%;
        height: 100%;
      }

      .loginlogo {
        width: 35%;
        height: 15%;
        /* background: white; */
        display: flex;
        justify-content: start;

        /* ADDED: Large Desktop */
        @media ${device.largeDesktop} {
          width: 30%;
          height: 12%;
        }

        /* ADDED: Extra Large Desktop */
        @media ${device.extraLargeDesktop} {
          width: 25%;
          height: 10%;
        }

        @media ${device.android} {
          width: 35%;
          height: 10%;
          padding-left: 0px;
          padding-top: 10px;
        }

        @media ${device.iphone} {
          width: 35%;
          height: 10%;
          padding-left: 0px;
          padding-top: 10px;
        }

        @media ${device.tablet} {
          width: 40%;
          height: 12%;
          padding-left: 0px;
        }

        @media ${device.desktop} {
          width: 35%;
          height: 15%;
          padding: 0px;
        }

        .imagestyled {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* background: black; */
        }
      }

      .aligment_to_logo {
        width: 100%;
        height: 80%;
        padding-left: 40px;
        padding-top: 5px;
        padding-right: 40px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        /* ADDED: Large Desktop */
        @media ${device.largeDesktop} {
          padding-left: 50px;
          padding-right: 50px;
        }

        /* ADDED: Extra Large Desktop */
        @media ${device.extraLargeDesktop} {
          padding-left: 60px;
          padding-right: 60px;
          gap: 8px;
        }

        /* ADDED: Small Mobile */
        @media ${device.smallMobile} {
          padding: 15px;
          gap: 8px;
        }

        @media ${device.android} {
          height: auto;
          padding: 20px;
          gap: 10px;
        }

        @media ${device.iphone} {
          height: auto;
          padding: 20px;
          gap: 10px;
        }

        @media ${device.tablet} {
          padding: 30px;
          height: 85%;
        }

        @media ${device.desktop} {
          padding-left: 40px;
          padding-right: 40px;
          height: 80%;
        }

        .singintext {
          width: 100%;
          height: 18%;
          /* background: blue; */
          font-family: "Inter", sans-serif;

          /* ADDED: Large Desktop */
          @media ${device.largeDesktop} {
            height: 15%;
          }

          /* ADDED: Extra Large Desktop */
          @media ${device.extraLargeDesktop} {
            height: 12%;
          }

          @media ${device.android} {
            height: auto;
            margin-bottom: 15px;
          }

          @media ${device.iphone} {
            height: auto;
            margin-bottom: 15px;
          }

          @media ${device.tablet} {
            height: auto;
            margin-bottom: 10px;
          }

          @media ${device.desktop} {
            height: 18%;
          }

          .text1 {
            font-size: 35px;
            font-weight: 700;
            line-height: 100%;
            font-style: Bold;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              font-size: 40px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              font-size: 45px;
            }

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              font-size: 26px;
            }

            @media ${device.android} {
              font-size: 28px;
              line-height: 110%;
            }

            @media ${device.iphone} {
              font-size: 30px;
              line-height: 110%;
            }

            @media ${device.tablet} {
              font-size: 34px;
            }

            @media ${device.desktop} {
              font-size: 39px;
            }
          }

          .text2 {
            font-size: 11px;
            font-weight: 400;
            line-height: 150%;
            font-style: Regular;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              font-size: 12px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              font-size: 13px;
            }

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              font-size: 11px;
            }

            @media ${device.android} {
              font-size: 12px;
              line-height: 140%;
            }

            @media ${device.iphone} {
              font-size: 12px;
              line-height: 140%;
            }

            @media ${device.tablet} {
              font-size: 11px;
            }

            @media ${device.desktop} {
              font-size: 11px;
            }
          }
        }

        .frominfor {
          width: 100%;
          height: 85%;
          /* background: gold; */
          font-family: Inter;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          gap: 15.5px;

          /* ADDED: Large Desktop */
          @media ${device.largeDesktop} {
            gap: 18px;
          }

          /* ADDED: Extra Large Desktop */
          @media ${device.extraLargeDesktop} {
            gap: 20px;
          }

          /* ADDED: Small Mobile */
          @media ${device.smallMobile} {
            gap: 12px;
          }

          @media ${device.android} {
            height: auto;
            gap: 12px;
          }

          @media ${device.iphone} {
            height: auto;
            gap: 12px;
          }

          @media ${device.tablet} {
            gap: 10px;
          }

          @media ${device.desktop} {
            height: 85%;
            /* background: blue; */
            gap: 15.5px;
          }

          .inpuled {
            width: 100%;
            min-height: 3rem;
            border-radius: 11.29px;
            border: 0.01px solid #84818182;
            padding: 11.11px;
            background: #eeeeee;
            outline: none;
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 11px;
            line-height: 100%;
            letter-spacing: 0%;
            /* border: none; */

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              height: 3.2rem;
              font-size: 12px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              height: 3.5rem;
              font-size: 13px;
              padding: 13px;
            }

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: 2.8rem;
              font-size: 12px;
            }

            @media ${device.android} {
              height: 3.2rem;
              font-size: 14px;
              padding: 12px;
            }

            @media ${device.iphone} {
              height: 3.2rem;
              font-size: 14px;
              padding: 12px;
            }

            @media ${device.tablet} {
              height: 3rem;
              font-size: 12px;
            }

            @media ${device.desktop} {
              height: 3rem;
              font-size: 11px;
            }
          }

          .inputstyled2 {
            width: 95%;
            height: 2.9rem;
            border-radius: 11.29px;
            border: none;
            outline: none;
            padding: 14.11px;
            background: #eeeeee;
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 11px;
            line-height: 200%;
            letter-spacing: 0%;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              height: 3.1rem;
              font-size: 12px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              height: 3.3rem;
              font-size: 13px;
              padding: 15px;
            }

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: 2.7rem;
              font-size: 12px;
            }

            @media ${device.android} {
              height: 2.8rem;
              font-size: 14px;
              padding: 12px;
            }

            @media ${device.iphone} {
              height: 2.8rem;
              font-size: 14px;
              padding: 12px;
            }

            @media ${device.tablet} {
              height: 2.9rem;
              font-size: 12px;
            }

            @media ${device.desktop} {
              height: 2.9rem;
              font-size: 11px;
            }
          }

          .for_eye1 {
            width: 100%;
            height: 3rem;
            border-radius: 11.29px;
            border: 0.01px solid #84818182;
            display: flex;
            font-size: 20px;
            align-items: center;
            outline: 3px;
            background: #eeeeee;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              height: 3.2rem;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              height: 3.5rem;
              font-size: 22px;
            }

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: 2.8rem;
              font-size: 18px;
            }

            @media ${device.android} {
              height: 3.2rem;
              font-size: 22px;
            }

            @media ${device.iphone} {
              height: 3.2rem;
              font-size: 22px;
            }

            @media ${device.tablet} {
              height: 3rem;
              font-size: 20px;
            }

            @media ${device.desktop} {
              height: 3rem;
              font-size: 20px;
            }
          }

          .forgetpass {
            width: 100%;
            height: 22px;
            background: white;
            display: flex;
            justify-content: space-between;

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: auto;
              flex-direction: column;
              gap: 10px;
              align-items: center;
            }

            @media ${device.android} {
              height: auto;
              padding: 5px 0;
            }

            @media ${device.iphone} {
              height: auto;
              padding: 5px 0;
            }

            @media ${device.tablet} {
              height: 22px;
            }

            @media ${device.desktop} {
              height: 22px;
            }

            .checkbox-rpass {
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

              /* ADDED: Small Mobile */
              @media ${device.smallMobile} {
                width: 100%;
                justify-content: center;
              }

              @media ${device.android} {
                width: auto;
                font-size: 13px;
              }

              @media ${device.iphone} {
                width: auto;
                font-size: 13px;
              }

              @media ${device.tablet} {
                font-size: 12px;
              }

              @media ${device.desktop} {
                width: 156px;
                font-size: 11px;
              }

              .checkbox {
                width: 14px;
                height: 14px;

                /* ADDED: Small Mobile */
                @media ${device.smallMobile} {
                  width: 16px;
                  height: 16px;
                }

                @media ${device.android} {
                  width: 16px;
                  height: 16px;
                }

                @media ${device.iphone} {
                  width: 16px;
                  height: 16px;
                }
              }
            }

            .Forgot_password {
              width: 110px;
              height: 22px;
              font-family: Inter;
              font-weight: 400;
              font-style: Regular;
              font-size: 11px;
              line-height: 200%;
              letter-spacing: 0%;
              color: #303bff;
              /* background: red; */
              display: flex;
              justify-content: end;
              cursor: pointer;

              /* ADDED: Small Mobile */
              @media ${device.smallMobile} {
                width: 100%;
                justify-content: center;
              }

              @media ${device.android} {
                width: auto;
                font-size: 13px;
              }

              @media ${device.iphone} {
                width: auto;
                font-size: 13px;
              }

              @media ${device.tablet} {
                font-size: 12px;
              }

              @media ${device.desktop} {
                width: 110px;
                font-size: 11px;
              }
            }
          }

          .google_or {
            width: 100%;
            height: 73px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            background: white;

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: auto;
              gap: 10px;
            }

            @media ${device.android} {
              height: auto;
              gap: 8px;
            }

            @media ${device.iphone} {
              height: auto;
              gap: 8px;
            }

            @media ${device.tablet} {
              height: 73px;
              gap: 2px;
            }

            @media ${device.desktop} {
              height: 73px;
            }

            .or_ {
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

              /* ADDED: Small Mobile */
              @media ${device.smallMobile} {
                padding: 5px 0;
              }

              @media ${device.android} {
                height: auto;
                padding: 8px 0;
                font-size: 13px;
              }

              @media ${device.iphone} {
                height: auto;
                padding: 8px 0;
                font-size: 13px;
              }

              @media ${device.tablet} {
                font-size: 14px;
              }

              @media ${device.desktop} {
                height: 20px;
                font-size: 14px;
              }
            }

            .googlelink {
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

              /* ADDED: Small Mobile */
              @media ${device.smallMobile} {
                height: 3rem;
              }

              @media ${device.android} {
                height: 3.2rem;
                font-size: 14px;
              }

              @media ${device.iphone} {
                height: 3.2rem;
                font-size: 14px;
              }

              @media ${device.tablet} {
                height: 48px;
              }

              @media ${device.desktop} {
                height: 48px;
              }

              .gogole_icon {
                font-size: 22px;

                /* ADDED: Small Mobile */
                @media ${device.smallMobile} {
                  font-size: 20px;
                }

                @media ${device.android} {
                  font-size: 24px;
                }

                @media ${device.iphone} {
                  font-size: 24px;
                }
              }
            }
          }

          .btn {
            width: 100%;
            height: 50px;
            padding: 14px;
            border-radius: 14px;
            background: #303bff;
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
            margin-top: 45px;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              height: 55px;
              font-size: 22px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              height: 60px;
              font-size: 24px;
            }

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: 3.2rem;
              font-size: 18px;
              margin-top: 35px;
            }

            @media ${device.android} {
              height: 3.5rem;
              font-size: 18px;
            }

            @media ${device.iphone} {
              height: 3.5rem;
              font-size: 18px;
            }

            @media ${device.tablet} {
              height: 50px;
              font-size: 19px;
            }

            @media ${device.desktop} {
              height: 50px;
              font-size: 20px;
            }
          }

          .linksignup {
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

            /* ADDED: Small Mobile */
            @media ${device.smallMobile} {
              height: auto;
              padding: 20px 0;
              flex-direction: column;
              gap: 5px;
            }

            @media ${device.android} {
              height: auto;
              padding: 15px 0;
              font-size: 14px;
            }

            @media ${device.iphone} {
              height: auto;
              padding: 15px 0;
              font-size: 14px;
            }

            @media ${device.tablet} {
              height: 25px;
              font-size: 13px;
            }

            @media ${device.desktop} {
              height: 25px;
              font-size: 13px;
            }

            .linkssignup {
              color: #303bff;
              cursor: pointer;
            }
          }
        }
      }
    }

    .imagelogin {
      width: 45%;
      height: 100%;
      background: #303bff;
      display: flex;
      justify-content: center;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;

      /* ADDED: Large Desktop */
      @media ${device.largeDesktop} {
        width: 50%;
      }

      /* ADDED: Extra Large Desktop */
      @media ${device.extraLargeDesktop} {
        width: 55%;
      }

      @media ${device.android} {
        display: none;
      }

      @media ${device.iphone} {
        display: none;
      }

      @media ${device.tablet} {
        width: 40%;
        height: 85%;
        display: flex;
        align-items: center;
      }

      @media ${device.desktop} {
        width: 45%;
        height: 100%;
        display: flex;
      }

      .holdimageandtext {
        width: 80%;
        height: 80%;
        /* background: red; */
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        /* ADDED: Large Desktop */
        @media ${device.largeDesktop} {
          width: 75%;
          height: 75%;
        }

        /* ADDED: Extra Large Desktop */
        @media ${device.extraLargeDesktop} {
          width: 70%;
          height: 70%;
          margin-top: 60px;
        }

        @media ${device.tablet} {
          width: 85%;
          height: 75%;
          margin-top: 60px;
        }

        @media ${device.desktop} {
          width: 80%;
          height: 80%;
          margin-top: 50px;
        }

        .imageholder {
          width: 80%;
          height: 73%;
          background: white;
          border-radius: 50%;
          padding: 25px;

          /* ADDED: Large Desktop */
          @media ${device.largeDesktop} {
            width: 75%;
            height: 70%;
          }

          /* ADDED: Extra Large Desktop */
          @media ${device.extraLargeDesktop} {
            width: 70%;
            height: 65%;
            padding: 30px;
          }

          @media ${device.tablet} {
            width: 90%;
            height: 40%;
            padding: 20px;
          }

          @media ${device.desktop} {
            width: 80%;
            height: 73%;
            padding: 25px;
          }

          .imagestyled2 {
            width: 100%;
            height: 95%;
            /* border-radius: 50%; */
            object-fit: contain;
          }
        }

        .text_image {
          width: 100%;
          height: 15%;
          /* background: gray; */
          display: flex;
          align-items: center;
          flex-direction: column;
          font-family: "Inter", sans-serif;
          color: white;
          gap: 5px;

          /* ADDED: Large Desktop */
          @media ${device.largeDesktop} {
            height: 20%;
          }

          /* ADDED: Extra Large Desktop */
          @media ${device.extraLargeDesktop} {
            height: 25%;
            gap: 8px;
          }

          @media ${device.tablet} {
            height: auto;
          }

          p {
            font-size: 22px;
            font-weight: 600;
            line-height: 110%;
            font-style: Semi Bold;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              font-size: 26px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              font-size: 28px;
            }

            @media ${device.tablet} {
              font-size: 18px;
            }

            @media ${device.desktop} {
              font-size: 22px;
            }
          }

          span {
            font-size: 12px;
            font-weight: 400;
            line-height: 150%;
            font-style: Regular;

            /* ADDED: Large Desktop */
            @media ${device.largeDesktop} {
              font-size: 13px;
            }

            /* ADDED: Extra Large Desktop */
            @media ${device.extraLargeDesktop} {
              font-size: 14px;
            }

            @media ${device.tablet} {
              font-size: 11px;
              text-align: center;
            }

            @media ${device.desktop} {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
