"use client";

import { useState } from "react";

export const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-indigo-700 text-white"
        type="button"
      >
        Add new user
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 grid items-center align-middle justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-2xl max-h-full">
            <form
              className="relative bg-white rounded-lg shadow p-2 grid gap-8"
              onSubmit={async (e) => {
                e.preventDefault();

                //@ts-expect-error this exists
                const { name, email } = e.target;
                const body = JSON.stringify({
                  name: name.value,
                  email: email.value,
                });

                const response = await fetch(
                  "http://localhost:3000/client-components/api",
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body,
                  }
                );
                const user = await response.json();
                if (user.id) {
                  location.reload();
                }
              }}
            >
              <input placeholder="email" name={"email"} />
              <input placeholder="name" name={"name"} />
              <button className="p-2 bg-indigo-700 text-white">
                Add new user
              </button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
