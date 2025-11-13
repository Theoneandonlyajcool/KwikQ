import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const BranchOverviewContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  /* padding: 0px; */
  /* background: green; */

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

  .branch_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    /* background: blue; */

    @media ${device.android} {
      width: 100%;
      gap: 20px;
    }

    @media ${device.iphone} {
      width: 100%;
      gap: 20px;
    }

    @media ${device.tablet} {
      width: 95%;
      gap: 22px;
    }

    @media ${device.desktop} {
      width: 100%;
      gap: 25px;
    }

    .header_section {
      width: 100%;
      height: auto;
      /* background: black; */

      .header_text {
        width: 100%;
        height: auto;
        /* background: red; */

        .main_title {
          font-family: Inter;
          font-weight: 700;
          font-style: Bold;
          font-size: 32px;
          line-height: 85%;
          color: #222222;
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
          /* margin-top: 5px; */

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

     .add_branch_btn {
          width: 90%;
          height: 35px;
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
            font-size: 11px;
            justify-content: center;
            gap: 4px;
          }

          @media ${device.iphone} {
            width: 100%;
            height: 42px;
            font-size: 11px;
            justify-content: center;
          }

          @media ${device.tablet} {
            width: auto;
            height: 43px;
            font-size: 13px;
          }

          @media ${device.desktop} {
            width: auto;
            height: 30px;
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
      

    .stats_cards_wrapper {
      width: 100%;
      max-height: auto;
      display: flex;
      gap: 15px;
      /* background: blue; */

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
        flex-wrap: wrap;
        gap: 18px;
      }

      @media ${device.desktop} {
        flex-direction: row;
        gap: 20px;
      }

      .stat_card {
        width: 37%;
        max-height: 25vh;
        background: #ffffff;
        /* background: #af1b1b; */
        border-radius: 12px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);

        @media ${device.android} {
          width: 100%;
          height: 160px;
          padding: 20px;
        }

        @media ${device.iphone} {
          width: 100%;
          height: 160px;
          padding: 20px;
        }

        @media ${device.tablet} {
          width: 48%;
          height: 170px;
          padding: 22px;
        }

        @media ${device.desktop} {
          width: 23%;
          /* height: 180px; */
          padding: 24px;
        }

        .icon_wrapper {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          /* background: black; */

          @media ${device.android} {
            width: 44px;
            height: 44px;
          }

          @media ${device.iphone} {
            width: 44px;
            height: 44px;
          }

          @media ${device.tablet} {
            width: 46px;
            height: 46px;
          }

          @media ${device.desktop} {
            width: 48px;
            height: 48px;
          }

          &.blue_bg {
            background: #dbeafe;
          }

          &.purple_bg {
            background: #ede9fe;
          }

          &.yellow_bg {
            background: #fef3c7;
          }

          &.green_bg {
            background: #d1fae5;
          }

          .card_icon {
            font-size: 24px;

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

            &.blue_icon {
              color: #3b82f6;
            }

            &.purple_icon {
              color: #8b5cf6;
            }

            &.yellow_icon {
              color: #f59e0b;
            }

            &.green_icon {
              color: #10b981;
            }
          }
        }

        .card_content {
          width: 100%;
          min-height: auto;
          display: flex;
          flex-direction: column;
          gap: 5px;
          /* background: blue; */

          .card_label {
            font-family: Inter;
            font-weight: 400;
            font-style: Medium;
            font-size: 14px;
            line-height: 100%;
            color: #6b7280;
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

          .card_value {
            font-family: Inter;
            font-weight: 600;
            font-style: Bold;
            font-size: 20px;
            line-height: 100%;
            color: #1f2937;
            /* background: red; */
            margin: 0;

            @media ${device.android} {
              font-size: 30px;
            }

            @media ${device.iphone} {
              font-size: 32px;
            }

            @media ${device.tablet} {
              font-size: 34px;
            }

            @media ${device.desktop} {
              font-size: 26px;
            }
          }

          .card_change {
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 13px;
            line-height: 140%;
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

            &.blue_text {
              color: #3b82f6;
            }

            &.purple_text {
              color: #8b5cf6;
            }
          }
        }
      }
    }

    .branches_section {
      width: 100%;
      height: auto;
      background: #ffffff;
      /* background: red; */
      border-radius: 12px;
      padding: 24px;
      margin-top: 30px;

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

      .branches_header {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        /* background: blue; */

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
          flex-direction: column;

        }

        @media ${device.desktop} {
          flex-direction: row;
        }

        .branches_title_wrapper {
          width: auto;
          height: auto;
          /* background: black; */

          .branches_title {
            font-family: Inter;
            font-weight: 600;
            font-style: Semi Bold;
            font-size: 20px;
            line-height: 130%;
            color: #1f2937;
            margin: 0;

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

          .branches_subtitle {
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 150%;
            color: #6b7280;
            margin: 0;
            margin-top: 5px;

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

        .status_badges {
          width: 45%;
          height: auto;
          display: flex;
          gap: 10px;
          /* background: pink; */

          .status_badge {
            padding: 6px 12px;
            border-radius: 20px;
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 13px;
            line-height: 140%;

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

            &.active_badge {
              width: 25%;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;
              background: #d1fae5;
              border: 1px solid #059669;
              color: #059669;
            }

            &.offline_badge {
              width: 25%;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f3f4f6;
              border-radius: 8px;
              border: 1px solid #585e68;
              color: #6b7280;
            }
          }

          @media ${device.android} {
              width: 16rem;
              gap: 5px;
          }

          @media ${device.tablet} {
            font-size: 192px;
            width: 25rem;
          }
        }
      }

      .branches_list {
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

        .branch_card {
          width: 100%;
          height: auto;
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

          .branch_header {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
            /* background: black; */

            .branch_info {
              width: 100%;
              height: auto;
              display: flex;
              gap: 15px;

              @media ${device.android} {
                gap: 12px;
              }

              @media ${device.iphone} {
                gap: 12px;
              }

              @media ${device.tablet} {
                gap: 13px;
              }

              @media ${device.desktop} {
                gap: 15px;
              }

              .branch_icon_wrapper {
                width: 48px;
                height: 48px;
                min-width: 48px;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;

                @media ${device.android} {
                  width: 44px;
                  height: 44px;
                  min-width: 44px;
                }

                @media ${device.iphone} {
                  width: 44px;
                  height: 44px;
                  min-width: 44px;
                }

                @media ${device.tablet} {
                  width: 46px;
                  height: 46px;
                  min-width: 46px;
                }

                @media ${device.desktop} {
                  width: 48px;
                  height: 48px;
                  min-width: 48px;
                }

                .branch_icon {
                  font-size: 24px;
                  color: #ffffff;

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
              }

              .branch_details {
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                gap: 5px;

                .branch_name_row {
                  width: 100%;
                  height: auto;
                  display: flex;
                  align-items: center;
                  gap: 10px;

                  @media ${device.android} {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                  }

                  @media ${device.iphone} {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 8px;
                  }

                  @media ${device.tablet} {
                    flex-direction: row;
                    gap: 10px;
                  }

                  @media ${device.desktop} {
                    flex-direction: row;
                    gap: 10px;
                  }

                  .branch_name {
                    font-family: Inter;
                    font-weight: 600;
                    font-style: Semi Bold;
                    font-size: 16px;
                    line-height: 140%;
                    color: #1f2937;
                    margin: 0;

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

                  .status_label {
                    padding: 4px 10px;
                    border-radius: 4px;
                    font-family: Inter;
                    font-weight: 500;
                    font-style: Medium;
                    font-size: 11px;
                    line-height: 140%;
                    color: #ffffff;

                    @media ${device.android} {
                      font-size: 10px;
                      padding: 3px 8px;
                    }

                    @media ${device.iphone} {
                      font-size: 10px;
                      padding: 3px 8px;
                    }

                    @media ${device.tablet} {
                      font-size: 10px;
                    }

                    @media ${device.desktop} {
                      font-size: 11px;
                    }
                  }
                }

                .branch_meta {
                  width: 100%;
                  height: auto;
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  flex-wrap: wrap;

                  @media ${device.android} {
                    gap: 6px;
                  }

                  @media ${device.iphone} {
                    gap: 6px;
                  }

                  @media ${device.tablet} {
                    gap: 7px;
                  }

                  @media ${device.desktop} {
                    gap: 8px;
                  }

                  .meta_item {
                    font-family: Inter;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 13px;
                    line-height: 140%;
                    color: #6b7280;
                    display: flex;
                    align-items: center;
                    gap: 4px;

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

                    .meta_icon {
                      font-size: 14px;

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

                  .meta_separator {
                    font-family: Inter;
                    font-weight: 400;
                    font-size: 13px;
                    color: #6b7280;

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

                .last_updated {
                  width: 100%;
                  height: auto;
                  font-family: Inter;
                  font-weight: 400;
                  font-style: Regular;
                  font-size: 12px;
                  line-height: 140%;
                  color: #9ca3af;
                  display: flex;
                  align-items: center;
                  gap: 4px;

                  @media ${device.android} {
                    font-size: 11px;
                  }

                  @media ${device.iphone} {
                    font-size: 11px;
                  }

                  @media ${device.tablet} {
                    font-size: 11px;
                  }

                  @media ${device.desktop} {
                    font-size: 12px;
                  }

                  .arrow_icon {
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
                  }
                }
              }
            }
          }

          .branch_stats {
            width: 100%;
            min-height: 5rem;
            display: flex;
            flex-direction: row;
            gap: 45px;
            margin-bottom: 20px;
            border-top: 1.25px solid #e5e7eb;
            border-bottom: 1.25px solid #e5e7eb;
            /* background: red; */

            @media ${device.android} {
              flex-direction: column;
              gap: 20px;
            }

            @media ${device.iphone} {
              flex-direction: column;
              gap: 20px;
            }

            @media ${device.tablet} {
              flex-direction: row;
              gap: 30px;
            }

            @media ${device.desktop} {
              flex-direction: row;
              gap: 40px;
            }

            .stat_item {
              width: 15%;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 8px;
              position: relative;
              /* background: pink; */
              margin-left: 50px;

              .stat_icon_value {
                width: auto;
                height: auto;
                display: flex;
                align-items: center;
                gap: 8px;

                .stat_icon {
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

                .stat_number {
                  font-family: Inter;
                  font-weight: 600;
                  font-style: Semi Bold;
                  font-size: 20px;
                  line-height: 130%;
                  color: #1f2937;

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
              }

              .stat_label {
                font-family: Inter;
                font-weight: 400;
                font-style: Regular;
                font-size: 13px;
                line-height: 140%;
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

              .warning_badge {
                width: auto;
                height: auto;
                padding: 4px 8px;
                border-radius: 12px;
                background: #ffffff;
                border: 1px solid #fca5a5;
                display: flex;
                align-items: center;
                gap: 4px;
                margin-top: 5px;

                @media ${device.android} {
                  padding: 3px 7px;
                }

                @media ${device.iphone} {
                  padding: 3px 7px;
                }

                @media ${device.tablet} {
                  padding: 3px 7px;
                }

                @media ${device.desktop} {
                  padding: 4px 8px;
                }

                .warning_icon {
                  font-size: 12px;
                  color: #dc2626;

                  @media ${device.android} {
                    font-size: 11px;
                  }

                  @media ${device.iphone} {
                    font-size: 11px;
                  }

                  @media ${device.tablet} {
                    font-size: 11px;
                  }

                  @media ${device.desktop} {
                    font-size: 12px;
                  }
                }

                font-family: Inter;
                font-weight: 500;
                font-style: Medium;
                font-size: 11px;
                line-height: 140%;
                color: #dc2626;

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
            }
          }

          .branch_actions {
            width: 100%;
            height: auto;
            display: flex;
            gap: 12px;

            @media ${device.android} {
              flex-direction: column;
              gap: 10px;
            }

            @media ${device.iphone} {
              flex-direction: column;
              gap: 10px;
            }

            @media ${device.tablet} {
              flex-direction: row;
              gap: 12px;
            }

            @media ${device.desktop} {
              flex-direction: row;
              gap: 12px;
            }

            .action_btn {
              height: 40px;
              padding: 10px 20px;
              border-radius: 8px;
              font-family: Inter;
              font-weight: 500;
              font-style: Medium;
              font-size: 14px;
              line-height: 140%;
              cursor: pointer;
              border: 1px solid #e5e7eb;
              background: #ffffff;
              color: #374151;
              outline: none;

              @media ${device.android} {
                height: 38px;
                font-size: 13px;
                padding: 8px 16px;
              }

              @media ${device.iphone} {
                height: 38px;
                font-size: 13px;
                padding: 8px 16px;
              }

              @media ${device.tablet} {
                height: 39px;
                font-size: 13px;
              }

              @media ${device.desktop} {
                height: 40px;
                font-size: 14px;
              }

              &.view_details_btn {
                width: 100%;

                @media ${device.android} {
                  width: 100%;
                }

                @media ${device.iphone} {
                  width: 100%;
                }

                @media ${device.tablet} {
                  width: auto;
                  flex: 1;
                }

                @media ${device.desktop} {
                  width: auto;
                  flex: 1;
                }

                &:hover {
                  background: #303bff;
                  color: white;
                  font-size: 18px;
                }
              }

              &.secondary_btn {
                width: auto;
                text-decoration: none;

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

                &:hover {
                  border: 2px solid #303bff;
                  color: black;
                  font-size: 16px;
                }
              }

              &:hover {
                background: #f9fafb;
              }
            }
          }
        }
      }
    }
  }
`;
