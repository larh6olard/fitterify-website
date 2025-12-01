import React from 'react'
import womanBloodTestImg from '/src/assets/images/blood-test-component/blood-test-woman.png'
import manBloodTestImg from '/src/assets/images/blood-test-component/blood-test-man.png'

const BloodTest:React.FC = () => {
  return (
    <div>
      <img src={womanBloodTestImg} alt="" />
      <img src={manBloodTestImg} alt="" />
    </div>
  );
}

export default BloodTest