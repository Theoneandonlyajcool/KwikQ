import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const BranchComparisonContainer = styled.div`
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

  .chart_section {
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

    .chart_header {
      width: 100%;
      height: auto;
      margin-bottom: 20px;

      .chart_title {
        font-family: Inter;
        font-weight: 600;
        font-size: 18px;
        color: #1f2937;
        margin: 0;
        margin-bottom: 5px;

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

      .chart_subtitle {
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

    .chart_container {
      width: 100%;
      height: auto;
    }

    .empty_chart {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      @media ${device.android} {
        height: 250px;
      }

      @media ${device.iphone} {
        height: 250px;
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

  .rankings_section {
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

    .rankings_title {
      font-family: Inter;
      font-weight: 600;
      font-size: 18px;
      color: #1f2937;
      margin: 0;
      margin-bottom: 20px;

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

    .rankings_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .ranking_item {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background: #f9fafb;
        border-radius: 10px;

        @media ${device.android} {
          padding: 12px;
        }

        @media ${device.iphone} {
          padding: 12px;
        }

        @media ${device.tablet} {
          padding: 13px;
        }

        @media ${device.desktop} {
          padding: 15px;
        }

        .ranking_left {
          display: flex;
          align-items: center;
          gap: 15px;

          .ranking_number {
            width: 35px;
            height: 35px;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Inter;
            font-weight: 600;
            font-size: 16px;

            @media ${device.android} {
              width: 30px;
              height: 30px;
              font-size: 14px;
            }

            @media ${device.iphone} {
              width: 30px;
              height: 30px;
              font-size: 14px;
            }

            @media ${device.tablet} {
              width: 32px;
              height: 32px;
              font-size: 15px;
            }

            @media ${device.desktop} {
              width: 35px;
              height: 35px;
              font-size: 16px;
            }

            &.rank_1 {
              background: #fef3c7;
              color: #f59e0b;
            }

            &.rank_2 {
              background: #e5e7eb;
              color: #6b7280;
            }

            &.rank_3 {
              background: #fed7aa;
              color: #ea580c;
            }

            &.rank_4,
            &.rank_5 {
              background: #f3f4f6;
              color: #9ca3af;
            }
          }

          .ranking_info {
            .ranking_name {
              font-family: Inter;
              font-weight: 600;
              font-size: 15px;
              color: #1f2937;
              margin: 0;
              margin-bottom: 3px;

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

            .ranking_customers {
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
        }

        .ranking_badge {
          padding: 6px 12px;
          border-radius: 12px;
          background: #d1fae5;
          font-family: Inter;
          font-weight: 500;
          font-size: 13px;
          color: #059669;

          @media ${device.android} {
            font-size: 12px;
            padding: 5px 10px;
          }

          @media ${device.iphone} {
            font-size: 12px;
            padding: 5px 10px;
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

    .empty_chart {
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      @media ${device.android} {
        height: 180px;
      }

      @media ${device.iphone} {
        height: 180px;
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
`;