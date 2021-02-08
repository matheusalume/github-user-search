import ContentLoader from 'react-content-loader';

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={278}
    height={315}
    viewBox="0 0 278 315"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="0" y="0" rx="10" ry="10" width="278" height="268" /> 
    <rect x="0" y="279" rx="10" ry="10" width="156" height="36" />
  </ContentLoader>
)

export default ImageLoader;