import React, { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 99) {
          clearInterval(interval);
          return 99;
        }
        return oldProgress + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <img
        src="/src/public/logo.gif"
        alt="Loading..."
        style={{ width: "200px", height: "200px" }}
      />
      <Box width="50%" mt={2}>
        <LinearProgress variant="determinate" value={progress} />
        <Box display="flex" justifyContent="center" mt={1}>
          <span>{progress}%</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Loading;
