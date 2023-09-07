
const Background = () => {
    return (
      <div style={{ position: 'relative' }}>
        <img 
          src="/assets/background20.svg" 
          alt="background" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }} 
        />
        <div style={{ position: 'relative' }}>
      </div>
    </div>
  );
};
    export default Background;