import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface Snapshot {
  state: any;
  timestamp: number;
}

interface TimeCapsuleContextType {
  snapshots: Snapshot[];
  currentSnapshot: any | null;
  saveSnapshot: (state: any) => void;
  restoreSnapshot: (index: number) => void;
  deleteSnapshot: (index: number) => void;
}

const TimeCapsuleContext = createContext<TimeCapsuleContextType | undefined>(
  undefined
);

interface TimeCapsuleProviderProps {
  children: ReactNode;
}

export const TimeCapsuleProvider: React.FC<TimeCapsuleProviderProps> = ({
  children,
}) => {
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [currentSnapshot, setCurrentSnapshot] = useState<any | null>(null);

  const saveSnapshot = useCallback((state: any) => {
    setSnapshots((prev) => [...prev, { state, timestamp: Date.now() }]);
  }, []);

  const restoreSnapshot = (index: number) => {
    setCurrentSnapshot(snapshots[index].state);
  };

  const deleteSnapshot = (index: number) => {
    const newSnapshots = snapshots.filter((_, i) => i !== index);
    setSnapshots(newSnapshots);
  };

  return (
    <TimeCapsuleContext.Provider
      value={{
        snapshots,
        currentSnapshot,
        saveSnapshot,
        restoreSnapshot,
        deleteSnapshot,
      }}
    >
      {children}
    </TimeCapsuleContext.Provider>
  );
};

export const useTimeCapsule = (): TimeCapsuleContextType => {
  const context = useContext(TimeCapsuleContext);
  if (!context) {
    throw new Error("useTimeCapsule must be used within a TimeCapsuleProvider");
  }
  return context;
};
