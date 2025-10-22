import React from "react";
import styled from "styled-components";
// import { ClientsCards } from "./ClientsCards";
import { BsQuote } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

const Customers = () => {
  const ClientsCards = [
    {
      id: 1,
      icon: <BsQuote />,
      text: "KwikQ has transformed our banking operations. and the queue moves in an orderly manner. Staff productivity has improved, and customer complaints about waiting",
      Image:
        "https://i.postimg.cc/rFM3cLSz/97c5bbcb0cada2f75e7bc212c11d163f098e588a-1.jpg",
      role: "Operations Manager",
      branch: "Zenith Bank Ikeja Branch",
      rate: <IoIosStar />,
    },

    {
      id: 2,
      icon: <BsQuote />,
      text: "Our hospital waiting area is now calm and organized. patients get notified when it’s their turn, and doctors attend to them with less pressure. It has improved both patient experience and staff coordination.",
      Image:
        "https://i.postimg.cc/rFM3cLSz/97c5bbcb0cada2f75e7bc212c11d163f098e588a-1.jpg",
      role: "Head Nurse,",
      branch: "St. Grace Medical Centre, Lagos",
      rate: <IoIosStar />,
    },
  ];

  return (
    <ClientsContainer>
      <Main>
        <h1>
          What Our Clients <span>Say</span>
        </h1>
        <p>
          Recognized for excellence, our platform is rated highly for ease of
          use, <br />
          customizability, and how well it works with other solutions. See what
          our <br />
          customers have to say about how Waitwhile has <br />
          transformed their businesses.
        </p>
      </Main>
      <Section>
        {ClientsCards?.map((item) => (
          <div className="ClientCards" key={item?.id}>
            <div className="circle">{item?.icon}</div>
            <p>{item?.text}</p>
            <div className="profileholder">
              <div className="profile">
                <img src={item.Image} alt="" />
              </div>
              <div className="text-holder">
                <h4>{item?.role}</h4>
                <p>{item?.branch}</p>
                <strong>
                  {item?.rate}
                  {item?.rate}
                  {item?.rate}
                  {item?.rate}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </Section>
    </ClientsContainer>
  );
};

export default Customers;

const ClientsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #eaebfe;
`;

const Main = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    font-size: 45px;
    color: #222222;
    line-height: 200%;
    text-align: center;

    span {
      color: #303bff;
    }
  }

  p {
    font-size: 18px;
    line-height: 140%;
    color: #222222;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 38px;
      line-height: 160%;
    }

    p {
      font-size: 16px;
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    display: flex;
    padding: 0 10px;
    gap: 10px;

    h1 {
      font-size: 28px;
      line-height: 150%;
    }

    p {
      font-size: 14px;
      line-height: 130%;
    }
  }
`;

const Section = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  gap: 45px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #eaebfe;
  padding: 20px 0;

  .ClientCards {
    width: 30%;
    height: 65vh;
    min-height: max-content;
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 30px;
    border-radius: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .circle {
      width: 100px;
      height: 100px;
      display: flex;
      font-size: 50px;
      font-weight: 700;
      align-items: center;
      color: white;
      justify-content: center;
      background-color: #222222;
      border-radius: 97px;
    }

    p {
      width: 80%;
      font-size: 16px;
      font-weight: 500;
      line-height: 140%;
    }

    .profileholder {
      width: 80%;
      min-height: 20vh;
      display: flex;
      align-items: center;
      gap: 10px;

      .profile {
        width: 69px;
        height: 69px;
        border-radius: 50px;
        background-color: #b8d6b8;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }

    .text-holder {
      display: flex;
      gap: 5px;
      flex-direction: column;

      h4 {
        font-size: 20px;
      }

      p {
        font-size: 13px;
        width: 224px;
      }

      strong {
        color: #f79329;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .ClientCards {
      width: 45%;
      height: auto;
      padding: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 25px;
    flex-direction: column;
    align-items: center;

    .ClientCards {
      width: 90%;
      height: auto;
      padding: 20px;
      align-items: center;
      text-align: center;

      p {
        width: 100%;
      }

      .profileholder {
        width: 100%;
        justify-content: center;
      }

      .text-holder {
        align-items: center;

        p {
          width: 100%;
        }
      }
    }
  }
`;
