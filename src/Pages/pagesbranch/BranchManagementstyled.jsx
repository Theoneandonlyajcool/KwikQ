import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const BranchManagementContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  justify-content: center;

  @media ${device.android} {
    padding: 15px;
  }

  @media ${device.iphone} {
    padding: 15px;
  }

  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.desktop} {
    padding: 20px;
  }

  .branch_management_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.android} {
      width: 100%;
      gap: 18px;
    }

    @media ${device.iphone} {
      width: 100%;
      gap: 18px;
    }

    @media ${device.tablet} {
      width: 95%;
      gap: 20px;
    }

    @media ${device.desktop} {
      width: 100%;
      gap: 20px;
    }

    .header_section {
      width: 100%;
      height: auto;

      .header_text {
        width: 100%;
        height: auto;

        .main_title {
          font-family: Inter;
          font-weight: 700;
          font-style: Bold;
          font-size: 32px;
          line-height: 85%;
          color: #1f2937;
          margin: 0;
          padding: 0;

          @media ${device.android} {
            font-size: 24px;
          }

          @media ${device.iphone} {
            font-size: 26px;
          }

          @media ${device.tablet} {
            font-size: 28px;
          }

          @media ${device.desktop} {
            font-size: 32px;
          }
        }

        .sub_title {
          font-family: Inter;
          font-weight: 400;
          font-style: Regular;
          font-size: 14px;
          line-height: 150%;
          color: #6b7280;
          margin: 0;
          padding: 0;

          @media ${device.android} {
            font-size: 12px;
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

    .branch_selector_section {
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      border: 1px solid #e5e7eb;

      @media ${device.android} {
        padding: 15px;
      }

      @media ${device.iphone} {
        padding: 15px;
      }

      @media ${device.tablet} {
        padding: 18px;
      }

      @media ${device.desktop} {
        padding: 20px;
      }

      .selector_content {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${device.android} {
          flex-direction: column;
          gap: 15px;
        }

        @media ${device.iphone} {
          flex-direction: column;
          gap: 15px;
        }

        @media ${device.tablet} {
          flex-direction: row;
        }

        @media ${device.desktop} {
          flex-direction: row;
        }

        .selector_left {
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          gap: 12px;

          @media ${device.android} {
            width: 100%;
            flex-wrap: wrap;
          }

          @media ${device.iphone} {
            width: 100%;
            flex-wrap: wrap;
          }

          @media ${device.tablet} {
            width: auto;
          }

          @media ${device.desktop} {
            width: auto;
          }

          .store_icon {
            font-size: 24px;
            color: #5b5fef;

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

          .selector_label {
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 15px;
            line-height: 140%;
            color: #1f2937;

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

          .branch_dropdown {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 12px;
            background: #f9fafb;
            border-radius: 8px;
            cursor: pointer;

            @media ${device.android} {
              width: 100%;
              padding: 10px 12px;
            }

            @media ${device.iphone} {
              width: 100%;
              padding: 10px 12px;
            }

            @media ${device.tablet} {
              width: auto;
            }

            @media ${device.desktop} {
              width: auto;
            }

            .branch_name {
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

            .active_badge {
              padding: 3px 8px;
              border-radius: 12px;
              background: #000000;
              font-family: Inter;
              font-weight: 500;
              font-style: Medium;
              font-size: 11px;
              line-height: 140%;
              color: #ffffff;

              @media ${device.android} {
                font-size: 10px;
                padding: 2px 7px;
              }

              @media ${device.iphone} {
                font-size: 10px;
                padding: 2px 7px;
              }

              @media ${device.tablet} {
                font-size: 10px;
              }

              @media ${device.desktop} {
                font-size: 11px;
              }
            }

            .dropdown_icon {
              font-size: 18px;
              color: #6b7280;

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
          }
        }

        .add_branch_btn {
          width: auto;
          height: 45px;
          padding: 12px 20px;
          background: #5b5fef;
          border-radius: 8px;
          border: none;
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
            height: 42px;
            font-size: 13px;
            justify-content: center;
          }

          @media ${device.iphone} {
            width: 100%;
            height: 42px;
            font-size: 13px;
            justify-content: center;
          }

          @media ${device.tablet} {
            width: auto;
            height: 43px;
            font-size: 13px;
          }

          @media ${device.desktop} {
            width: auto;
            height: 45px;
            font-size: 14px;
          }

          .add_icon {
            font-size: 20px;

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

          &:hover {
            background: #4a4ed1;
          }
        }
      }
    }

    .tabs_section {
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid #e5e7eb;

      @media ${device.android} {
        overflow-x: auto;
      }

      @media ${device.iphone} {
        overflow-x: auto;
      }

      @media ${device.tablet} {
        overflow-x: visible;
      }

      @media ${device.desktop} {
        overflow-x: visible;
      }

      .tabs_wrapper {
        width: 100%;
        height: auto;
        display: flex;

        @media ${device.android} {
          width: max-content;
        }

        @media ${device.iphone} {
          width: max-content;
        }

        @media ${device.tablet} {
          width: 100%;
        }

        @media ${device.desktop} {
          width: 100%;
        }

        .tab_item {
          width: 25%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Inter;
          font-weight: 500;
          font-style: Medium;
          font-size: 14px;
          line-height: 140%;
          color: #6b7280;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;

          @media ${device.android} {
            width: auto;
            padding: 0 20px;
            height: 48px;
            font-size: 13px;
          }

          @media ${device.iphone} {
            width: auto;
            padding: 0 20px;
            height: 48px;
            font-size: 13px;
          }

          @media ${device.tablet} {
            width: 25%;
            height: 49px;
            font-size: 13px;
          }

          @media ${device.desktop} {
            width: 25%;
            height: 50px;
            font-size: 14px;
          }

          &.active_tab {
            color: #1f2937;
            border-bottom: 2px solid #5b5fef;
          }
        }
      }
    }
  }
`;