import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div aria-label="Cute gray cat running in a metal wheel" role="img" className="wheel-and-cat">
        <div className="wheel" />
        <div className="cat">
          <div className="cat__body">
            <div className="cat__head">
              <div className="cat__ear cat__ear--left" />
              <div className="cat__ear cat__ear--right" />
              <div className="cat__eye" />
              <div className="cat__nose" />
            </div>
            <div className="cat__limb cat__limb--fr" />
            <div className="cat__limb cat__limb--fl" />
            <div className="cat__limb cat__limb--br" />
            <div className="cat__limb cat__limb--bl" />
            <div className="cat__tail" />
          </div>
        </div>
        <div className="spoke" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3e9ff;

  .wheel-and-cat {
    --dur: 1s;
    position: relative;
    width: 12em;
    height: 12em;
    font-size: 14px;
  }

  .wheel,
  .cat,
  .cat div,
  .spoke {
    position: absolute;
  }

  .wheel,
  .spoke {
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wheel {
    background: radial-gradient(100% 100% at center, hsla(0, 0%, 60%, 0) 47.8%, #aaa 48%);
    z-index: 2;
  }

  .cat {
    animation: catRun var(--dur) ease-in-out infinite;
    top: 50%;
    left: calc(50% - 3.5em);
    width: 7em;
    height: 3.75em;
    transform: rotate(4deg) translate(-0.8em, 1.85em);
    transform-origin: 50% 0;
    z-index: 1;
  }

  .cat__body {
    animation: catBody var(--dur) ease-in-out infinite;
    background: #b3b3b3;
    border-radius: 40% 50% 40% 40%;
    top: 0.25em;
    left: 2em;
    width: 4.5em;
    height: 3em;
    transform-origin: 17% 50%;
  }

  .cat__head {
    background: #b3b3b3;
    border-radius: 60% 40% 40% 60%;
    top: 0.2em;
    left: -2em;
    width: 2.6em;
    height: 2.4em;
    transform-origin: 100% 50%;
  }

  .cat__ear {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 0.6em solid transparent;
    border-right: 0.6em solid transparent;
    border-bottom: 0.8em solid #b3b3b3;
    top: -0.6em;
  }

  .cat__ear--left {
    left: 0.2em;
  }

  .cat__ear--right {
    right: 0.2em;
  }

  .cat__eye {
    background: black;
    border-radius: 50%;
    width: 0.4em;
    height: 0.4em;
    position: absolute;
    top: 0.7em;
    left: 1.4em;
  }

  .cat__nose {
    background: pink;
    width: 0.3em;
    height: 0.2em;
    border-radius: 50%;
    position: absolute;
    top: 1.3em;
    left: 0.2em;
  }

  .cat__tail {
    background: #b3b3b3;
    border-radius: 50%;
    top: 1em;
    right: -1.2em;
    width: 2.8em;
    height: 0.4em;
    transform-origin: 0 50%;
    animation: catTail var(--dur) linear infinite;
  }

  .cat__limb {
    background: #999;
    border-radius: 0.5em;
    width: 0.7em;
    height: 1.5em;
    position: absolute;
  }

  .cat__limb--fr {
    top: 2em;
    left: 0.8em;
    animation: limbMove var(--dur) linear infinite;
  }

  .cat__limb--fl {
    top: 2em;
    left: 1.8em;
    animation: limbMove var(--dur) linear infinite reverse;
  }

  .cat__limb--br {
    top: 2em;
    left: 3.2em;
    animation: limbMove var(--dur) linear infinite;
  }

  .cat__limb--bl {
    top: 2em;
    left: 4.2em;
    animation: limbMove var(--dur) linear infinite reverse;
  }

  .spoke {
    animation: spoke var(--dur) linear infinite;
    background: radial-gradient(100% 100% at center, #aaa 5%, transparent 5%),
      linear-gradient(transparent 46.9%, #bbb 47% 52.9%, transparent 53%) 50% 50% / 99% 99% no-repeat;
  }

  @keyframes catRun {
    from, to {
      transform: rotate(4deg) translate(-0.8em, 1.85em);
    }
    50% {
      transform: rotate(0) translate(-0.8em, 1.85em);
    }
  }

  @keyframes catBody {
    0%, 50%, 100% {
      transform: rotate(0);
    }
    25%, 75% {
      transform: rotate(-2deg);
    }
  }

  @keyframes catTail {
    0%, 50%, 100% {
      transform: rotate(20deg);
    }
    25%, 75% {
      transform: rotate(40deg);
    }
  }

  @keyframes limbMove {
    0%, 50%, 100% {
      transform: rotate(15deg);
    }
    25%, 75% {
      transform: rotate(-30deg);
    }
  }

  @keyframes spoke {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-1turn);
    }
  }
`;

export default Loader;
