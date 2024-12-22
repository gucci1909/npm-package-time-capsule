import React, { useEffect, useState } from "react";
import { useTimeCapsule } from "react-time-capsule";

// Custom component to display saved snapshots
const TimeCapsuleViewer: React.FC = () => {
  const { snapshots, restoreSnapshot, deleteSnapshot } = useTimeCapsule();

  return (
    <div>
      <h2>Saved Snapshots</h2>
      <ul>
        {snapshots.map((snapshot, index) => (
          <li key={index}>
            <button onClick={() => restoreSnapshot(index)}>Restore</button>
            <button onClick={() => deleteSnapshot(index)}>Delete</button>
            <span>Snapshot {index + 1}</span>
            <br />
            <span>{snapshot.state.name}</span>
            <br />
            <span>{snapshot.state.email}</span>
            <br />
            <span>
              TimeStamp:
              {snapshot.timestamp}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });
  const { saveSnapshot, currentSnapshot } = useTimeCapsule();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveState = () => {
    saveSnapshot(formState);
  };

  useEffect(() => {
    if (currentSnapshot && Object.keys(currentSnapshot)?.length > 0) {
      setFormState(currentSnapshot);
    }
  }, [currentSnapshot]);

  return (
    <div>
      <h1>Time Capsule Example</h1>
      <div>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
      </div>
      <button onClick={handleSaveState}>Save State</button>
      <TimeCapsuleViewer />
    </div>
  );
};

export default App;
