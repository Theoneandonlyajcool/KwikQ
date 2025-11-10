import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const ProfileContainer = styled.div`
   .subscription_plan_section {
    width: 100%;
    height: auto;
    background: #ffffff;
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #e5e7eb;

    @media ${device.android} {
      padding: 18px;
    }

    @media ${device.iphone} {
      padding: 18px;
    }

    @media ${device.tablet} {
      padding: 20px;
    }

    @media ${device.desktop} {
      padding: 24px;
    }

    .section_header_simple {
      width: 100%;
      height: auto;
      margin-bottom: 20px;

      @media ${device.android} {
        margin-bottom: 18px;
      }

      @media ${device.iphone} {
        margin-bottom: 18px;
      }

      @media ${device.tablet} {
        margin-bottom: 18px;
      }

      @media ${device.desktop} {
        margin-bottom: 20px;
      }

      .section_title {
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 18px;
        line-height: 130%;
        color: #1f2937;
        margin: 0;

        @media ${device.android} {
          font-size: 16px;
        }

        @media ${device.iphone} {
          font-size: 17px;
        }

        @media ${device.tablet} {
          font-size: 17px;
        }

        @media ${device.desktop} {
          font-size: 18px;
        }
      }
    }

    .subscription_card {
      width: 100%;
      height: auto;
      background: linear-gradient(135deg, #5b5fef 0%, #4a4ed1 100%);
      border-radius: 12px;
      padding: 24px;

      @media ${device.android} {
        padding: 18px;
      }

      @media ${device.iphone} {
        padding: 18px;
      }

      @media ${device.tablet} {
        padding: 20px;
      }

      @media ${device.desktop} {
        padding: 24px;
      }

      .subscription_card_content {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${device.android} {
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }

        @media ${device.iphone} {
          flex-direction: column;
          gap: 18px;
          align-items: flex-start;
        }

        @media ${device.tablet} {
          flex-direction: row;
        }

        @media ${device.desktop} {
          flex-direction: row;
        }

        .subscription_info {
          width: auto;
          height: auto;

          @media ${device.android} {
            width: 100%;
          }

          @media ${device.iphone} {
            width: 100%;
          }

          @media ${device.tablet} {
            width: auto;
          }

          @media ${device.desktop} {
            width: auto;
          }

          .subscription_name_badge {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;

            .subscription_name {
              font-family: Inter;
              font-weight: 600;
              font-style: Semi Bold;
              font-size: 20px;
              line-height: 130%;
              color: #ffffff;

              @media ${device.android} {
                font-size: 18px;
              }

              @media ${device.iphone} {
                font-size: 18px;
              }

              @media ${device.tablet} {
                font-size: 19px;
              }

              @media ${device.desktop} {
                font-size: 20px;
              }
            }

            .subscription_status {
              padding: 4px 10px;
              border-radius: 12px;
              background: rgba(255, 255, 255, 0.2);
              font-family: Inter;
              font-weight: 500;
              font-style: Medium;
              font-size: 12px;
              line-height: 140%;
              color: #ffffff;

              @media ${device.android} {
                font-size: 11px;
                padding: 3px 8px;
              }

              @media ${device.iphone} {
                font-size: 11px;
                padding: 3px 8px;
              }

              @media ${device.tablet} {
                font-size: 11px;
              }

              @media ${device.desktop} {
                font-size: 12px;
              }
            }
          }

          .subscription_features {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 150%;
            color: rgba(255, 255, 255, 0.9);
            margin: 0;
            margin-bottom: 8px;

            @media ${device.android} {
              font-size: 13px;
            }

            @media ${device.iphone} {
              font-size: 13px;
            }

            @media ${device.tablet} {
              font-size: 13px;
            }

            @media ${device.desktop} {
              font-size: 14px;
            }
          }

          .subscription_price {
            font-family: Inter;
            font-weight: 600;
            font-style: Semi Bold;
            font-size: 24px;
            line-height: 130%;
            color: #ffffff;
            margin: 0;

            @media ${device.android} {
              font-size: 20px;
            }

            @media ${device.iphone} {
              font-size: 20px;
            }

            @media ${device.tablet} {
              font-size: 22px;
            }

            @media ${device.desktop} {
              font-size: 24px;
            }
          }
        }

        .change_plan_btn {
          width: auto;
          height: 40px;
          padding: 10px 20px;
          background: #ffffff;
          border-radius: 8px;
          border: none;
          outline: none;
          cursor: pointer;
          font-family: Inter;
          font-weight: 500;
          font-style: Medium;
          font-size: 14px;
          line-height: 140%;
          color: #5b5fef;

          @media ${device.android} {
            width: 100%;
            height: 38px;
            font-size: 13px;
          }

          @media ${device.iphone} {
            width: 100%;
            height: 38px;
            font-size: 13px;
          }

          @media ${device.tablet} {
            width: auto;
            height: 39px;
            font-size: 13px;
          }

          @media ${device.desktop} {
            width: auto;
            height: 40px;
            font-size: 14px;
          }

          &:hover {
            background: #f3f4f6;
          }
        }
      }
    }
  }

 
`;