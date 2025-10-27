import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const BillingContainer = styled.div`
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

  .billing_info_section {
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
        background: #d1fae5;
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
          color: #10b981;

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

    .payment_card {
      width: 100%;
      height: auto;
      background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;

      @media ${device.android} {
        padding: 18px;
        margin-bottom: 18px;
      }

      @media ${device.iphone} {
        padding: 18px;
        margin-bottom: 18px;
      }

      @media ${device.tablet} {
        padding: 20px;
        margin-bottom: 18px;
      }

      @media ${device.desktop} {
        padding: 24px;
        margin-bottom: 20px;
      }

      .payment_card_header {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        @media ${device.android} {
          margin-bottom: 25px;
        }

        @media ${device.iphone} {
          margin-bottom: 25px;
        }

        @media ${device.tablet} {
          margin-bottom: 28px;
        }

        @media ${device.desktop} {
          margin-bottom: 30px;
        }

        .payment_method_label {
          font-family: Inter;
          font-weight: 400;
          font-style: Regular;
          font-size: 13px;
          line-height: 140%;
          color: rgba(255, 255, 255, 0.7);

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

        .payment_type {
          font-family: Inter;
          font-weight: 600;
          font-style: Semi Bold;
          font-size: 16px;
          line-height: 140%;
          color: #ffffff;

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

      .payment_card_number {
        width: 100%;
        height: auto;
        font-family: Inter;
        font-weight: 500;
        font-style: Medium;
        font-size: 24px;
        line-height: 140%;
        color: #ffffff;
        letter-spacing: 2px;
        margin-bottom: 30px;

        @media ${device.android} {
          font-size: 20px;
          margin-bottom: 25px;
        }

        @media ${device.iphone} {
          font-size: 20px;
          margin-bottom: 25px;
        }

        @media ${device.tablet} {
          font-size: 22px;
          margin-bottom: 28px;
        }

        @media ${device.desktop} {
          font-size: 24px;
          margin-bottom: 30px;
        }
      }

      .payment_card_footer {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .card_holder_section,
        .card_expires_section {
          width: auto;
          height: auto;
          display: flex;
          flex-direction: column;
          gap: 5px;

          .card_holder_label,
          .card_expires_label {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 11px;
            line-height: 140%;
            color: rgba(255, 255, 255, 0.6);

            @media ${device.android} {
              font-size: 10px;
            }

            @media ${device.iphone} {
              font-size: 10px;
            }

            @media ${device.tablet} {
              font-size: 10px;
            }

            @media ${device.desktop} {
              font-size: 11px;
            }
          }

          .card_holder_name,
          .card_expires_date {
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 14px;
            line-height: 140%;
            color: #ffffff;

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

    .payment_actions {
      width: 100%;
      height: auto;
      display: flex;
      gap: 15px;

      @media ${device.android} {
        flex-direction: column;
        gap: 12px;
      }

      @media ${device.iphone} {
        flex-direction: column;
        gap: 12px;
      }

      @media ${device.tablet} {
        flex-direction: row;
        gap: 13px;
      }

      @media ${device.desktop} {
        flex-direction: row;
        gap: 15px;
      }

      .update_card_btn,
      .add_card_btn {
        width: 50%;
        height: 45px;
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        font-family: Inter;
        font-weight: 500;
        font-style: Medium;
        font-size: 14px;
        line-height: 140%;

        @media ${device.android} {
          width: 100%;
          height: 42px;
          font-size: 13px;
        }

        @media ${device.iphone} {
          width: 100%;
          height: 42px;
          font-size: 13px;
        }

        @media ${device.tablet} {
          width: 50%;
          height: 43px;
          font-size: 13px;
        }

        @media ${device.desktop} {
          width: 50%;
          height: 45px;
          font-size: 14px;
        }

        .btn_icon {
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
      }

      .update_card_btn {
        background: #ffffff;
        color: #374151;

        &:hover {
          background: #f9fafb;
        }
      }

      .add_card_btn {
        background: #ffffff;
        color: #374151;

        &:hover {
          background: #f9fafb;
        }
      }
    }
  }

  .billing_history_section {
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

    .billing_history_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;

      .billing_history_item {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #f3f4f6;

        @media ${device.android} {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          padding: 18px 0;
        }

        @media ${device.iphone} {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          padding: 18px 0;
        }

        @media ${device.tablet} {
          flex-direction: row;
          padding: 18px 0;
        }

        @media ${device.desktop} {
          flex-direction: row;
          padding: 20px 0;
        }

        &:last-child {
          border-bottom: none;
        }

        .billing_item_left {
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          gap: 12px;

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

          .billing_check_icon {
            font-size: 28px;
            color: #10b981;

            @media ${device.android} {
              font-size: 24px;
            }

            @media ${device.iphone} {
              font-size: 24px;
            }

            @media ${device.tablet} {
              font-size: 26px;
            }

            @media ${device.desktop} {
              font-size: 28px;
            }
          }

          .billing_item_info {
            width: auto;
            height: auto;

            .billing_date {
              font-family: Inter;
              font-weight: 600;
              font-style: Semi Bold;
              font-size: 15px;
              line-height: 140%;
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

            .billing_invoice {
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

        .billing_item_right {
          width: auto;
          height: auto;
          display: flex;
          align-items: center;
          gap: 15px;

          @media ${device.android} {
            width: 100%;
            justify-content: space-between;
            gap: 10px;
          }

          @media ${device.iphone} {
            width: 100%;
            justify-content: space-between;
            gap: 10px;
          }

          @media ${device.tablet} {
            width: auto;
            gap: 12px;
          }

          @media ${device.desktop} {
            width: auto;
            gap: 15px;
          }

          .billing_amount {
            font-family: Inter;
            font-weight: 600;
            font-style: Semi Bold;
            font-size: 16px;
            line-height: 140%;
            color: #1f2937;

            @media ${device.android} {
              font-size: 15px;
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

          .billing_status {
            padding: 5px 12px;
            border-radius: 12px;
            background: #d1fae5;
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 12px;
            line-height: 140%;
            color: #059669;

            @media ${device.android} {
              font-size: 11px;
              padding: 4px 10px;
            }

            @media ${device.iphone} {
              font-size: 11px;
              padding: 4px 10px;
            }

            @media ${device.tablet} {
              font-size: 11px;
            }

            @media ${device.desktop} {
              font-size: 12px;
            }
          }

          .download_btn {
            width: auto;
            height: 35px;
            padding: 8px 16px;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            outline: none;
            cursor: pointer;
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 13px;
            line-height: 140%;
            color: #374151;

            @media ${device.android} {
              height: 32px;
              font-size: 12px;
              padding: 6px 14px;
            }

            @media ${device.iphone} {
              height: 32px;
              font-size: 12px;
              padding: 6px 14px;
            }

            @media ${device.tablet} {
              height: 33px;
              font-size: 12px;
            }

            @media ${device.desktop} {
              height: 35px;
              font-size: 13px;
            }

            &:hover {
              background: #f9fafb;
            }
          }
        }
      }
    }
  }
`;