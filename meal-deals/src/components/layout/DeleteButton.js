"use client"
import { useState } from "react";

export default function DeleteButton({ onDelete, label }) {
  const [confirm, setConfirm] = useState(false);

  if (confirm) {
    return (
      <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/70">
        <div className="max-w-lg mx-auto p-4 bg-bg rounded-xl z-10">
          <h5>Are you sure you want to {label}</h5>
          <div className="mb-2 flex gap-2 items-center">
            <button
              type="button"
              className="button"
              onClick={() => setConfirm(false)}
            >
              Cancle
            </button>
            <button
              type="button"
              className="button"
              onClick={() => {
                onDelete();
                setConfirm(false);
              }}
            >
              Yes, {label}
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
