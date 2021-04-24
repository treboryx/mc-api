import fetch from "node-fetch";
import { Player } from "./types";

export const player = async (player: string) => {
  const request = await fetch(
    `https://api.ashcon.app/mojang/v2/user/${player}`,
    {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }
  );
  return request.json();
};
