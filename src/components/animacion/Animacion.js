import Lottie from 'react-lottie';
import portal from './portal.json';

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: portal,
  };

  return (
    <div className='container '>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Animation;
