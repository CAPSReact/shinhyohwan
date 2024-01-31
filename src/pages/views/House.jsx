import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { WrapperStyle, Box, InGameButtonStyle } from "../../styles/style";
import { OutHouse } from "../../components/3d/OutHouse";


export default function House() {
    const navigate = useNavigate();
  return (
    <>
      <WrapperStyle>
        <Box>
          <Canvas camera={{ position: [80, 5, -8] }}>
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <OutHouse />
            </group>
          </Canvas>
          <InGameButtonStyle onClick={() => {navigate("/InSide");}}>입장하기</InGameButtonStyle>
        </Box>
      </WrapperStyle>
    </>
  );
}

