import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const BranchAnalyticsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f3f4f6;
  padding: 20px;

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

  .analytics_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${device.android} {
      gap: 18px;
    }

    @media ${device.iphone} {
      gap: 18px;
    }

    .header_section {
      width: 100%;
      height: auto;

      .main_title {
        font-family: Inter;
        font-weight: 700;
        font-size: 32px;
        color: #1f2937;
        margin: 0;

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
        font-size: 14px;
        color: #6b7280;
        margin: 0;

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

    .filters_section {
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      gap: 20px;
      border: 1px solid #e5e7eb;

      @media ${device.android} {
        flex-direction: column;
        padding: 15px;
        gap: 15px;
      }

      @media ${device.iphone} {
        flex-direction: column;
        padding: 15px;
        gap: 15px;
      }

      @media ${device.tablet} {
        flex-direction: row;
        padding: 18px;
      }

      @media ${device.desktop} {
        flex-direction: row;
        padding: 20px;
      }

      .filter_item {
        display: flex;
        align-items: center;
        gap: 10px;

        .filter_icon {
          font-size: 20px;
          color: #6b7280;

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

        .filter_label {
          font-family: Inter;
          font-weight: 500;
          font-size: 14px;
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

        .filter_select {
          padding: 8px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-family: Inter;
          font-weight: 400;
          font-size: 14px;
          color: #1f2937;
          outline: none;
          cursor: pointer;
          background: #f9fafb;

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

    .stats_cards {
      width: 100%;
      height: auto;
      display: flex;
      gap: 20px;

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
        gap: 18px;
      }

      @media ${device.desktop} {
        flex-direction: row;
        gap: 20px;
      }

      .stat_card {
        width: 50%;
        height: auto;
        background: #ffffff;
        border-radius: 12px;
        padding: 20px;
        display: flex;
        gap: 15px;
        border: 1px solid #e5e7eb;

        @media ${device.android} {
          width: 100%;
          padding: 18px;
        }

        @media ${device.iphone} {
          width: 100%;
          padding: 18px;
        }

        @media ${device.tablet} {
          width: 50%;
        }

        @media ${device.desktop} {
          width: 50%;
        }

        .stat_icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;

          @media ${device.android} {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          @media ${device.iphone} {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          @media ${device.tablet} {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }

          @media ${device.desktop} {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }

          &.customers {
            background: #dbeafe;
            color: #3b82f6;
          }

          &.wait {
            background: #fef3c7;
            color: #f59e0b;
          }
        }

        .stat_content {
          flex: 1;

          .stat_label {
            font-family: Inter;
            font-weight: 400;
            font-size: 14px;
            color: #6b7280;
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

          .stat_value {
            font-family: Inter;
            font-weight: 700;
            font-size: 32px;
            color: #1f2937;
            margin: 0;
            margin-bottom: 8px;

            @media ${device.android} {
              font-size: 26px;
            }

            @media ${device.iphone} {
              font-size: 28px;
            }

            @media ${device.tablet} {
              font-size: 30px;
            }

            @media ${device.desktop} {
              font-size: 32px;
            }
          }

          .stat_change {
            font-family: Inter;
            font-weight: 500;
            font-size: 13px;
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

            &.positive {
              color: #3b82f6;
            }

            &.negative {
              color: #ef4444;
            }
          }
        }
      }
    }

    .tabs_section {
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 12px;
      overflow-x: auto;
      border: 1px solid #e5e7eb;

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

        .tab_item {
          padding: 15px 30px;
          font-family: Inter;
          font-weight: 500;
          font-size: 14px;
          color: #6b7280;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;

          @media ${device.android} {
            padding: 12px 20px;
            font-size: 13px;
          }

          @media ${device.iphone} {
            padding: 12px 20px;
            font-size: 13px;
          }

          @media ${device.tablet} {
            padding: 13px 25px;
            font-size: 13px;
          }

          @media ${device.desktop} {
            padding: 15px 30px;
            font-size: 14px;
          }

          &.active {
            color: #1f2937;
            background: #f9fafb;
            border-radius: 12px 12px 0 0;
          }

          &:hover {
            color: #1f2937;
            background: #f9fafb;
          }
        }
      }
    }
  }
`;