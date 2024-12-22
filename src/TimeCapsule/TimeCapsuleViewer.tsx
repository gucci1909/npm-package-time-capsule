import { useTimeCapsule } from './TimeCapsuleProvider';

export const TimeCapsuleViewer = () => {
  const { snapshots, restoreSnapshot, deleteSnapshot } = useTimeCapsule();

  return (
    <div>
      <h2>Time Capsule Snapshots</h2>
      {snapshots.length === 0 ? (
        <p>No snapshots available.</p>
      ) : (
        <ul>
          {snapshots.map((snapshot, index) => (
            <li key={index}>
              <div>
                <span>Saved at: {new Date(snapshot.timestamp).toLocaleString()}</span>
                <button onClick={() => restoreSnapshot(index)}>Restore</button>
                <button onClick={() => deleteSnapshot(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};