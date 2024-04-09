import notfoundImage from '../../assets/notFound.jpg';

function NotFound() {
  return (
    <div
      style={{ width: '100%', textAlign: 'center', marginTop: '10rem' }}
      id="wrapper"
    >
      <img src={notfoundImage} />
      <div id="info">
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
}

export default NotFound;
