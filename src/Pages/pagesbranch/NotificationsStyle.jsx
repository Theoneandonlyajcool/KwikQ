import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const NotificationsContainer = styled.div`
  width: 100%;
  height: auto;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &.active {
    opacity: 1;
    max-height: 5000px;
  }

  @media ${device.android} {
    gap: 18px;
  }

  @media ${device.iphone} {
    gap: 18px;
  }

  @media ${device.tablet} {
    gap: 20px;
  }

  @media ${device.desktop} {
    gap: 20px;
  }

  .notifications_section {
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

    .section_header {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 25px;

      @media ${device.android} {
        margin-bottom: 20px;
      }

      @media ${device.iphone} {
        margin-bottom: 20px;
      }

      @media ${device.tablet} {
        margin-bottom: 22px;
      }

      @media ${device.desktop} {
        margin-bottom: 25px;
      }

      .section_icon {
        font-size: 24px;
        color: #10b981;

        @media ${device.android} {
          font-size: 22px;
        }

        @media ${device.iphone} {
          font-size: 22px;
        }

        @media ${device.tablet} {
          font-size: 23px;
        }

        @media ${device.desktop} {
          font-size: 24px;
        }
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

    .notifications_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;

      .notification_item {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #f3f4f6;

        @media ${device.android} {
          padding: 18px 0;
          flex-direction: row;
          gap: 15px;
        }

        @media ${device.iphone} {
          padding: 18px 0;
          flex-direction: row;
          gap: 15px;
        }

        @media ${device.tablet} {
          padding: 18px 0;
        }

        @media ${device.desktop} {
          padding: 20px 0;
        }

        &:last-child {
          border-bottom: none;
        }

        .notif_info {
          width: 85%;
          height: auto;

          @media ${device.android} {
            width: 75%;
          }

          @media ${device.iphone} {
            width: 75%;
          }

          @media ${device.tablet} {
            width: 80%;
          }

          @media ${device.desktop} {
            width: 85%;
          }

          .notif_title {
            font-family: Inter;
            font-weight: 600;
            font-style: Semi Bold;
            font-size: 15px;
            line-height: 140%;
            color: #1f2937;
            margin: 0;
            margin-bottom: 5px;

            @media ${device.android} {
              font-size: 14px;
            }

            @media ${device.iphone} {
              font-size: 14px;
            }

            @media ${device.tablet} {
              font-size: 14px;
            }

            @media ${device.desktop} {
              font-size: 15px;
            }
          }

          .notif_description {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 13px;
            line-height: 150%;
            color: #6b7280;
            margin: 0;

            @media ${device.android} {
              font-size: 12px;
            }

            @media ${device.iphone} {
              font-size: 12px;
            }

            @media ${device.tablet} {
              font-size: 12px;
            }

            @media ${device.desktop} {
              font-size: 13px;
            }
          }
        }

        .toggle_switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;

          @media ${device.android} {
            width: 40px;
            height: 22px;
          }

          @media ${device.iphone} {
            width: 40px;
            height: 22px;
          }

          @media ${device.tablet} {
            width: 42px;
            height: 23px;
          }

          @media ${device.desktop} {
            width: 44px;
            height: 24px;
          }

          input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .toggle_slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #e5e7eb;
            transition: 0.3s;
            border-radius: 34px;

            &:before {
              position: absolute;
              content: "";
              height: 18px;
              width: 18px;
              left: 3px;
              bottom: 3px;
              background-color: white;
              transition: 0.3s;
              border-radius: 50%;

              @media ${device.android} {
                height: 16px;
                width: 16px;
              }

              @media ${device.iphone} {
                height: 16px;
                width: 16px;
              }

              @media ${device.tablet} {
                height: 17px;
                width: 17px;
              }

              @media ${device.desktop} {
                height: 18px;
                width: 18px;
              }
            }
          }

          input:checked + .toggle_slider {
            background-color: #1f2937;
          }

          input:checked + .toggle_slider:before {
            transform: translateX(20px);

            @media ${device.android} {
              transform: translateX(18px);
            }

            @media ${device.iphone} {
              transform: translateX(18px);
            }

            @media ${device.tablet} {
              transform: translateX(19px);
            }

            @media ${device.desktop} {
              transform: translateX(20px);
            }
          }
        }
      }
    }
  }

  .alert_thresholds_section {
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

    .section_header {
      width: 100%;
      height: auto;
      margin-bottom: 25px;

      @media ${device.android} {
        margin-bottom: 20px;
      }

      @media ${device.iphone} {
        margin-bottom: 20px;
      }

      @media ${device.tablet} {
        margin-bottom: 22px;
      }

      @media ${device.desktop} {
        margin-bottom: 25px;
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

    .thresholds_grid {
      width: 100%;
      height: auto;
      display: flex;
      gap: 20px;

      @media ${device.android} {
        flex-direction: column;
        gap: 18px;
      }

      @media ${device.iphone} {
        flex-direction: column;
        gap: 18px;
      }

      @media ${device.tablet} {
        flex-direction: row;
        gap: 18px;
      }

      @media ${device.desktop} {
        flex-direction: row;
        gap: 20px;
      }

      .threshold_field {
        width: 50%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media ${device.android} {
          width: 100%;
        }

        @media ${device.iphone} {
          width: 100%;
        }

        @media ${device.tablet} {
          width: 50%;
        }

        @media ${device.desktop} {
          width: 50%;
        }

        .threshold_label {
          font-family: Inter;
          font-weight: 500;
          font-style: Medium;
          font-size: 13px;
          line-height: 140%;
          color: #1f2937;

          @media ${device.android} {
            font-size: 12px;
          }

          @media ${device.iphone} {
            font-size: 12px;
          }

          @media ${device.tablet} {
            font-size: 12px;
          }

          @media ${device.desktop} {
            font-size: 13px;
          }
        }

        .threshold_input_wrapper {
          width: 100%;
          height: 45px;
          display: flex;
          align-items: center;
          background: #f9fafb;
          border-radius: 8px;
          padding-right: 14px;

          @media ${device.android} {
            height: 42px;
            padding-right: 12px;
          }

          @media ${device.iphone} {
            height: 42px;
            padding-right: 12px;
          }

          @media ${device.tablet} {
            height: 43px;
            padding-right: 12px;
          }

          @media ${device.desktop} {
            height: 45px;
            padding-right: 14px;
          }

          .threshold_input {
            width: 70%;
            height: 100%;
            padding: 12px 14px;
            background: transparent;
            border: none;
            outline: none;
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 140%;
            color: #6b7280;

            @media ${device.android} {
              font-size: 13px;
              padding: 10px 12px;
            }

            @media ${device.iphone} {
              font-size: 13px;
              padding: 10px 12px;
            }

            @media ${device.tablet} {
              font-size: 13px;
            }

            @media ${device.desktop} {
              font-size: 14px;
            }
          }

          .threshold_unit {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 140%;
            color: #6b7280;

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
        }
      }
    }
  }
`;
