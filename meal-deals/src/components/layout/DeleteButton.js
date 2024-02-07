import { useState } from "react";

export default function DeleteButton({ onDelete, label }) {
  const [confirm, setConfirm] = useState(false);

  if (confirm) {
    return (
      <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/70">
        <div className="max-w-md mx-auto p-4">
          <h5>Are you sure you want to {label}</h5>
          <div className="max-w-ms ml-auto mb-2">
            <button type="button">Cancle</button>
            <button 
            type="button" 
            onClick={() => 
              {onDelete(),
              setConfirm(false)}
            }>
              Yes, &nbsp;{label}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => setConfirm(true)}>
      {label}
    </button>
  );
}
