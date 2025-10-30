import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const SecurityContainer = styled.div`
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
    max-height: 10000px;
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

  .security_settings_section {
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
      gap: 12px;
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

      .section_icon_wrapper {
        width: 45px;
        height: 45px;
        min-width: 45px;
        background: #dbeafe;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media ${device.android} {
          width: 40px;
          height: 40px;
          min-width: 40px;
        }

        @media ${device.iphone} {
          width: 40px;
          height: 40px;
          min-width: 40px;
        }

        @media ${device.tablet} {
          width: 42px;
          height: 42px;
          min-width: 42px;
        }

        @media ${device.desktop} {
          width: 45px;
          height: 45px;
          min-width: 45px;
        }

        .section_icon {
          font-size: 24px;
          color: #3b82f6;

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

      .section_header_text {
        width: auto;
        height: auto;

        .section_title {
          font-family: Inter;
          font-weight: 600;
          font-style: Semi Bold;
          font-size: 18px;
          line-height: 130%;
          color: #1f2937;
          margin: 0;
          margin-bottom: 3px;

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

        .section_subtitle {
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
    }

    .security_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;

      .security_item {
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

        .security_item_info {
          width: 85%;
          height: auto;

          @media ${device.android} {
            width: 70%;
          }

          @media ${device.iphone} {
            width: 70%;
          }

          @media ${device.tablet} {
            width: 80%;
          }

          @media ${device.desktop} {
            width: 85%;
          }

          .security_title {
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

          .security_description {
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

        .session_timeout_dropdown {
          width: auto;
          height: 40px;
          padding: 10px 16px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;

          @media ${device.android} {
            height: 38px;
            padding: 8px 14px;
          }

          @media ${device.iphone} {
            height: 38px;
            padding: 8px 14px;
          }

          @media ${device.tablet} {
            height: 39px;
            padding: 9px 15px;
          }

          @media ${device.desktop} {
            height: 40px;
            padding: 10px 16px;
          }

          .timeout_value {
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 14px;
            line-height: 140%;
            color: #1f2937;

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

          .dropdown_icon {
            font-size: 16px;
            color: #6b7280;

            @media ${device.android} {
              font-size: 14px;
            }

            @media ${device.iphone} {
              font-size: 14px;
            }

            @media ${device.tablet} {
              font-size: 15px;
            }

            @media ${device.desktop} {
              font-size: 16px;
            }
          }
        }

        .toggle_switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
          flex-shrink: 0;

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

          input:focus + .toggle_slider {
            box-shadow: 0 0 1px #1f2937;
          }

          input:disabled + .toggle_slider {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }
    }
  }

  .danger_zone_section {
    width: 100%;
    height: auto;
    background: #fef2f2;
    border-radius: 12px;
    padding: 20px;
    border: 1.25px solid #fecaca;

    @media ${device.android} {
      padding: 18px;
    }

    @media ${device.iphone} {
      padding: 18px;
    }

    @media ${device.tablet} {
      padding: 18px;
    }

    @media ${device.desktop} {
      padding: 20px;
    }

    .danger_header {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;

      @media ${device.android} {
        margin-bottom: 8px;
      }

      @media ${device.iphone} {
        margin-bottom: 8px;
      }

      @media ${device.tablet} {
        margin-bottom: 9px;
      }

      @media ${device.desktop} {
        margin-bottom: 10px;
      }

      .danger_icon {
        font-size: 20px;
        color: #dc2626;

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

      .danger_title {
        font-family: Inter;
        font-weight: 600;
        font-style: Semi Bold;
        font-size: 16px;
        line-height: 140%;
        color: #dc2626;

        @media ${device.android} {
          font-size: 14px;
        }

        @media ${device.iphone} {
          font-size: 15px;
        }

        @media ${device.tablet} {
          font-size: 15px;
        }

        @media ${device.desktop} {
          font-size: 16px;
        }
      }
    }

    .danger_text {
      width: 100%;
      height: auto;
      font-family: Inter;
      font-weight: 400;
      font-style: Regular;
      font-size: 14px;
      line-height: 150%;
      color: #dc2626;
      margin: 0;
      margin-bottom: 15px;

      @media ${device.android} {
        font-size: 13px;
        margin-bottom: 12px;
      }

      @media ${device.iphone} {
        font-size: 13px;
        margin-bottom: 12px;
      }

      @media ${device.tablet} {
        font-size: 13px;
        margin-bottom: 13px;
      }

      @media ${device.desktop} {
        font-size: 14px;
        margin-bottom: 15px;
      }
    }

    .delete_organization_btn {
      width: auto;
      height: 40px;
      padding: 10px 18px;
      background: #dc2626;
      border: none;
      border-radius: 8px;
      outline: none;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-family: Inter;
      font-weight: 500;
      font-style: Medium;
      font-size: 14px;
      line-height: 140%;
      color: #ffffff;

      @media ${device.android} {
        width: 100%;
        height: 38px;
        font-size: 13px;
        justify-content: center;
      }

      @media ${device.iphone} {
        width: 100%;
        height: 38px;
        font-size: 13px;
        justify-content: center;
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

      .delete_icon {
        font-size: 18px;

        @media ${device.android} {
          font-size: 16px;
        }

        @media ${device.iphone} {
          font-size: 16px;
        }

        @media ${device.tablet} {
          font-size: 17px;
        }

        @media ${device.desktop} {
          font-size: 18px;
        }
      }

      &:hover {
        background: #b91c1c;
      }
    }
  }
`;