import Image from "@/components/share/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./player.css";
import { Next, Pause, Play, Previous, VolumeHigh } from "iconsax-react";
import PlayerImpl from "./types";
import { isEmpty } from "lodash";
import FadeAnimation from "@/components/share/fade-animation/fade-animation";

const Player = ({ podcasts, selectedPod }: PlayerImpl) => {
  return (
    <>
      <FadeAnimation className="w-full" inProp={!isEmpty(selectedPod)}>
        <div
          className="w-full flex justify-between items-center bg-[#111727] 
      h-full shadow-md border-t-slate-900 border-t-2 py-4 px-6"
        >
          <div className="w-[202px] flex justify-center items-center">
            <div className="flex justify-center items-start">
              <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0.5s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0.25s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_1.25s_ease-in-out_infinite]"></span>
              <span className="w-0.5 h-7 border-r-2 border-slate-600  mx-[1px] animate-[wave_1s_0s_ease-in-out_infinite]"></span>
            </div>
            <div className="flex justify-center items-center">
              <div className="min-w-[30px] aspect-square mx-3 rounded overflow-hidden">
                <Image
                  width={60}
                  height={60}
                  className="object-cover object-center w-full h-full"
                  alt={selectedPod.title}
                  src={selectedPod.image}
                />
              </div>
              <div className="w-full flex justify-end items-center flex-col ">
                <h4 className="w-full truncate text-slate-200 text-sm font-bold max-w-[133px]">
                  {selectedPod.title}
                </h4>
                <span className="w-full truncate text-slate-400 text-[13px] mt-0.5 max-w-[133px]">
                  {selectedPod.speaker}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full" dir="ltr">
            <AudioPlayer
              autoPlay
              className="w-full"
              src={selectedPod.src}
              showFilledVolume={true}
              customAdditionalControls={[]}
              customIcons={{
                play: <Play />,
                forward: <Next />,
                rewind: <Previous />,
                volume: <VolumeHigh />,
                volumeMute: <VolumeHigh />,
                pause: <Pause />,
              }}
            />
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};
export default Player;
