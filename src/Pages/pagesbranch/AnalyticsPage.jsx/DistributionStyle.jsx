import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const DistributionContainer = styled.div`
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

      &.pie {
        display: flex;
        justify-content: center;
      }
    }

    .empty_chart {
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      @media ${device.android} {
        height: 350px;
      }

      @media ${device.iphone} {
        height: 350px;
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