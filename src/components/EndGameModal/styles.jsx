import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  flex-direction: column;
  background-color: #fff;
  top: 50%;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  width: 500px;
  transform: translate(-50%, -50%);
  left: 50%;
  animation: fadeIn 1s ease;
  line-height: 0;
  align-items: center;
  gap: 6px;

  > img {
    width: 60%;
    border-radius: 50%;
  }

  @keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
  }

  @media screen and (max-width: 540px) {
    width: 280px;

    img {
    width: 90%;
    }
  }
`