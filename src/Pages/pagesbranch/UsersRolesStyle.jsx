import styled from "styled-components";

const device = {
  android: "(min-width: 360px)",
  iphone: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1024px)",
};

export const UsersRolesContainer = styled.div`
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

  .organization_users_section {
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
      gap: 12px;
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

      .section_icon_wrapper {
        width: 45px;
        height: 45px;
        min-width: 45px;
        background: #fef3c7;
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
          color: #f59e0b;

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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0;

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

      .invite_user_btn {
        width: auto;
        height: 40px;
        padding: 10px 18px;
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

        &:hover {
          background: #4a4ed1;
        }
      }
    }

    .users_list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;

      .user_item {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 18px 0;
        border-bottom: 1px solid #f3f4f6;

        @media ${device.android} {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          padding: 16px 0;
        }

        @media ${device.iphone} {
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          padding: 16px 0;
        }

        @media ${device.tablet} {
          flex-direction: row;
          padding: 17px 0;
        }

        @media ${device.desktop} {
          flex-direction: row;
          padding: 18px 0;
        }

        &:last-child {
          border-bottom: none;
        }

        .user_item_left {
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

          .user_avatar {
            width: 45px;
            height: 45px;
            min-width: 45px;
            border-radius: 50%;
            background: #5b5fef;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Inter;
            font-weight: 600;
            font-style: Semi Bold;
            font-size: 16px;
            line-height: 140%;
            color: #ffffff;

            @media ${device.android} {
              width: 40px;
              height: 40px;
              min-width: 40px;
              font-size: 14px;
            }

            @media ${device.iphone} {
              width: 40px;
              height: 40px;
              min-width: 40px;
              font-size: 14px;
            }

            @media ${device.tablet} {
              width: 42px;
              height: 42px;
              min-width: 42px;
              font-size: 15px;
            }

            @media ${device.desktop} {
              width: 45px;
              height: 45px;
              min-width: 45px;
              font-size: 16px;
            }
          }

          .user_info {
            width: auto;
            height: auto;

            .user_name {
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

            .user_email {
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

        .user_item_right {
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

          .user_role_location {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 3px;

            @media ${device.android} {
              flex: 1;
            }

            @media ${device.iphone} {
              flex: 1;
            }

            @media ${device.tablet} {
              width: auto;
            }

            @media ${device.desktop} {
              width: auto;
            }

            .user_role {
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

            .user_location {
              font-family: Inter;
              font-weight: 400;
              font-style: Regular;
              font-size: 12px;
              line-height: 150%;
              color: #6b7280;

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
          }

          .user_status {
            padding: 5px 12px;
            border-radius: 12px;
            font-family: Inter;
            font-weight: 500;
            font-style: Medium;
            font-size: 11px;
            line-height: 140%;
            text-transform: capitalize;

            @media ${device.android} {
              font-size: 10px;
              padding: 4px 10px;
            }

            @media ${device.iphone} {
              font-size: 10px;
              padding: 4px 10px;
            }

            @media ${device.tablet} {
              font-size: 10px;
              padding: 4px 11px;
            }

            @media ${device.desktop} {
              font-size: 11px;
              padding: 5px 12px;
            }

            &.active {
              background: #d1fae5;
              color: #059669;
            }

            &.inactive {
              background: #f3f4f6;
              color: #6b7280;
            }
          }

          .edit_user_btn {
            width: 36px;
            height: 36px;
            min-width: 36px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            outline: none;

            @media ${device.android} {
              width: 34px;
              height: 34px;
              min-width: 34px;
            }

            @media ${device.iphone} {
              width: 34px;
              height: 34px;
              min-width: 34px;
            }

            @media ${device.tablet} {
              width: 35px;
              height: 35px;
              min-width: 35px;
            }

            @media ${device.desktop} {
              width: 36px;
              height: 36px;
              min-width: 36px;
            }

            .edit_icon {
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

            &:hover {
              background: #f3f4f6;
            }
          }
        }
      }
    }
  }

  .role_permissions_section {
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
        justify-content: space-between;
        align-items: center;
        padding: 18px 0;
        border-bottom: 1px solid #f3f4f6;

        @media ${device.android} {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 0;
        }

        @media ${device.iphone} {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 0;
        }

        @media ${device.tablet} {
          flex-direction: row;
          padding: 17px 0;
        }

        @media ${device.desktop} {
          flex-direction: row;
          padding: 18px 0;
        }

        &:last-child {
          border-bottom: none;
        }

        .permission_info {
          width: 75%;
          height: auto;

          @media ${device.android} {
            width: 100%;
          }

          @media ${device.iphone} {
            width: 100%;
          }

          @media ${device.tablet} {
            width: 70%;
          }

          @media ${device.desktop} {
            width: 75%;
          }

          .permission_role {
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

          .permission_description {
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

        .permission_access {
          padding: 6px 14px;
          border-radius: 12px;
          font-family: Inter;
          font-weight: 500;
          font-style: Medium;
          font-size: 12px;
          line-height: 140%;
          white-space: nowrap;

          @media ${device.android} {
            font-size: 11px;
            padding: 5px 12px;
          }

          @media ${device.iphone} {
            font-size: 11px;
            padding: 5px 12px;
          }

          @media ${device.tablet} {
            font-size: 11px;
            padding: 5px 13px;
          }

          @media ${device.desktop} {
            font-size: 12px;
            padding: 6px 14px;
          }

          &.full_access {
            background: #d1fae5;
            color: #059669;
          }

          &.limited_access {
            background: #fef3c7;
            color: #d97706;
          }

          &.view_only {
            background: #e0e7ff;
            color: #4338ca;
          }
        }
      }
    }
  }
`;