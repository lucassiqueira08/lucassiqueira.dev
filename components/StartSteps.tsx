import styles from "~/styles";

const StartSteps = ({ number, text }: { number: number; text: string }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <p className="text-[20px] font-bold text-white">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
