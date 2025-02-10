import { useEffect, useState } from "react";
import { ref, get, set } from "firebase/database";
import { database } from "@/lib/firebase"; // Import existing Firebase setup

export default function NewWebsite() {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const websiteKey = "visitorHackersPlayground"; // Use the new key

  useEffect(() => {
    const visitorRef = ref(database, websiteKey);

    get(visitorRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const currentCount = snapshot.val() as number;
          const newCount = currentCount + 1;

          set(visitorRef, newCount); // Update Firebase
          setVisitorCount(newCount); // Update UI
        } else {
          set(visitorRef, 1); // Set initial count if not found
          setVisitorCount(1);
        }
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });
  }, []);

  return (
    <main className="text-gray-300 font-semibold text-xl">
      <p>Hackers Visited: <i className="text-pink-500 font-bold">{visitorCount}</i></p>
    </main>
  );
}
