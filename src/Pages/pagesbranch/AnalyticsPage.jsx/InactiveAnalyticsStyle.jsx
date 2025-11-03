import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const InactiveAnalyticsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9fafb;
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

    .insights_section {
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 20px;
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
        padding: 20px;
      }

      .insights_header {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${device.android} {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        @media ${device.iphone} {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        @media ${device.tablet} {
          flex-direction: row;
        }

        @media ${device.desktop} {
          flex-direction: row;
        }

        .insights_left {
          width: auto;
          height: auto;

          .insights_title {
            font-family: Inter;
            font-weight: 600;
            font-size: 18px;
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

          .insights_subtitle {
            font-family: Inter;
            font-weight: 400;
            font-size: 13px;
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

        .time_range_filter {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;

          @media ${device.android} {
            width: 100%;
          }

          @media ${device.iphone} {
            width: 100%;
          }

          .calendar_icon {
            font-size: 18px;
            color: #6b7280;

            @media ${device.android} {
              font-size: 16px;
            }

            @media ${device.iphone} {
              font-size: 16px;
            }
          }

          .time_select {
            border: none;
            background: transparent;
            font-family: Inter;
            font-weight: 500;
            font-size: 14px;
            color: #1f2937;
            outline: none;
            cursor: pointer;

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

        .stat_header {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;

          .trend_icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;

            @media ${device.android} {
              width: 35px;
              height: 35px;
              font-size: 18px;
            }

            @media ${device.iphone} {
              width: 35px;
              height: 35px;
              font-size: 18px;
            }

            &.up {
              background: #dcfce7;
              color: #16a34a;
            }

            &.down {
              background: #fee2e2;
              color: #dc2626;
            }
          }

          .trend_percent {
            font-family: Inter;
            font-weight: 600;
            font-size: 16px;

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

            &.positive {
              color: #16a34a;
            }

            &.negative {
              color: #dc2626;
            }
          }
        }

        .stat_label {
          font-family: Inter;
          font-weight: 500;
          font-size: 14px;
          color: #6b7280;
          margin: 0;
          margin-bottom: 10px;

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
          font-size: 36px;
          color: #1f2937;
          margin: 0;
          margin-bottom: 8px;

          @media ${device.android} {
            font-size: 28px;
          }

          @media ${device.iphone} {
            font-size: 30px;
          }

          @media ${device.tablet} {
            font-size: 32px;
          }

          @media ${device.desktop} {
            font-size: 36px;
          }
        }

        .stat_comparison {
          font-family: Inter;
          font-weight: 400;
          font-size: 13px;
          color: #9ca3af;
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

    .charts_grid {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media ${device.android} {
        gap: 15px;
      }

      @media ${device.iphone} {
        gap: 15px;
      }

      @media ${device.tablet} {
        gap: 18px;
      }

      @media ${device.desktop} {
        gap: 20px;
      }

      .chart_box {
        width: 100%;
        height: auto;
        background: #ffffff;
        border-radius: 12px;
        padding: 20px;
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
          padding: 20px;
        }

        .chart_box_title {
          font-family: Inter;
          font-weight: 600;
          font-size: 16px;
          color: #1f2937;
          margin: 0;
          margin-bottom: 20px;

          @media ${device.android} {
            font-size: 15px;
            margin-bottom: 18px;
          }

          @media ${device.iphone} {
            font-size: 15px;
            margin-bottom: 18px;
          }

          @media ${device.tablet} {
            font-size: 15px;
          }

          @media ${device.desktop} {
            font-size: 16px;
          }
        }

        .empty_chart {
          width: 100%;
          height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;

          @media ${device.android} {
            height: 220px;
          }

          @media ${device.iphone} {
            height: 220px;
          }

          .empty_icon {
            font-size: 60px;
            color: #d1d5db;

            @media ${device.android} {
              font-size: 50px;
            }

            @media ${device.iphone} {
              font-size: 50px;
            }

            @media ${device.tablet} {
              font-size: 55px;
            }

            @media ${device.desktop} {
              font-size: 60px;
            }
          }

          .empty_title {
            font-family: Inter;
            font-weight: 500;
            font-size: 14px;
            color: #9ca3af;
            margin: 0;

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

          .empty_text {
            font-family: Inter;
            font-weight: 400;
            font-size: 13px;
            color: #d1d5db;
            margin: 0;
            text-align: center;
            max-width: 80%;

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
    }
  }
`;