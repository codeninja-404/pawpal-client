import { useEffect, useState } from "react";

const Progress = ({ maxDonation, currentDonation }) => {
  const [progress, setProgress] = useState(0);
  

  useEffect(() => {
    const calculateProgress = () => {
      const newProgress = (currentDonation / maxDonation) * 100;
      setProgress(newProgress);
    };

    calculateProgress();
  }, [currentDonation, maxDonation]);
  return (
    <div className="flex justify-center items-center">
      <div>
        <p className="text-green-500">{Math.round(progress)}%</p>
      </div>
      <div
        className="h-2 w-full bg-red-500"
        style={{
          //   backgroundColor: "#f0f0f0",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#4caf50",
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
