import { MeshGradient } from 'react-native-mesh-gradient';

export default function IOSMeshGradient() {
  return (
    <MeshGradient
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}
      points={[
        [0.0, 0.0],
        [1.0, 0.0],
        [0.0, 1.0],
        [1.0, 1.0]
      ]}
      colors={['#af65d5', '#5b8bcc', '#cc5f59', '#d2a95c']}
      animatedColors={['#cc5f59', '#af65d5', '#d2a95c', '#5b8bcc']}
      animationDuration={15}
    />
  );
}
