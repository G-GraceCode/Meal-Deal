"use client";
import { useEffect, useState } from "react";

export function userProfile() {
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/profile").then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoading(false);
      });
    });
  }, []);
  return { loading, data };
}
