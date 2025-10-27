import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const BranchDetailsContainer = styled.div`
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

  .branch_info_section {
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
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;

      @media ${device.android} {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        margin-bottom: 20px;
      }

      @media ${device.iphone} {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        margin-bottom: 20px;
      }

      @media ${device.tablet} {
        flex-direction: row;
        margin-bottom: 22px;
      }

      @media ${device.desktop} {
        flex-direction: row;
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

      .edit_btn {
        width: auto;
        height: 38px;
        padding: 10px 16px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        outline: none;
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        font-family: Inter;
        font-weight: 500;
        font-style: Medium;
        font-size: 13px;
        line-height: 140%;
        color: #374151;

        @media ${device.android} {
          width: 100%;
          height: 36px;
          font-size: 12px;
          justify-content: center;
        }

        @media ${device.iphone} {
          width: 100%;
          height: 36px;
          font-size: 12px;
          justify-content: center;
        }

        @media ${device.tablet} {
          width: auto;
          height: 37px;
          font-size: 12px;
        }

        @media ${device.desktop} {
          width: auto;
          height: 38px;
          font-size: 13px;
        }

        .edit_icon {
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

        &:hover {
          background: #f9fafb;
        }
      }
    }

    .info_grid {
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

      @media ${device.tablet} {
        gap: 18px;
      }

      @media ${device.desktop} {
        gap: 20px;
      }

      .info_row {
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

        &.full_width {
          .info_field {
            width: 100%;
          }
        }

        .info_field {
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

          .field_label {
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

          .field_value {
            width: 100%;
            height: 45px;
            padding: 12px 14px;
            background: #f9fafb;
            border-radius: 8px;
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 140%;
            color: #6b7280;
            display: flex;
            align-items: center;

            @media ${device.android} {
              height: 42px;
              font-size: 13px;
              padding: 10px 12px;
            }

            @media ${device.iphone} {
              height: 42px;
              font-size: 13px;
              padding: 10px 12px;
            }

            @media ${device.tablet} {
              height: 43px;
              font-size: 13px;
            }

            @media ${device.desktop} {
              height: 45px;
              font-size: 14px;
            }

            &.address_value,
            &.manager_value,
            &.email_value,
            &.phone_value {
              gap: 8px;

              .field_icon {
                font-size: 16px;
                color: #9ca3af;

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
    }
  }

  .branch_manager_section {
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

    .info_grid {
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

      @media ${device.tablet} {
        gap: 18px;
      }

      @media ${device.desktop} {
        gap: 20px;
      }

      .info_row {
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

        .info_field {
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

          .field_label {
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

          .field_value {
            width: 100%;
            height: 45px;
            padding: 12px 14px;
            background: #f9fafb;
            border-radius: 8px;
            font-family: Inter;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 140%;
            color: #6b7280;
            display: flex;
            align-items: center;

            @media ${device.android} {
              height: 42px;
              font-size: 13px;
              padding: 10px 12px;
            }

            @media ${device.iphone} {
              height: 42px;
              font-size: 13px;
              padding: 10px 12px;
            }

            @media ${device.tablet} {
              height: 43px;
              font-size: 13px;
            }

            @media ${device.desktop} {
              height: 45px;
              font-size: 14px;
            }

            &.manager_value,
            &.email_value,
            &.phone_value {
              gap: 8px;

              .field_icon {
                font-size: 16px;
                color: #9ca3af;

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

    .deactivate_btn {
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