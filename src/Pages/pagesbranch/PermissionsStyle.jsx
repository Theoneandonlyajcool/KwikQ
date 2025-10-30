import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const PermissionsContainer = styled.div`
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

  .permissions_section {
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

    .permissions_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;

      .permission_item {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        padding: 18px 0;
        gap: 15px;
        border-bottom: 1px solid #f3f4f6;

        @media ${device.android} {
          padding: 15px 0;
          gap: 12px;
        }

        @media ${device.iphone} {
          padding: 15px 0;
          gap: 12px;
        }

        @media ${device.tablet} {
          padding: 16px 0;
          gap: 13px;
        }

        @media ${device.desktop} {
          padding: 18px 0;
          gap: 15px;
        }

        &:last-child {
          border-bottom: none;
        }

        .perm_icon {
          width: 40px;
          height: 40px;
          min-width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 28px;

          @media ${device.android} {
            width: 36px;
            height: 36px;
            min-width: 36px;
            font-size: 24px;
          }

          @media ${device.iphone} {
            width: 36px;
            height: 36px;
            min-width: 36px;
            font-size: 24px;
          }

          @media ${device.tablet} {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 26px;
          }

          @media ${device.desktop} {
            width: 40px;
            height: 40px;
            min-width: 40px;
            font-size: 28px;
          }

          .granted_icon {
            color: #10b981;
          }

          .denied_icon {
            color: #dc2626;
          }
        }

        .perm_info {
          width: 100%;
          height: auto;
          flex: 1;

          .perm_title {
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

          .perm_description {
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

        .perm_status {
          padding: 5px 12px;
          border-radius: 12px;
          font-family: Inter;
          font-weight: 500;
          font-style: Medium;
          font-size: 12px;
          line-height: 140%;
          white-space: nowrap;

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
            padding: 4px 11px;
          }

          @media ${device.desktop} {
            font-size: 12px;
            padding: 5px 12px;
          }

          &.granted {
            background: #d1fae5;
            color: #059669;
          }

          &.denied {
            background: #fee2e2;
            color: #dc2626;
          }
        }
      }
    }
  }

  .access_control_section {
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

    .access_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;

      .access_item {
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

        .access_info {
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

          .access_title {
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

          .access_description {
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
`;