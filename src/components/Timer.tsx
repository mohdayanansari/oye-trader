import React from 'react';
import { useTimer } from 'react-timer-hook';
type Props = {
  expiryTimestamp: any;
};

const Timer = ({ expiryTimestamp }: Props) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    // @ts-ignore
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });
  return (
    <div className="flex items-center justify-center w-full text-center">
      <div className="text-[18px]  md:text-[40px] flex text-black/20">
        {/* <div className="flex flex-col items-center justify-center gap-0 bg-white text-black w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-xl drop-shadow-lg">
          <span className="mt-[-5px] md:mt-[-20px]">
            {days < 10 ? `0${days}` : days}
          </span>
          <span className="text-xs text-white/40 mt-[-10px]">Day</span>{' '}
        </div>
        : */}
        <div className="flex flex-col items-center justify-center gap-0 bg-rose-500 text-white w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full drop-shadow-lg">
          <span className="">{hours < 10 ? `0${hours}` : hours}</span>
          <span className="text-xs text-white/40 ">Hours</span>{' '}
        </div>
        <div className="flex items-center h-[70px] md:h-[100px] mx-2">:</div>
        <div className="flex flex-col items-center justify-center gap-0 bg-rose-500 text-white w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full drop-shadow-lg">
          <span className="">{minutes < 10 ? `0${minutes}` : minutes}</span>
          <span className="text-xs text-white/40 ">Minutes</span>{' '}
        </div>
        <div className="flex items-center h-[70px] md:h-[100px] mx-2">:</div>

        <div className="flex flex-col items-center justify-center gap-0 bg-rose-500 text-white w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full drop-shadow-lg">
          <span className="">{seconds < 10 ? `0${seconds}` : seconds}</span>
          <span className="text-xs text-white/40 ">Seconds</span>{' '}
        </div>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      {/* <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
};

export default Timer;
